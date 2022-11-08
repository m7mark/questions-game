import { FC } from 'react'
import { Layout } from '../../layout/Layout'
import styles from './Questions.module.scss'
import { useQuestions } from './useQuestions'

export const Questions: FC = () => {
  const { num, countElements, currentQuestion, setQuestion } = useQuestions()
  return (
    <Layout>
      <div className={styles.questions}>
        <div className={styles.counter}>{`${num}/${countElements}`}</div>
        <h2>{currentQuestion}</h2>
        <div className={styles.buttons}>
          <button onClick={() => setQuestion('prev')}>Prev</button>
          <button onClick={() => setQuestion('next')}>Next</button>
        </div>
      </div>
    </Layout>
  )
}
