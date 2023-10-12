import { CartItem } from '@/types/CartItem';
import { testProduct } from '@/types/testProduct';
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
    addItem: (state, action: PayloadAction<{ item: testProduct, quantity: number }>) => {
      const existingItem = state.items.find(i => i.id === action.payload.item.id);

      if (existingItem) {
        existingItem.quantity += +action.payload.quantity;
      } else {
        state.items.push({...action.payload.item, quantity: action.payload.quantity});
      }

      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const item = state.items.find(i => i.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
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

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
