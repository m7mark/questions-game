import clsx from 'clsx'
import { useRouter } from 'next/router'
import { FC } from 'react'
import {
  FaArrowCircleLeft,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa'
import { useKeyPress } from '../../../hooks/useKeys'
import styles from './Questions.module.scss'
import { useQuestions } from './useQuestions'

export const Questions: FC = () => {
  const { num, countElements, currentQuestion, setQuestion } = useQuestions()
  const { push } = useRouter()

  useKeyPress(() => setQuestion('prev'), ['ArrowLeft'])
  useKeyPress(() => setQuestion('next'), ['ArrowRight', ' '])

  return (
    <div className={styles.questions}>
      <FaArrowCircleLeft className={styles.back} onClick={() => push('/')} />
      <div
        className={clsx(styles.counter, 'text-gray-500 dark:text-gray-300')}
      >{`${num}/${countElements}`}</div>
      <h2 className="text-black dark:text-white">{currentQuestion}</h2>
      <div className={styles.buttons}>
        <button onClick={() => setQuestion('prev')} disabled={num <= 1}>
          <FaChevronLeft style={{ paddingRight: '4px' }} />
        </button>
        <button
          onClick={() => setQuestion('next')}
          disabled={num >= countElements}
        >
          <FaChevronRight style={{ paddingLeft: '4px' }} />
        </button>
      </div>
    </div>
  )
}
