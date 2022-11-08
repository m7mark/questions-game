import { FC } from 'react'
import styles from './Header.module.scss'
import { GoMarkGithub, GoLogoGithub } from 'react-icons/go'

export const Header: FC = () => (
  <div className={styles.header}>
    created by @m7mark <GoMarkGithub />
  </div>
)
