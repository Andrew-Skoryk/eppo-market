import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get('query') || '';
  const page = parseInt(req.nextUrl.searchParams.get('page') || '1', 10);
  const limit = parseInt(req.nextUrl.searchParams.get('limit') || '10', 10);
  const offset = (page - 1) * limit;

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
      take: limit,
      skip: offset,
    });

    const totalProducts = await db.product.count({
      where: {
        article: { contains: query },
      },
    });

    return NextResponse.json({ products, total: totalProducts }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}
