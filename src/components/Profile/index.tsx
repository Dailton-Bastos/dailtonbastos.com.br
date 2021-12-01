import React from 'react'

import Link from 'next/link'

import { Avatar } from '~/components/Avatar'

interface ProfileProps {
  title: string
  position: string
  authorDescription: string
}

import styles from './styles.module.scss'

export const Profile = ({
  title,
  position,
  authorDescription,
}: ProfileProps): JSX.Element => {
  return (
    <section className={styles.profileContainer}>
      <Link href="/" passHref>
        <a>
          <Avatar />
          <h1 className={styles.profileAuthor}>
            {title}
            <small className={styles.profilePosition}>{position}</small>
          </h1>
        </a>
      </Link>
      <p className={styles.authorDescription}>{authorDescription}</p>
    </section>
  )
}
