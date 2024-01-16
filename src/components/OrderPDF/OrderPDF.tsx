import { jsPDF } from "jspdf";

import { formatDate, getMoneyFormat } from "@/lib/utils";
import { callAddFont } from "../../fonts/Bitter-Regular-normal";

import { Order } from "@prisma/client";
import { CartItem } from "@/types/CartItem";

const generatePDF = (order: Order) => {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  if (doc["addFileToVFS"] && doc["addFont"]) {
    callAddFont.call(doc);
  }

  doc.setFont("Bitter-Regular");

  doc.setFontSize(20);
  doc.text("Eppo", 10, 10);

  doc.setFontSize(12);
  doc.text(`Дата замовлення: ${formatDate(order.createdAt)}`, 10, 20);
  doc.text(`Ім'я: ${order.name}`, 10, 25);
  doc.text(`Телефон: ${order.phone}`, 10, 30);
  doc.text(`Коментар: ${order.comment}`, 10, 35);

  doc.text(`Місто: ${order.city}`, 120, 20);
  doc.text(`Відділення: ${order.postOfficeNumber}`, 120, 25);
  doc.text(
    `Отримувач: ${order.recipientLastName} ${order.recipientFirstName} ${order.recipientSurnameName}`,
    120,
    30,
  );
  doc.text(`Телефон отримувача: ${order.recipientPhone}`, 120, 35);

  const products: CartItem[] = JSON.parse(order.items as string);

  let yPosition = 75;

  products.forEach((product, index) => {
    const productQuantity = product.ringSizes?.length
      ? product.ringSizes.reduce((total, size) => total + size.quantity, 0)
      : product.quantity;
    const total = product.price * productQuantity!;

    doc.text(`${index + 1}`, 10, yPosition);
    doc.addImage(product.photo, "JPEG", 20, yPosition - 22.5, 45, 45);
    doc.text(product.article, 85, yPosition);
    doc.text(`${getMoneyFormat(product.price)}`, 120, yPosition);
    doc.text(`${productQuantity}`, 150, yPosition);
    doc.text(`${getMoneyFormat(total)}`, 180, yPosition);

    yPosition += 50;
  });

  doc.setFontSize(14);
  doc.text(
    `Загальна сума: ${getMoneyFormat(order.totalSum)}`,
    20,
    yPosition - 10,
  );

  const blob = doc.output("blob");
  const url = URL.createObjectURL(blob);
  window.open(url, "_blank");
};

export default generatePDF;
