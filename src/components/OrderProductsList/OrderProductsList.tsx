"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  selectCartItems,
  selectCartTotalPrice,
} from "../../redux/selectors/cartSelectors";
import { AppDispatch } from "../../redux/store";
import { loadCartItems } from "../../redux/slices/cartSlice";
import { getMoneyFormat } from "@/lib/utils";

import OrderProductCard from "../OrderProductCard";

function OrderProductsList() {
  const dispatch: AppDispatch = useDispatch();
  const orderItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotalPrice);

  useEffect(() => {
    dispatch(loadCartItems());
  }, [dispatch]);

  return (
    <div className="flex flex-col gap-3 ">
      <div className="overflow-y-auto h-[850px]">
        {orderItems.map(item => (
          <OrderProductCard key={item.id} item={item} />
        ))}
      </div>

      <div className="p-1.5 bg-amber-100 rounded-md text-lg flex justify-between w-full text-center shadow-lg">
        <p>До сплати:</p>
        <p className="text-2xl">{getMoneyFormat(totalPrice)}</p>
      </div>
    </div>
  );
}

export default OrderProductsList;
