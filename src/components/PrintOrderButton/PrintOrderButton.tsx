"use client";

import generatePDF from "@/components/OrderPDF";

import { Order } from "@prisma/client";
import { Button } from "@nextui-org/react";

function PrintOrderButton({ order }: { order: Order }) {
  return (
    <Button
      onClick={() => generatePDF(order)}
      color="success"
      className="self-end py-6 text-lg font-semibold"
    >
      Роздрукувати Замовлення
    </Button>
  );
}

export default PrintOrderButton;
