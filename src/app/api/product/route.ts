import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(req: NextRequest) {
  const data = await req.json();

  try {
    const product = await db.product.create({
      data
    });

    return NextResponse.json({ product }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, {status: 500})
  }
}

export async function DELETE(req: NextRequest) {
  const id = await req.json();

  try {
    await db.product.delete({
      where: {
        id
      }
    });

    return NextResponse.json({ status: 204 });
  } catch (error) {
    return NextResponse.json({ error }, {status: 500})
  }
}
