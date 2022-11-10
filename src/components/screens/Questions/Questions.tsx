import { FC } from 'react'
import styles from './Questions.module.scss'
import { useQuestions } from './useQuestions'
import {
  FaChevronRight,
  FaChevronLeft,
  FaArrowCircleLeft,
} from 'react-icons/fa'
import { useRouter } from 'next/router'

export const Questions: FC = () => {
  const { num, countElements, currentQuestion, setQuestion } = useQuestions()
  const { push } = useRouter()
  return (
    <div className={styles.questions}>
      <FaArrowCircleLeft className={styles.back} onClick={() => push('/')} />
      <div className={styles.counter}>{`${num}/${countElements}`}</div>
      <h2>{currentQuestion}</h2>
      <div className={styles.buttons}>
        <button onClick={() => setQuestion('prev')}>
          <FaChevronLeft />
        </button>
        <button onClick={() => setQuestion('next')}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  )
}
