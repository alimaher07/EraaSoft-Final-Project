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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <Nav />
      <body className="min-h-full flex flex-col font-heebo">{children}</body>
    </html>
  );
}
