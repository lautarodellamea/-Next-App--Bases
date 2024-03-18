import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lautaro's Home Page",
  description: "Generated with love by Vercel",
};

export default function RootLayout({ children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col">
          <span>RootLayout</span>
          {children}
        </div>
      </body>
    </html>
  );
}
