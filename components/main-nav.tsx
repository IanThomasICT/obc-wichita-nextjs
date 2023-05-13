import Link from "next/link"

import { Icons } from "@/components/icons"

export function MainNav() {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        <Icons.logo className="h-8 w-auto dark:invert" />
        <div className="hidden font-bold sm:flex sm:flex-col sm:text-justify sm:uppercase">
          O L I V E T
          <div className="text-[0.4em] sm:text-justify">
            B a p t i s t &nbsp; C h u r c h
          </div>
        </div>
      </Link>
    </div>
  )
}
