"use client";

import { Layout } from "@/components";
import "./globals.css";
import { metadata } from "./metadata";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ subsets: ["latin"], weight: ["400", "700"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title as string}</title>
        <meta name="description" content={metadata.description as string} />
      </head>
      <body className={quicksand.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
