import { FC } from 'react'
import styles from './Questions.module.scss'
import { useQuestions } from './useQuestions'
import {
  FaChevronRight,
  FaChevronLeft,
  FaArrowCircleLeft,
} from 'react-icons/fa'
import { useRouter } from 'next/router'
import { useKeyPress } from '../../../hooks/useKeys'

export const Questions: FC = () => {
  const { num, countElements, currentQuestion, setQuestion } = useQuestions()
  const { push } = useRouter()

  useKeyPress(() => setQuestion('prev'), ['ArrowLeft'])
  useKeyPress(() => setQuestion('next'), ['ArrowRight', ' '])

  return (
    <div className={styles.questions}>
      <FaArrowCircleLeft className={styles.back} onClick={() => push('/')} />
      <div className={styles.counter}>{`${num}/${countElements}`}</div>
      <h2>{currentQuestion}</h2>
      <div className={styles.buttons}>
        <button onClick={() => setQuestion('prev')} disabled={num <= 1}>
          <FaChevronLeft />
        </button>
        <button
          onClick={() => setQuestion('next')}
          disabled={num >= countElements}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  )
}
