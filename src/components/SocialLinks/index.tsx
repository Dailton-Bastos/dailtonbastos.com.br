import React from 'react'

import { links } from './content'
import { Icons } from './Icons'
import styles from './styles.module.scss'

export const SocialLinks = (): JSX.Element => {
  return (
    <nav className={styles.socialLinksWrapper}>
      <ul className={styles.socialLinksList}>
        {links.map((link, index) => {
          const Icon = Icons[link.label]

          return (
            <li key={index}>
              <a
                href={link.url}
                title={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.iconWrapper}>
                  <Icon size={24} />
                </div>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
