"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import Store from "@/store";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Counter</title>
      </head>
      <body className={inter.className}>
        <Provider store={Store}>{children}</Provider>
      </body>
    </html>
  );
}
