import { Html, Head, Main, NextScript } from 'next/document'
import Analytics from '../components/atoms/Analytics'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@500;700&family=Hind:wght@400;700&family=Inter:ital,wght@0,400;0,600;1,400&family=JetBrains+Mono:wght@400&family=Lato&display=swap"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#FFFFFF" />
        <Analytics />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
