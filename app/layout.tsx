import type { Metadata } from "next";
// 引入 Inter 字体
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

// 配置 Inter 字体
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans", // 将其定义为 CSS 变量
});

export const metadata: Metadata = {
  title: "GameWiki — The AI Assistant Over Your Game",
  description:
    "A pin-top browser and game-native knowledge base. Less Alt-Tab, more progress.",
  openGraph: {
    title: "GameWiki — The AI Assistant Over Your Game",
    description: "Pin-top browser + game-native knowledge base.",
    images: ["/og.png"], // 确保在 public 文件夹下有这个文件
    url: "https://gamewiki.app", // 替换为你的域名
    siteName: "GameWiki",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og.png"], // 确保在 public 文件夹下有这个文件
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${inter.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
