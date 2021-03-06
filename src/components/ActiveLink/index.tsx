import React from 'react'

import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

interface ActiveLinkProps extends LinkProps {
  children: React.ReactElement
  activeClassName: string
}

export const ActiveLink = ({
  children,
  activeClassName,
  ...rest
}: ActiveLinkProps): JSX.Element => {
  const { asPath } = useRouter()

  const className = asPath === rest.href ? activeClassName : ''

  return <Link {...rest}>{React.cloneElement(children, { className })}</Link>
}
