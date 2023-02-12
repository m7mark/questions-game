import clsx from 'clsx'
import { PropsWithChildren } from 'react'
import { use100vh } from 'react-div-100vh'
import { useThemeContext } from '../../context/theme-context'
import { Header } from './Header/Header'
import { HeaderSeo } from './Header/HeaderSeo'
import styles from './Layout.module.scss'

export const Layout = ({ children }: PropsWithChildren) => {
  const { theme } = useThemeContext()
  const height = use100vh()
  const fullHeight = height ? `${height - 1}px` : '100vh'

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
        <div style={{ height: fullHeight }}>{children}</div>
      </div>
    </div>
  )
}
