import React from 'react'

import Image from 'next/image'

import styles from './styles.module.scss'

export const Avatar = (): JSX.Element => {
  return (
    <div className={styles.avatarWrapper}>
      <Image
        src="/images/avatar.png"
        alt="Uma foto minha vestido em uma camiseta de cor cinza"
        width={104}
        height={104}
      />
    </div>
  )
}
