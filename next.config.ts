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

  // ✅ Multiple redirects
  async redirects() {
    return [
      {
        source: "/sign",
        destination: "https://zfrmz.in/UotLNR6yS254MSfFzrCb",
        permanent: false,
      },
      {
        source: "/store",
        destination: "https://zfrmz.in/8sZaGOkzagBW8tqiF0b8",
        permanent: false,
      },
      {
        source: "/gita",
        destination: "https://zfrmz.in/7oGOIs1yHb2rUlfpiQ8K",
        permanent: false,
      },
      {
        source: "/gita_custom",
        destination: "https://zfrmz.in/7oGOIs1yHb2rUlfpiQ8K",
        permanent: false,
      },
      {
        source: "/gitateam",
        destination: "https://zfrmz.in/dwSUjlTEpbxoJ3M3lhDN",
        permanent: false,
      },
      {
        source: "/gita_form",
        destination: "https://forms.gle/JhAtDeAiG9afk2mj6",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
