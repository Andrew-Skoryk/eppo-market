import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    console.log("Hi first");
    const products = await db.product.findMany({
    select: {
      id: true,
      photo: true,
      price: true,
      category: true,
      subcategory: true,
      article: true,
      sizes: true,
    }
    });

        console.log("Hi second");


    return NextResponse.json({ products }, { status: 200 })
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, {status: 500})
  }
}
