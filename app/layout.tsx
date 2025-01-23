import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Movi Club",
  description: "Watch, rate, and review.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"antialiased"}>{children}</body>
    </html>
  );
}
