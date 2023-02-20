import clsx from 'clsx'
import { useRouter } from 'next/router'
import { FaAngleLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { CSSTransition } from 'react-transition-group'
import { useKeyPress } from '../../../hooks/useKeys'
import styles from './Questions.module.scss'
import { useQuestions } from './useQuestions'

export const Questions = () => {
  const { num, countElements, currentQuestion, setQuestion, slideIn } =
    useQuestions()

  const { push } = useRouter()
  useKeyPress(() => setQuestion('prev'), ['ArrowLeft'])
  useKeyPress(() => setQuestion('next'), ['ArrowRight', ' '])

  return (
    <div className={styles.questions}>
      <button
        className={clsx(styles.backButton, 'bg-bgLight dark:bg-bgDark', [])}
        onClick={() => push('/')}
      >
        <FaAngleLeft className="text-gray-900 dark:text-gray-200" />
      </button>
      {/* <NavButton icon="back" /> */}
      <div
        className={clsx(styles.counter, 'text-gray-500 dark:text-gray-300')}
      >{`${num}/${countElements}`}</div>

      <CSSTransition
        in={slideIn}
        timeout={300}
        classNames="slide-animation"
        unmountOnExit
      >
        <h2 className="text-black dark:text-white">{currentQuestion}</h2>
      </CSSTransition>
      <div className={styles.buttonsWrapper}>
        <button
          className={clsx(styles.button, 'btn dark:btn-dark')}
          onClick={() => setQuestion('prev')}
          disabled={num <= 1}
        >
          <FaChevronLeft style={{ paddingRight: '4px' }} />
        </button>
        <button
          className={clsx(styles.button, 'btn dark:btn-dark')}
          onClick={() => setQuestion('next')}
          disabled={num >= countElements}
        >
          <FaChevronRight style={{ paddingLeft: '4px' }} />
        </button>
      </div>
    </div>
  )
}
