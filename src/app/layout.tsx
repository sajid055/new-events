import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MiraiEvents - AI-Powered Event Management",
  description: "Modern Landing Page with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}