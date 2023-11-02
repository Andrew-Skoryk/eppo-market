import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function CreateProduct(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const product = await prisma.product.create({
        data: req.body,
      });
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: 'Помилка при додаванні товару' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
