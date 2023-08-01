"use client"

import React, { PropsWithChildren } from "react"
import Link, { LinkProps } from "next/link"

type AnchorProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>
type ScrollLinkProps = AnchorProps & LinkProps & PropsWithChildren

export default function ScrollLink({ children, ...props }: ScrollLinkProps) {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()

    const targetId = e.currentTarget.href.replace(/.*\#/, "")
    const elem = document.getElementById(targetId)
    window.scrollTo({
      top: elem?.getBoundingClientRect().top,
      behavior: "smooth",
    })
  }
  return (
    <Link {...props} onClick={handleScroll}>
      {children}
    </Link>
  )
}
