import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(req: NextRequest) {
  const data = await req.json();
  console.log("ITS DATA!: ",data);

  try {
    const product = await db.product.create({
      data
    });

    return NextResponse.json({ product }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, {status: 500})
  }
}
