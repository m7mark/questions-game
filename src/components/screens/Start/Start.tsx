import { useRouter } from 'next/router'
import { FC } from 'react'
import { Layout } from '../../layout/Layout'
import styles from './Start.module.scss'

export const Start: FC = () => {
  const router = useRouter()
  return (
    <Layout>
      <div className={styles.start}>
        <h2>Some fun questions</h2>
        <button onClick={() => router.push('questions')}>Start</button>
      </div>
    </Layout>
  )
}
