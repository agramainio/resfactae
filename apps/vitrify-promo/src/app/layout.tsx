import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "vitrify — production journal for ceramic ateliers",
  description:
    "vitrify records pieces, firings, failures, stock, students, classes, clients, orders, tests, and the history around them.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
