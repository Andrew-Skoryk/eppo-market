import { NextApiRequest, NextApiResponse } from 'next';
import {v2 as cloudinary} from 'cloudinary';

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const fileStr = req.body.data;
  console.log(fileStr);

  try {
  const uploadResponse = await cloudinary.uploader.upload(fileStr,
  //   {
  // upload_preset: 'YOUR_UPLOAD_PRESET', 
  //   }
  );
    res.status(200).json({
      public_id: uploadResponse.public_id,
      url: uploadResponse.url
    });
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500);
  }
};
