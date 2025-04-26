import type { NextConfig } from "next";

const api_url = process.env.NEXT_PUBLIC_API_URL ?? "";
console.log("api_url", api_url);
const nextConfig: NextConfig = {
  images: {
    domains: [
      "www.mundoperros.es",
      "web.archive.org",
      "localhost",
      "patitasbucket.s3.sa-east-1.amazonaws.com",
      "patitas-app.netlify.app",
      api_url,
    ],
  },
};

export default nextConfig;
