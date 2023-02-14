import clsx from 'clsx'
import { FC } from 'react'
import { FaGithub } from 'react-icons/fa'
import { NavButton } from '../../ui'
import styles from './Info.module.scss'

export const Info: FC = () => {
  return (
    <div className={clsx(styles.info, 'text-gray-800 dark:text-gray-100')}>
      <NavButton icon="back" />
      <div className={styles.about}>Попробуй не проиграть)</div>
      <div className={styles.creator}>
        <span>Написано на Next.js</span>
        <a
          className={clsx(
            styles.link,
            'hover:text-gray-900 dark:hover:text-gray-300'
          )}
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
