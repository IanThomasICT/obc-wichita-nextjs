import Link from "next/link"

import { Icons } from "@/components/Icons"

export default function LogoButton() {
  return (
    <div className="flex gap-10">
      <Link href="/" className="items-center space-x-2 flex">
        <Icons.logo className="h-8 w-auto" />
        <div className="font-bold flex flex-col text-justify uppercase -space-y-1">
          <span className="text-justify text-2xl w-28">O L I V E T</span>
          <span className="text-[0.6em] text-justify font-semibold w-28">B a p t i s t &nbsp;&nbsp; C h u r c h</span>
        </div>
      </Link>
    </div>
  )
}
