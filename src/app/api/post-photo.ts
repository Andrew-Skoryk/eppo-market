import { NextApiRequest, NextApiResponse } from 'next';
import {v2 as cloudinary} from 'cloudinary';

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

function postPhoto(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const fileStr = req.body.data;

    cloudinary.uploader.upload(fileStr, { resource_type: 'image' }, (error, uploadedResponse) => {
      if (!fileStr || typeof fileStr !== 'string') {
        res.status(400).json({ error: 'Invalid image data' });
        return;
      }

      if (error) {
        console.error("Cloudinary Error:", error);
        res.status(500).json({ error: 'Unable to upload image' });
        return;
      }

      if (error || !uploadedResponse) {
        res.status(500).json({ error: error });
      } else {
        res.json({ url: uploadedResponse.secure_url });
      }
    });

  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

export default postPhoto;
