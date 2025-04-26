import type { NextConfig } from "next";

const api_url = process.env.API_URL ?? "";

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
