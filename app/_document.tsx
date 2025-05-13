// pages/_document.tsx (สำหรับ Next.js 12 หรือก่อนหน้า)
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    
    <Html lang="th">
      <Head>
        {/* กำหนด meta tags สำหรับ SEO */}
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="ธนาดุล เฮียงกัน - Full-stack Developer และผู้เชี่ยวชาญในการพัฒนาเว็บไซต์และแอปพลิเคชัน" />
        <meta name="keywords" content="fullstack developer, React, Next.js, Flutter, web development, programming" />
        <meta name="author" content="ธนาดุล เฮียงกัน" />
        <meta property="og:title" content="ธนาดุล เฮียงกัน - Full-stack Developer" />
        <meta property="og:description" content="พัฒนาเว็บไซต์และแอปพลิเคชัน ในสายงาน Full-stack Developer" />
        <meta property="og:image" content="/path-to-your-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
