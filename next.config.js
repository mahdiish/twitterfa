/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
};
module.exports = {
  experimental: {
    serverActions: true,
  },
  images: {
    formats: ["image/webp"],
  },
};
