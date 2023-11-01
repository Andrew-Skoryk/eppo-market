import { NextApiRequest, NextApiResponse } from 'next';
import {v2 as cloudinary} from 'cloudinary';

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

function Uploader(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const fileStr = req.body.data;

    cloudinary.uploader.upload(fileStr, { resource_type: 'image' }, (error, uploadedResponse) => {
      if (error || !uploadedResponse) {
        res.status(500).json({ error: 'Unable to upload image' });
      } else {
        res.json({ url: uploadedResponse.secure_url });
      }
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

export default Uploader;
