import clsx from 'clsx'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { FaInfoCircle, FaPlay } from 'react-icons/fa'
import FriendsImage from '../../../assets/imgs/friends.svg'
import { useKeyPress } from '../../../hooks/useKeys'
import styles from './Start.module.scss'
import { Toggle } from './Toogle/Toggle'

export const Start: FC = () => {
  const router = useRouter()

  useKeyPress(() => router.push('questions'), ['Enter', ' '])

  return (
    <div className={styles.start}>
      <FaInfoCircle
        className={styles.info}
        onClick={() => router.push('info')}
      />
      <Toggle className={styles.toggle} />
      <FriendsImage draggable={false} className={styles.friends} />
      <div className={clsx(styles.title, 'text-black dark:text-white')}>
        <h2>Самые</h2>
        <h2 className="bg-[#ea71ff] dark:bg-[#9c27b0]">интересные</h2>
        <h2>вопросы</h2>
      </div>
      <button onClick={() => router.push('questions')}>
        <FaPlay />
      </button>
    </div>
  )
}
