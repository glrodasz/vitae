import { Html, Head, Main, NextScript } from 'next/document'
import Analytics from '../components/atoms/Analytics'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Hind:wght@400;700&family=Lato&display=swap"
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
