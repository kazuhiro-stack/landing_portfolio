import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VOYAGE WORKS — 旅行業界特化のWeb制作集団",
  description:
    "旅行業界に特化したWeb制作集団。集客・予約・体験設計まで、デジタルの力で旅をデザインします。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Noto+Serif+JP:wght@200;300;400&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="page-wrapper">{children}</div>
      </body>
    </html>
  );
}
