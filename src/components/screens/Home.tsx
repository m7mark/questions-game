import { FC } from 'react'
import { Layout } from '../layout/Layout'
import styles from './Home.module.scss'
import { Questions } from './Questions/Questions'
import { Start } from './Start/Start'

export const Home: FC = () => {
  return (
    <Layout>
      <div className={styles.home}>
        {/* <Start /> */}
        <Questions />
      </div>
    </Layout>
  )
}
