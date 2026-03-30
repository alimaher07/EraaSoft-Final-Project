"use client"

import "./globals.css";
import Nav from './Components/Nav/nav'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Nav />
      <body className="min-h-full flex flex-col font-heebo">{children}</body>
    </html>
  );
}
