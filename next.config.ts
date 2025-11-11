import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com", // ✅ Cloudinary support
      },
      {
        protocol: "https",
        hostname: "ibb.co", // ✅ ImgBB support
      },
      {
        protocol: "http",
        hostname: "localhost", // ✅ local dev images
      },
    ],
  },

  // 👇 Add your redirect here
  async redirects() {
    return [
      {
        source: "/signed_bg",
        destination: "https://zfrmz.in/7oGOIs1yHb2rUlfpiQ8K",
        permanent: false, // use true if you want 301 permanent redirect
      },
    ];
  },
};

export default nextConfig;
