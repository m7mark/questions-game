import { FC } from 'react'
import { Layout } from '../layout/Layout'
import styles from './Home.module.scss'

export const Home: FC = () => {
  return (
    <Layout>
      <div className={styles.home}>
        <h2>Some fun questions</h2>
        <button>Start</button>
      </div>
    </Layout>
  )
}
