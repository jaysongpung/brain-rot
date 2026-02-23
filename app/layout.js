import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Brain Rot — 브레인롯, 과학동아 인터랙티브",
  description: "옥스퍼드가 선정한 2024년 올해의 단어 '브레인롯'을 과학적으로 분석하고, 4주간 숏폼을 끊는 챌린지로 뇌의 변화를 추적한 인터랙티브 기사",
};

export default function RootLayout({ children }) {
  console.log('[brain-rot] build v2 — basePath:', process.env.NEXT_PUBLIC_BASE_PATH || '(none)');
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
