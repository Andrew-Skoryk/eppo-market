import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(_req:NextRequest, { params }: { params: { params: string[] } }) {
  const [category, subcategory, pageStr] = params.params;
  const limit = 1;

  const page = parseInt(pageStr, 10);
  const offset = (page - 1) * limit;

  try {
    const products = await db.product.findMany({
      where: {
        category: category,
        subcategory: subcategory
      },
      take: limit,
      skip: offset,
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
