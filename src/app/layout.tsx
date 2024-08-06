import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { colourChanger } from "@/utils";
import { useEffect } from "react";

export const metadata: Metadata = {
  title: "Micheal Hoey",
  description: "My personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <html lang="en">{children}</html>;
}
