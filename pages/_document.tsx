import { Html, Head, Main, NextScript } from 'next/document'
import Analytics from '../components/atoms/Analytics'

export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning>
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
        {/* Inline script runs synchronously before React hydrates, setting the
            correct theme class so hooks can read it on first render */}
        <script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem('theme');if(t==='dark'||(t===null&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}}catch(e){}`}} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
