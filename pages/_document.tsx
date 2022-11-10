import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <meta charSet="UTF-8" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="msapplication-TileColor" content="#151419" />
        <meta name="theme-color" content={'#151419'} />
        <meta name="msapplication-navbutton-color" content={'#151419'} />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content={'#151419'}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
