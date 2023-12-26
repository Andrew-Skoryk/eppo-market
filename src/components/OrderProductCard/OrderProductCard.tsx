"use client";

import React from "react";

import { CartItem } from "@/types/CartItem";
import { getMoneyFormat } from "@/lib/utils";

import { Image as NextUIImage } from "@nextui-org/react";

function OrderProductCard({ item }: { item: CartItem }) {
  const calculateTotalPrice = () => {
    if (item.ringSizes && item.ringSizes.length > 0) {
      return item.ringSizes.reduce(
        (total, cartSize) => total + cartSize.quantity * item.price,
        0,
      );
    }
    return item.quantity ? item.price * item.quantity : 0;
  };

  const totalPrice = calculateTotalPrice();
  const isRing = item.subcategory === "Кольца";
  return (
    <div className="flex items-center justify-between p-4 m-2 space-x-6 transition-colors bg-gray-100 border rounded-md shadow-lg hover:bg-gray-200">
      <div className="flex items-center flex-grow space-x-4">
        <NextUIImage
          title={item.article}
          src={item.photo}
          alt={item.article}
          width={130}
          loading="lazy"
          isBlurred={false}
          isZoomed={true}
          radius="none"
          className="z-0"
        />

        <div>
          <h3 title="Артикул" className="text-lg font-semibold">
            {item.article}
          </h3>

          <p title="Ціна за одиницю" className="text-gray-500">
            {getMoneyFormat(item.price)}
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-5">
        {!isRing ? (
          <p>Кількість: {item.quantity}</p>
        ) : (
          <div className="flex flex-col space-y-2">
            {item.ringSizes!.map(cartSize => (
              <p key={cartSize.size} className="flex justify-between w-full gap-1">
                <span>Розмір {cartSize.size} :</span>
                <span>{cartSize.quantity}</span>
              </p>
            ))}
          </div>
        )}

        <div
          className="w-24 text-lg font-semibold text-center"
          title={"Загальна сума"}
        >
          {getMoneyFormat(totalPrice)}
        </div>
      </div>
    </div>
  );
}

export default React.memo(OrderProductCard);
