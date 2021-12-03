import React from 'react'

import { Profile } from '~/components/Profile'
import { Sidebar } from '~/components/Sidebar'
import { useMedia } from '~/hooks/useMedia'
import {
  BLOG_AUTHOR,
  BLOG_AUTHOR_POSITION,
  BLOG_AUTHOR_DESCRIPTION,
} from '~/lib/constants'

import { MenuBar } from '../MenuBar'
import styles from './styles.module.scss'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  const isMobile = useMedia('(max-width: 1024px)')
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false)

  return (
    <section className={styles.layoutWrapper}>
      {isMobile && (
        <Profile
          title={BLOG_AUTHOR}
          position={BLOG_AUTHOR_POSITION}
          authorDescription={BLOG_AUTHOR_DESCRIPTION}
          isMobileHeader={true}
        />
      )}
      <Sidebar setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      <main className={styles.layoutMain}>{children}</main>
      {isMobile && (
        <MenuBar setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      )}
    </section>
  )
}
