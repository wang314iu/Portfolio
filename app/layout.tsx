import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alice Portfolio",
  description: "Alice's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
        <meta name="metadata.title" content="metadata.description" />
        {/* <title>Alice Portfolio</title> */}
      </head>
      <body className={`${inter.className} bg-black`}>{children}</body>
    </html>
  );
}
