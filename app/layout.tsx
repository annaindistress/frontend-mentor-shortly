import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/app/globals.css";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

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
      <body
        className={`${poppins.className} grid h-dvh grid-rows-[max-content_1fr_max-content] font-medium text-zinc-400 antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
