import { createSelector } from 'reselect';
import { RootState } from '../store';
import { CartItem } from '@/types/CartItem';

export const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartTotalPrice = createSelector(
  selectCartItems,
  (items: CartItem[]) => items.reduce((total: number, item: CartItem) => {
    if (item.ringSizes && item.ringSizes.length > 0) {
      return total + item.ringSizes.reduce((sizeTotal, size) => sizeTotal + item.price * size.quantity, 0);
    }
    return total + (item.price * (item.quantity || 0));
  }, 0)
);
