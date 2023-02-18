import clsx from 'clsx'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { CSSTransition } from 'react-transition-group'
import { useKeyPress } from '../../../hooks/useKeys'
import { NavButton } from '../../ui'
import styles from './Questions.module.scss'
import { useQuestions } from './useQuestions'

export const Questions = () => {
  const { num, countElements, currentQuestion, setQuestion, slideIn } =
    useQuestions()

  useKeyPress(() => setQuestion('prev'), ['ArrowLeft'])
  useKeyPress(() => setQuestion('next'), ['ArrowRight', ' '])

  return (
    <div className={styles.questions}>
      <NavButton icon="back" />
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
