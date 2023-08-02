import Link from "next/link"

import { siteConfig } from "@/config/site"

import { Icons } from "./Icons"

type Props = {
  className?: string
}

export default function Footer({ className }: Props) {
  const socialLinks = siteConfig.links.social

  return (
    <footer className={`${className} w-full border-t border-muted/25 bg-foreground`}>
      <div className="container my-4 flex justify-between text-right text-background">
        <div className="flex flex-col items-start">
          <Link href="https://goo.gl/maps/47QqtQDwFoUQBRAQ9" className="duration-150 hover:underline">
            {siteConfig.address.full}
          </Link>
          <span>
            {siteConfig.businessHours.days} {siteConfig.businessHours.hours}
          </span>
          <span>{siteConfig.phone}</span>
        </div>
        <div className="mt-2 flex items-end gap-2">
          <a href={socialLinks.facebook} className="rounded-lg border border-background p-1 brightness-50 duration-100 hover:brightness-100">
            <Icons.facebook className="h-6 w-6" />
          </a>
          <a href={socialLinks.instagram} className="rounded-lg border border-background p-1 brightness-50 duration-100 hover:brightness-100">
            <Icons.instagram className="h-6 w-6" />
          </a>
          <a href={socialLinks.youtube} className="rounded-lg border border-background p-1 brightness-50 duration-100 hover:brightness-100">
            <Icons.youtube className="h-6 w-6" />
          </a>
          <a href={socialLinks.spotify} className="rounded-lg border border-background p-1 brightness-50 duration-100 hover:brightness-100">
            <Icons.spotify className="h-6 w-6 fill-background" />
          </a>
        </div>
      </div>
    </footer>
  )
}
