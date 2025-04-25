import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "www.mundoperros.es",
      "web.archive.org",
      "localhost",
      "patitasbucket.s3.sa-east-1.amazonaws.com",
      "patitas-app.netlify.app",
    ],
  },
};

export default nextConfig;
