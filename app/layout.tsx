import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Paperfolio",
  description: "High-contrast ML portfolio for FATBOY."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
