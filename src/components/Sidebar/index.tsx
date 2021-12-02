import React from 'react'

import { MenuLinks } from '~/components/MenuLinks'
import { Profile } from '~/components/Profile'
import { SocialLinks } from '~/components/SocialLinks'
import {
  BLOG_AUTHOR,
  BLOG_AUTHOR_POSITION,
  BLOG_AUTHOR_DESCRIPTION,
} from '~/lib/constants'

import styles from './styles.module.scss'

export const Sidebar = (): JSX.Element => {
  return (
    <>
      <aside className={styles.sidebarContainer}>
        <Profile
          title={BLOG_AUTHOR}
          position={BLOG_AUTHOR_POSITION}
          authorDescription={BLOG_AUTHOR_DESCRIPTION}
        />

        <section className={styles.menuLinksContainer}>
          <SocialLinks />
          <MenuLinks />
        </section>
      </aside>
    </>
  )
}
