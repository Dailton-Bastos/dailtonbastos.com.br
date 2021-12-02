import React from 'react'

import { Profile } from '~/components/Profile'
import { Sidebar } from '~/components/Sidebar'
import { useMedia } from '~/hooks/useMedia'
import {
  BLOG_AUTHOR,
  BLOG_AUTHOR_POSITION,
  BLOG_AUTHOR_DESCRIPTION,
} from '~/lib/constants'

import styles from './styles.module.scss'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  const isMobile = useMedia('(max-width: 1024px)')
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
      <Sidebar />
      <main className={styles.layoutMain}>{children}</main>
    </section>
  )
}
