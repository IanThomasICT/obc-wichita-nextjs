import Image from "next/image"
import heroImage from "@/public/images/pastor-preaching-pulpit.jpg"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

import ScrollLink from "./scroll-link"
import { buttonVariants } from "./ui/button"

export default function HeroSection(props: { className?: string }) {
  return (
    <section className={cn("relative w-screen h-full", props.className)}>
      <Image
        src={heroImage}
        alt={"pastor preaching in pulpit"}
        className="w-full h-full"
      />
      <div className="absolute top-0 h-full w-full pt-24 pb-6 pl-24 text-white">
        <div className="flex flex-col h-full items-start justify-end gap-6 ">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl max-w-lg">
            Our church exists for the glory of God
          </h1>
          <div className="flex max-w-[980px] flex-col items-start gap-2">
            <p className="max-w-[700px] text-lg text-muted-background sm:text-xl">
              We seek to glorify Him by <strong>loving Him</strong> with all of
              our being, <strong>loving others</strong> as ourselves, and{" "}
              <strong>making disciples</strong> of all ages and nations starting
              right here in Wichita.
            </p>
            <p className="max-w-[700px] text-lg text-muted-background sm:text-xl">
              We invite you to join us for worship this Sunday at 10:00 a.m
            </p>
          </div>
          <div className="flex-grow flex gap-4">
            <ScrollLink
              href="#worship-info"
              className={cn(
                buttonVariants({ variant: "secondary", size: "lg" }),
                "text-lg"
              )}
            >
              Worship with us
            </ScrollLink>
          </div>
          <div className="w-full hidden 2xl:block">
            <ChevronDown className="mx-auto w-12 h-12 text-muted animate-bounce duration-1000" />
          </div>
        </div>
      </div>
    </section>
  )
}
