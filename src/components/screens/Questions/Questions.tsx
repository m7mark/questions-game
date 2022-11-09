import { FC } from 'react'
import { Layout } from '../../layout/Layout'
import styles from './Questions.module.scss'
import { useQuestions } from './useQuestions'
import { MdArrowBackIos, MdArrowForwardIos, MdArrowBack } from 'react-icons/md'

export const Questions: FC = () => {
  const { num, countElements, currentQuestion, setQuestion } = useQuestions()
  return (
    <Layout>
      <div className={styles.questions}>
        <div className={styles.counter}>{`${num}/${countElements}`}</div>
        <div className={styles.back}>
          <MdArrowBack />
        </div>
        <div className={styles.bottomContainer}>
          <h2>{currentQuestion}</h2>
          <div className={styles.buttons}>
            <button onClick={() => setQuestion('prev')}>
              <MdArrowBackIos />
            </button>
            <button onClick={() => setQuestion('next')}>
              <MdArrowForwardIos />
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
