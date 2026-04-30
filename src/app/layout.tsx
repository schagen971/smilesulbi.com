import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://smilesulbi.com'),
  title: {
    default: '스마일설비 - 수도권 전지역 하수구막힘 누수탐지 전문',
    template: '%s | 스마일설비',
  },
  alternates: {
    canonical: '/',
  },
  description:
    '수도권 전지역 하수구막힘, 누수탐지, 배관공사 전문. 30분내 긴급출동, 최신 장비와 정직한 가격으로 해결해드립니다. 010-7537-1414',
  keywords: [
    '하수구막힘',
    '누수탐지',
    '배관공사',
    '수도권하수구',
    '수도권누수탐지',
    '수도권배관공사',
    '싱크대막힘',
    '변기막힘',
    '스마일설비',
  ],
  authors: [{ name: '스마일설비' }],
  creator: '스마일설비',
  publisher: '스마일설비',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/icon.png',
  },
  verification: {
    other: {
      'naver-site-verification': '228aa80bbb2d87d4f14e4a828775fdf4426e54f0',
    },
  },
  openGraph: {
    title: '스마일설비 - 하수구막힘/누수탐지 해결사',
    description:
      '타 업체가 포기한 현장도 해결! 못 뚫으면 0원. 24시간 긴급출동 서비스.',
    url: 'https://smilesulbi.com',
    siteName: '스마일설비',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '스마일설비 대표 이미지',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${notoSansKr.variable} font-sans antialiased`}>
        {children}

        {/* LOGGER(TM) TRACKING SCRIPT V.40 FOR logger.co.kr / 115355 */}
        <Script id="logger-config" strategy="afterInteractive">
          {`var _TRK_LID="115355";var _L_TD="ssl.logger.co.kr";var _TRK_CDMN=".smilesulbi.com";`}
        </Script>
        <Script id="logger-loader" strategy="afterInteractive">
          {`var _CDN_DOMAIN=location.protocol=="https:"?"https://fs.bizspring.net":"http://fs.bizspring.net";(function(b,s){var f=b.getElementsByTagName(s)[0],j=b.createElement(s);j.async=true;j.src="//fs.bizspring.net/fs4/bstrk.1.js";f.parentNode.insertBefore(j,f);})(document,"script");`}
        </Script>
        <noscript>
          <img alt="Logger Script" width={1} height={1} src="https://ssl.logger.co.kr/tracker.1.tsp?u=115355&js=N" />
        </noscript>
        {/* END OF LOGGER TRACKING SCRIPT */}
      </body>
    </html>
  );
}
