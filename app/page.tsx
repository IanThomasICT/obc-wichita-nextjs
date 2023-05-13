import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Our church exists for the glory of God
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          We seek to glorify Him by <strong>loving Him</strong> with all of our
          being, <strong>loving others</strong> as ourselves, and{" "}
          <strong>making disciples</strong> of all ages and nations starting
          right here in Wichita.
        </p>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          We invite you to join us for worship this Sunday at 10:00 a.m
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.social.facebook}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants({ size: "lg" })}
        >
          Documentation
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.social.instagram}
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          Facebook
        </Link>
      </div>
    </section>
  )
}
