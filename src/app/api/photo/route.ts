import { NextRequest, NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get('file');

  if (!file || typeof file === 'string') {
    return new NextResponse(null, { status: 400 });
  }

  try {
    const buffer = await file.arrayBuffer();
    const base64String = Buffer.from(buffer).toString('base64');
    const fileBase64 = `data:${file.type};base64,${base64String}`;

    const cloudinaryResponse = await cloudinary
      .uploader
      .upload(fileBase64, {
        public_id: file.name,
        use_filename: true,
        folder: "products",
        unique_filename: false,
        height: 1000,
        width: 1000,
        crop: "scale",
        format: "webp",
      },);

    return new NextResponse(JSON.stringify({
      public_id: cloudinaryResponse.public_id,
      url: cloudinaryResponse.url
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error uploading image:', error);
    return new NextResponse(null, { status: 500 });
  }
}
