"use server";

import { revalidateTag } from "next/cache";
import { db } from "@/lib/db";
import { z } from "zod";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function changeMinOrder(_prevState: any, formData: FormData) {
  const schema = z.object({
    price: z.number()
      .min(1, "Вкажіть мінімальну суму замовлення!")
  });

  const parse = schema.safeParse({
    price: Number(formData.get("price"))
  });

   if (!parse.success) {
    return { message: "Помилка при зміні мінімальної сумми замовлення" }
   }

  try {
    const data = await db.settings.update({
      where: {
        name: "minOrderAmount"
      },
      data: {
        value: parse.data.price
      }
    })

    revalidateTag("settings");
    return data;
  } catch (error) {
    return {
      message: "Помилка при зміні мінімальної сумми замовлення"
    }
  }
}
