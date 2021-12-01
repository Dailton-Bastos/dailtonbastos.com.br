import React from 'react'

import { ActiveLink } from '~/components/ActiveLink'

import { links } from './content'
import styles from './styles.module.scss'

export const MenuLinks = (): JSX.Element => {
  return (
    <nav className={styles.menuLinksWrapper}>
      <ul className={styles.menuLinksList}>
        {links.map((link, index) => (
          <li key={index} className={styles.menuLinksItem}>
            <ActiveLink href={link.url} activeClassName={styles.active}>
              <a>{link.label}</a>
            </ActiveLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
