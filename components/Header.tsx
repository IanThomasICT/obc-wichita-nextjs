import Link from "next/link"

import { Icons } from "./Icons"
import MainNavigation from "./MainNavigation"

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <LogoButton />
        <div className="hidden flex-1 items-center justify-end space-x-4 sm:flex sm:max-w-fit">
          <MainNavigation />
        </div>
      </div>
    </header>
  )
}

function LogoButton() {
  return (
    <div className="flex gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo className="h-8 w-auto" />
        <div className="flex flex-col -space-y-1 text-justify font-bold uppercase">
          <span className="w-28 text-justify text-2xl">O L I V E T</span>
          <span className="w-28 text-justify text-[0.6em] font-semibold">B a p t i s t &nbsp;&nbsp; C h u r c h</span>
        </div>
      </Link>
    </div>
  )
}
