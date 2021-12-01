import React from 'react'

import { Sidebar } from '~/components/Sidebar'

import styles from './styles.module.scss'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <section className={styles.layoutWrapper}>
      <Sidebar />
      <main className={styles.layoutMain}>{children}</main>
    </section>
  )
}
