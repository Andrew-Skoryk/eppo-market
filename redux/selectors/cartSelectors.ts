import { createSelector } from 'reselect';
import { RootState } from '../store';
import { CartItem } from '@/types/CartItem';

export const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartTotalPrice = createSelector(
  selectCartItems,
  (items: CartItem[]) => items.reduce((total: number, item: CartItem) => total + item.price * item.quantity, 0)
);
