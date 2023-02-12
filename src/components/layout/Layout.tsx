import clsx from 'clsx'
import { PropsWithChildren } from 'react'
import Div100vh from 'react-div-100vh'
import { useThemeContext } from '../../context/theme-context'
import { Header } from './Header/Header'
import { HeaderSeo } from './Header/HeaderSeo'
import styles from './Layout.module.scss'

export const Layout = ({ children }: PropsWithChildren) => {
  const { theme } = useThemeContext()

  // if (!theme) return null

  return (
    <div className={styles.layout}>
      <div
        className={clsx(
          styles.layoutWrapper,
          [theme === 'dark' ? styles.bgDark : styles.bgWhite],
          [theme === 'dark' && 'dark']
        )}
      >
        <HeaderSeo />
        <Header />
        <Div100vh>{children}</Div100vh>
      </div>
    </div>
  )
}
