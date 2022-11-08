import { FC, ReactNode } from 'react'
import { Header } from './Header/Header'
import styles from './Layout.module.scss'

interface ILayout {
  children: ReactNode
}

export const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.layoutWrapper}>
        <Header />
        <div className={styles.layoutBlock}>{children}</div>
      </div>
    </div>
  )
}
