import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import { analytics } from '../lib/firebase';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js on GitHub Pages",
  description: "A Next.js web application on GitHub Pages",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GA_ID as string} />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
