import Link from "next/link"

import { Icons } from "@/components/icons"

export function LogoButton() {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        <Icons.logo className="h-8 w-auto dark:invert" />
        <div className="hidden font-bold sm:flex sm:flex-col sm:text-justify sm:uppercase -space-y-1">
          <span className="text-justify text-2xl w-28">O L I V E T</span>
          <span className="text-[0.6em] sm:text-justify sm:font-semibold w-28">
            B a p t i s t &nbsp;&nbsp; C h u r c h
          </span>
        </div>
      </Link>
    </div>
  )
}
