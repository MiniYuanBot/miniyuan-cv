import type { Metadata } from "next";
import type React from "react";

import "./globals.css";
import { RESUME_DATA } from "@/data/resume-data";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} - Resume`,
  description: RESUME_DATA.about,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
