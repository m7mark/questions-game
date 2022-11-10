import { FC, ReactNode } from 'react'
import { Header } from './Header/Header'
import { HeaderSeo } from './Header/HeaderSeo'
import styles from './Layout.module.scss'
import Div100vh from 'react-div-100vh'
import Image from 'next/image'
import bgImg from '../../assets/imgs/bgImg.svg'

interface ILayout {
  children: ReactNode
}

export const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.layoutWrapper}>
        <Image
          alt=""
          src={bgImg}
          fill
          style={{ objectFit: 'cover', zIndex: '-3' }}
          priority
          sizes="(max-width: 768px) 100vw"
        />
        <HeaderSeo />
        <Header />
        <Div100vh>{children}</Div100vh>
      </div>
    </div>
  )
}
