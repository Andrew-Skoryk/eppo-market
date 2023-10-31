"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotalPrice,
} from "../../redux/selectors/cartSelectors";
import { loadCartItems } from "../../redux/slices/cartSlice";
import { AppDispatch } from "../../redux/store";
import { getMoneyFormat } from "@/lib/utils";
import ProductCardInCart from "../ProductCardInCart";
import Headings from "../UI/Headings";
import ButtonLink from "../UI/ButtonLink";
import { MINIMUM_ORDER_AMOUNT } from "../../config";
import MinValueOrderBlock from "../MinValueOrderComp/MinValueOrderComp";

function Cart() {
  const dispatch: AppDispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotalPrice);

  const isEnoughPrice = MINIMUM_ORDER_AMOUNT <= totalPrice;

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
  console.log(isEnoughPrice);

  return (
    <section className="flex flex-col items-center gap-8">
      <div>
        {cartItems.map(item => (
          <ProductCardInCart key={item.id} item={item} />
        ))}
      </div>

      <div className="p-1.5 bg-amber-100 rounded-md text-lg flex justify-between w-full text-center shadow-lg">
        <p>До сплати:</p>
        <p className="text-2xl">{getMoneyFormat(totalPrice)}</p>
      </div>

      {!isEnoughPrice && <MinValueOrderBlock />}

      <ButtonLink
        href="/checkout"
        isDisabled={!isEnoughPrice}
        className="py-6 text-lg font-semibold"
      >
        Оформити замовлення
      </ButtonLink>
    </section>
  );
}

export default Cart;
