import { FC } from 'react'
import styles from './Start.module.scss'

export const Start: FC = () => {
  return (
    <div className={styles.start}>
      <h2>Some fun questions</h2>
      <button>Start</button>
    </div>
  )
}
