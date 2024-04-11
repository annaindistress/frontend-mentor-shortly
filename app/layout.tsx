import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["500", "700"] });

export const metadata: Metadata = {
  title: "Frontend Mentor | Shortly",
  description: "Shortly － URL shortening API challenge on Frontend Mentor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} font-medium`}>{children}</body>
    </html>
  );
}
