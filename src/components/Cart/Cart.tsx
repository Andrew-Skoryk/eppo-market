"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotalPrice,
} from "../../../redux/selectors/cartSelectors";
import { loadCartItems } from "../../../redux/slices/cartSlice";
import { AppDispatch } from "../../../redux/store";
import ProductCardInCart from "../ProductCardInCart";
import Headings from "../UI/Headings";

function Cart() {
  const dispatch: AppDispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotalPrice);

  useEffect(() => {
    dispatch(loadCartItems());
  }, [dispatch]);

  if (!cartItems.length) {
    return (
      <section className="text-center">
        <Headings level={2}>Ваш кошик порожній</Headings>
        <p>Але це ніколи не пізно виправити :)</p>
      </section>
    );
  }

  return (
    <section className="flex flex-col items-center gap-8">
      <div>
        {cartItems.map(item => (
          <ProductCardInCart key={item.id} item={item} />
        ))}
      </div>

      <p>
        Загальна сума: {totalPrice}гривень та кількість позицій товарів:{" "}
        {cartItems.length}
      </p>

      <button className="p-2 border rounded-md bg-amber-400 text-lime-800 border-amber-500 hover:bg-amber-500 active:bg-amber-600 transition-colors duration-300">
        Оформити замовлення
      </button>
    </section>
  );
}

export default Cart;
