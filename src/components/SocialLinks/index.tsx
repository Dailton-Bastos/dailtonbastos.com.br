import React from 'react'

import { useMedia } from '~/hooks/useMedia'

import { links } from './content'
import { Icons } from './Icons'
import styles from './styles.module.scss'

export const SocialLinks = (): JSX.Element => {
  const isMobile = useMedia('(max-width: 1024px)')

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
                  <Icon size={isMobile ? 30 : 24} />
                </div>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
