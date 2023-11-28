"use server";

import { z } from "zod";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function fetchCity(_prevState: any, formData: FormData) {
  const schema = z.object({
    name: z.string()
      .min(1, "Вкажіть назву міста!")
      .max(50, "Назва міста занадто довга!")
  });

  const parse = schema.safeParse({
    name: formData.get("name")
  });

   if (!parse.success) {
    return { message: 'Failed to create todo' }
   }

  try {
    const data = await fetch("https://api.novaposhta.ua/v2.0/json/", {
      headers: {
      "Content-Type": "application/json",
    },
      body: JSON.stringify({
        "apiKey": process.env.NOVA_POSTA_API_KEY,
        "modelName": "Address",
        "calledMethod": "searchSettlements",
        "methodProperties": {
          "CityName" : parse,
          "Limit" : "50",
          "Page" : "1"
        }
      })
    });

    return data;
  } catch (error) {
    return {
      message: "Помилка при пошуку міста"
    }
  }
}
