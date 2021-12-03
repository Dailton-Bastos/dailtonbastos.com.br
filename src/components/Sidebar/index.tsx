import React from 'react'

import { MenuLinks } from '~/components/MenuLinks'
import { Profile } from '~/components/Profile'
import { SocialLinks } from '~/components/SocialLinks'
import { useMedia } from '~/hooks/useMedia'
import {
  BLOG_AUTHOR,
  BLOG_AUTHOR_POSITION,
  BLOG_AUTHOR_DESCRIPTION,
} from '~/lib/constants'

import styles from './styles.module.scss'

interface SidebarProps {
  setIsMenuOpen: (value: boolean) => void
  isMenuOpen: boolean
}

export const Sidebar = ({ isMenuOpen }: SidebarProps): JSX.Element => {
  const isDesktop = useMedia('(min-width: 1025px)')

  return (
    <>
      <aside
        className={`${styles.sidebarContainer} ${
          isMenuOpen ? styles.isOpen : ''
        }`}
      >
        {isDesktop && (
          <Profile
            title={BLOG_AUTHOR}
            position={BLOG_AUTHOR_POSITION}
            authorDescription={BLOG_AUTHOR_DESCRIPTION}
            isMobileHeader={false}
          />
        )}

        <section className={styles.menuLinksContainer}>
          <SocialLinks />
          <MenuLinks />
        </section>
      </aside>
    </>
  )
}
