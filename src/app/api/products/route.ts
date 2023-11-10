import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
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

    return NextResponse.json({ products }, { status: 200 })
  } catch (error) {
     return NextResponse.json({ error }, {status: 500})
  }
}
