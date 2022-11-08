import { FC, ReactNode } from 'react'
import { Header } from './Header/Header'
import { HeaderSeo } from './Header/HeaderSeo'
import styles from './Layout.module.scss'
import Div100vh from 'react-div-100vh'

interface ILayout {
  children: ReactNode
}

export const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.layoutWrapper}>
        <HeaderSeo />
        <Header />
        <Div100vh>{children}</Div100vh>
      </div>
    </div>
  )
}
