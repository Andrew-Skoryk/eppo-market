"use server";

import { revalidateTag } from "next/cache";
import { db } from "@/lib/db";
import { z } from "zod";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function changeMinOrder(_prevState: any, formData: FormData) {
  const schema = z.object({
    rate: z.number()
      .min(1, "Вкажіть правильний курс!")
  });

  const parse = schema.safeParse({
    rate: Number(formData.get("rate"))
  });

   if (!parse.success) {
    return { message: "Помилка при зміні курсу!" }
   }

  try {
    const data = await db.settings.update({
      where: {
        name: "exchangeRate"
      },
      data: {
        value: parse.data.rate
      }
    })

    revalidateTag("settings");
    return data;
  } catch (error) {
    return {
      message: "Серверна помилка при зміні курсу!"
    }
  }
}
