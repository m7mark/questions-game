import { FC } from 'react'
import styles from './Questions.module.scss'

export const Questions: FC = () => {
  return (
    <div className={styles.questions}>
      <h2>Whould do you like</h2>
      <div className={styles.buttons}>
        <button>Prev</button>
        <button>Next</button>
      </div>
    </div>
  )
}
