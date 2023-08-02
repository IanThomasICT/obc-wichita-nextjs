import { siteConfig } from "@/config/site"

import { Icons } from "./Icons"

type Props = {
  className?: string
}

export default function Footer({ className }: Props) {
  const socialLinks = siteConfig.links.social

  return (
    <footer className={`${className} w-full border-t border-muted/25 bg-foreground`}>
      <div className="container my-4 flex flex-col justify-end text-right text-background">
        <span>{siteConfig.address.full}</span>
        <span>
          {siteConfig.businessHours.days} {siteConfig.businessHours.hours}
        </span>
        <span>{siteConfig.phone}</span>
        <div className="mt-2 flex justify-end gap-2">
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
