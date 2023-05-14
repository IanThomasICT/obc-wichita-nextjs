import { siteConfig } from "@/config/site"

import { Icons } from "./icons"

type Props = {
  className?: string
}

const SiteFooter = ({ className }: Props) => {
  const socialLinks = siteConfig.links.social

  return (
    <footer className={`${className} w-full bg-foreground`}>
      <div className="container flex flex-col my-4 justify-end text-right text-background">
        <span>{siteConfig.address.full}</span>
        <span>{siteConfig.phone}</span>
        <span>
          {siteConfig.businessHours.days} {siteConfig.businessHours.hours}
        </span>
        <div className="flex justify-end gap-2">
          <a
            href={socialLinks.facebook}
            className="border p-1 border-background brightness-50 hover:brightness-100 duration-100 rounded-lg"
          >
            <Icons.facebook className="w-6 h-6" />
          </a>
          <a
            href={socialLinks.instagram}
            className="border p-1 border-background brightness-50 hover:brightness-100 duration-100 rounded-lg"
          >
            <Icons.instagram className="w-6 h-6" />
          </a>
          <a
            href={socialLinks.youtube}
            className="border p-1 border-background brightness-50 hover:brightness-100 duration-100 rounded-lg"
          >
            <Icons.youtube className="w-6 h-6" />
          </a>
          <a
            href={socialLinks.spotify}
            className="border p-1 border-background brightness-50 hover:brightness-100 duration-100 rounded-lg"
          >
            <Icons.spotify className="w-6 h-6 fill-background" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
