import Head from 'next/head'
import { FC } from 'react'

export const HeaderSeo: FC = () => {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=5"
      />
      <title itemProp="headline">Вопросы на знакомство</title>
      <meta
        itemProp="description"
        name="description"
        content="Вопросы на знакомство. Игра для небольшой компании"
      />
      {/* <link rel="canonical" href={HOME_URL} /> */}
      <meta property="og:locale" content="ru" />
      <meta property="og:title" content="Вопросы на знакомство" />
      {/* <meta property="og:url" content={HOME_URL} /> */}
      {/* <meta property="og:image" content={logoImage} /> */}
      <meta property="og:site_name" content="Questions Game" />
      <meta
        property="og:description"
        content="Вопросы на знакомство. Игра для небольшой компании"
      />
    </Head>
  )
}
