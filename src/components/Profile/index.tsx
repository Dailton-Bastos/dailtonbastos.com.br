import React from 'react'

import Link from 'next/link'

import { Avatar } from '~/components/Avatar'

interface ProfileProps {
  title: string
  position: string
  authorDescription: string
  isMobileHeader: boolean
}

import styles from './styles.module.scss'

export const Profile = ({
  title,
  position,
  authorDescription,
  isMobileHeader,
}: ProfileProps): JSX.Element => {
  return (
    <section
      className={`${styles.profileContainer} ${
        isMobileHeader ? styles.isMobile : ''
      }`}
    >
      <Link href="/" passHref>
        <a className={styles.profileLink}>
          <Avatar />
          <h1 className={styles.profileAuthor}>
            {title}
            <small className={styles.profilePosition}>{position}</small>
          </h1>
        </a>
      </Link>
      {!isMobileHeader && (
        <p className={styles.authorDescription}>{authorDescription}</p>
      )}
    </section>
  )
}
