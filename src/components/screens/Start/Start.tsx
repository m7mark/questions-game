import clsx from 'clsx'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { FaInfo, FaPlay } from 'react-icons/fa'
import { CSSTransition } from 'react-transition-group'
import FriendsImage from '../../../assets/imgs/friends.svg'
import { useKeyPress } from '../../../hooks/useKeys'
import { Toggle as ToggleTheme } from '../../ui'
import { Info } from './Info/Info'
import styles from './Start.module.scss'

export const Start = () => {
  const { push } = useRouter()

  useKeyPress(() => push('questions'), ['Enter', ' '])
  const [showInfo, setShowInfo] = useState<boolean>(false)

  return (
    <div className={styles.start}>
      <button
        className={clsx(styles.infoButton, 'bg-bgLight dark:bg-bgDark', [
          showInfo && styles.infoButtonActive,
        ])}
        onClick={() => !showInfo && setShowInfo(true)}
      >
        <FaInfo className="text-gray-900 dark:text-gray-200" />
      </button>
      <CSSTransition
        in={showInfo}
        timeout={300}
        classNames="slide-animation"
        unmountOnExit
      >
        <div className={styles.infoWrapper}>
          <Info close={() => setShowInfo(false)} />
        </div>
      </CSSTransition>
      <ToggleTheme className={styles.toggle} />
      <FriendsImage draggable={false} className="sm:hidden mt-4" />
      <div className="text-black dark:text-white">
        <h2>Самые</h2>
        <h2 className="bg-viola-300 dark:bg-viola-400">интересные</h2>
        <h2>вопросы</h2>
      </div>
      <button
        className={clsx(styles.startBtn, 'btn dark:btn-dark')}
        onClick={() => push('questions')}
      >
        <FaPlay />
      </button>
    </div>
  )
}
