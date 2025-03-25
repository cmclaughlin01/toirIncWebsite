import './globals.css' // If you have a global CSS in /app
import Script from 'next/script'

export const metadata = {
  title: 'Toir Inc.',
  description: 'Your site description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* -------------------- FONTS (Optional) -------------------- */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400&family=Roboto+Condensed&display=swap"
          rel="stylesheet"
        />

        {/* -------------------- CSS from /public/css -------------------- */}
        <link rel="stylesheet" href="/css/styleToir.css" />
        <link rel="stylesheet" href="/css/mobileStyle.css" />
        <link rel="stylesheet" href="/css/menu.css" />
        <link rel="stylesheet" href="/css/homePageSVG.css" />
        <link rel="stylesheet" href="/css/homePageStyle.css" />
        <link rel="stylesheet" href="/css/tester.css" />

        {/* 
          Add any other link tags for favicons, etc.
          Example:
          <link rel="icon" href="/favicon.ico" />
        */}
      </head>
      <body>
        {/* -------------------- GSAP (Load First) -------------------- */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/ScrollTrigger.min.js"
          strategy="beforeInteractive"
        />

        {/* 
          If you have your own anim.js that references gsap,
          load it AFTER gsap is available:
        */}
        <Script src="/js/anim.js" strategy="afterInteractive" />

        {/* -------------------- GOOGLE ANALYTICS (Optional) -------------------- */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=UA-229619707-1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-229619707-1');
          `}
        </Script>

        {/* -------------------- YOUR PAGE CONTENT -------------------- */}
        {children}
      </body>
    </html>
  )
}
