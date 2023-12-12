import { CartItem } from '@/types/CartItem';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartState {
  items: CartItem[];
  error: string | null;
}

const initialState: CartState = {
  items: [],
  error: null,
};

export const loadCartItems = createAsyncThunk('cart/loadItems', async (_, { rejectWithValue }) => {
  try {
    const storedItems = localStorage.getItem('cartItems');

    return storedItems ? JSON.parse(storedItems) : [];
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }

    return rejectWithValue('Failed to load cart items');
  }
});

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
  addItem: (state, action: PayloadAction<CartItem>) => {
    const { id, photo, price, category, subcategory, article, ringSizes, quantity } = action.payload;
    const existingItem = state.items.find(i => i.id === id);


    if (existingItem) {
      if (ringSizes) {
        ringSizes.forEach(cartSize => {
          const existingSizeDetail = existingItem.ringSizes?.find(detail => detail.size === cartSize.size);
          if (existingSizeDetail) {
            existingSizeDetail.quantity = Number(existingSizeDetail.quantity) + Number(cartSize.quantity);
          } else {
            if (!existingItem.ringSizes) existingItem.ringSizes = [];
            existingItem.ringSizes.push(cartSize);
          }
        });
      } else if (quantity) {
        existingItem.quantity = Number(existingItem.quantity || 0) + Number(quantity);
      }
    } else {
      state.items.push({
        id,
        photo,
        price,
        category,
        subcategory,
        article,
        ringSizes: ringSizes || [],
        quantity: quantity || 0,
      });
    }

    localStorage.setItem('cartItems', JSON.stringify(state.items));
  },

    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },

    removeSizeFromItem: (state, action: PayloadAction<{ id: string; size: number }>) => {
      const { id, size } = action.payload;
      const item = state.items.find(i => i.id === id);

      if (item && item.ringSizes) {
        item.ringSizes = item.ringSizes.filter(detail => detail.size !== size);
      }

      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },

    updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number; size?: number }>) => {
      const { id, quantity, size } = action.payload;
      const item = state.items.find(i => i.id === id);

      if (item) {
        if (size !== undefined && item.ringSizes) {
          item.ringSizes = item.ringSizes.map(detail =>
            +detail.size === size ? { ...detail, quantity: quantity } : detail
          );
          
        } else {
          item.quantity = quantity;
        }

        localStorage.setItem('cartItems', JSON.stringify(state.items));
      }
    },
  },

  extraReducers: (builder) => {
    builder.addCase(loadCartItems.fulfilled, (state, action) => {
      state.items = action.payload;
    });
    builder.addCase(loadCartItems.rejected, (state, action) => {
      state.error = action.error.message || null;
    });
  }
});

export const { addItem, removeItem, updateQuantity, removeSizeFromItem } = cartSlice.actions;

export default cartSlice.reducer;
