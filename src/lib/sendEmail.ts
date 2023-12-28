import { Order } from '@prisma/client';
import { Resend } from 'resend';

export async function sendEmail(order: Order) {
  "use server";

  const resend = new Resend(process.env.RESEND_API_KEY)

  await resend.emails.send({
    from: "eppo.sales.api@resend.dev",
    to: "eppo.sales@gmail.com",
    subject: "Нове замовлення!",
    html: `<h1>Вітаю! У вас нове замовлення на суму ${order.totalSum} від ${order.name}!</h1>`,
  });
};
