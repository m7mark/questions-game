import { FC } from 'react'
import { Layout } from '../layout/Layout'
import styles from './Home.module.scss'

export const Home: FC = () => {
  return (
    <Layout>
      <div className={styles.home}>home</div>
    </Layout>
  )
}
