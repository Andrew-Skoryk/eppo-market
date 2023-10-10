"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotalPrice,
} from "../../../redux/selectors/cartSelectors";
import { loadCartItems } from "../../../redux/slices/cartSlice";
import { AppDispatch } from "../../../redux/store";

function Cart() {
  const dispatch: AppDispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotalPrice);

  useEffect(() => {
    dispatch(loadCartItems());
  }, [dispatch]);
  return (
    <section className="space-y-8">
      <span>Lets Fetch, Babby!</span>
      <p>
        Загальна сума: {totalPrice}гривень та кількість позицій товарів:{" "}
        {cartItems.length}
      </p>
    </section>
  );
}

export default Cart;
