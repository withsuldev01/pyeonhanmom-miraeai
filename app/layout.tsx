import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "미래아이 심리발달 클리닉 | 편한몸 의원 부설",
  description:
    "언어, 인지, 감각, 운동, 사회성 발달을 종합적으로 살피는 아동 심리발달 클리닉입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
