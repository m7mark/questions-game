import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { FaInfo } from 'react-icons/fa'
import FriendsImage from '../../../assets/imgs/friends.svg'
import { useKeyPress } from '../../../hooks/useKeys'
import { Toggle as ToggleTheme } from '../../ui'
import { Info } from './Info/Info'
import styles from './Start.module.scss'

import { AnimatePresence } from 'framer-motion'

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
      <AnimatePresence>
        {showInfo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.infoWrapper}
          >
            <Info close={() => setShowInfo(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      <ToggleTheme className={styles.toggle} />
      <FriendsImage draggable={false} className="sm:hidden mt-4" />
      <div className="text-black dark:text-white">
        <h2>Самые</h2>
        <h2 className="bg-[#302e38] text-white dark:text-black dark:bg-[#c5c2d4]">
          интересные
        </h2>
        <h2>вопросы</h2>
      </div>
      <button
        className={clsx(
          styles.startBtn,
          'bg-viola-400 text-white dark:text-black dark:bg-viola-300'
        )}
        onClick={() => push('questions')}
      >
        Let&apos;s go
      </button>
    </div>
  )
}
