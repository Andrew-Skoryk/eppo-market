import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const query = await req.json();

  if (!query || typeof query !== 'string') {
    return NextResponse.json({ error: 'Query parameter is missing or invalid' }, {status: 400})
  }

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
      },
      where: {
         article: { contains: query },
      },
    });

    return NextResponse.json({ products }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error }, {status: 500})
  }
}
