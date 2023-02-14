import clsx from 'clsx'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { FaPlay } from 'react-icons/fa'
import FriendsImage from '../../../assets/imgs/friends.svg'
import { useKeyPress } from '../../../hooks/useKeys'
import { NavButton, Toggle } from '../../ui'
import styles from './Start.module.scss'

export const Start: FC = () => {
  const { push } = useRouter()

  useKeyPress(() => push('questions'), ['Enter', ' '])

  return (
    <div className={styles.start}>
      <NavButton icon="info" />
      <Toggle className={styles.toggle} />
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
