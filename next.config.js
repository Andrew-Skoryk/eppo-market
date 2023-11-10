/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
     domains: ['res.cloudinary.com'],
     formats: ['image/avif', 'image/webp'],
     remotePatterns: [
      {
        protocol: "https",
        hostname: 'res.cloudinary.com',
        port: "",
        pathname: "destxrozf/**)",
      },
    ],
  }
};

module.exports = nextConfig;
