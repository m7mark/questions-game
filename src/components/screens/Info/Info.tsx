import clsx from 'clsx'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { FaArrowCircleLeft, FaGithub } from 'react-icons/fa'
import styles from './Info.module.scss'

export const Info: FC = () => {
  const { push } = useRouter()
  return (
    <div className={clsx(styles.info, 'text-gray-500 dark:text-gray-100')}>
      <FaArrowCircleLeft className={styles.back} onClick={() => push('/')} />
      <div className={styles.about}>
        Это не столько вопросы, как отличные темы для интересной беседы,
        позволяющие вам сломать лед и раскрыться друг другу. Именно так находят
        друзей и хороших знакомых.
      </div>
      <div className={styles.creator}>
        <span>Написано на Next.js</span>
        <a
          href="https://github.com/m7mark"
          target="_blank"
          rel="noopener noreferrer"
        >
          @m7mark <FaGithub />
        </a>
      </div>
    </div>
  )
}
