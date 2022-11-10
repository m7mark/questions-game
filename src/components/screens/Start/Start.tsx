import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC } from 'react'
import styles from './Start.module.scss'
import friends from '../../../assets/imgs/friends.svg'
import { FaPlayCircle, FaInfoCircle } from 'react-icons/fa'
import { useKeyPress } from '../../../hooks/useKeys'

export const Start: FC = () => {
  useKeyPress(() => router.push('questions'), ['Enter', ' '])

  const router = useRouter()
  return (
    <div className={styles.start}>
      <FaInfoCircle className={styles.info} />
      <Image
        alt="friends"
        src={friends}
        className={styles.friends}
        draggable={false}
        priority
      />
      <div className={styles.title}>
        <h2>Самые</h2>
        <h2 style={{ backgroundColor: '#9c27b0' }}>интересные</h2>
        <h2>вопросы</h2>
      </div>
      <button onClick={() => router.push('questions')}>
        <FaPlayCircle />
      </button>
    </div>
  )
}
