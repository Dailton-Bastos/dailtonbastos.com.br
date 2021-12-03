import React from 'react'
import { ImHome } from 'react-icons/im'

import { ActiveLink } from '../ActiveLink'
import styles from './styles.module.scss'

interface MenuBarProps {
  setIsMenuOpen: (value: boolean) => void
  isMenuOpen: boolean
}

export const MenuBar = ({
  setIsMenuOpen,
  isMenuOpen,
}: MenuBarProps): JSX.Element => {
  function openMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <section className={styles.menuBarWrapper}>
      <div className={styles.menuBarGroup}>
        <ActiveLink href="/" passHref activeClassName={styles.active}>
          <a title="Voltar para Home">
            <span className={styles.menuBarItem}>
              <ImHome size={24} />
            </span>
          </a>
        </ActiveLink>

        <div
          title="Abrir menu"
          onClick={openMenu}
          className={`${styles.menuBarToggle} ${
            isMenuOpen ? styles.isOpen : ''
          }`}
        >
          <span />
          <span />
          <span />
        </div>
      </div>
    </section>
  )
}
