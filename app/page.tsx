import Image from "next/image"
import Link from "next/link"
import heroImage from "@/public/images/pastor-preaching-pulpit.jpg"
import sanctuaryImage from "@/public/images/sanctuary-full-view.jpg"
import { ChevronDown, Clock10, MapPin, Video } from "lucide-react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Icons } from "@/components/Icons"
import ScrollLink from "@/components/ScrollLink"

export default function IndexPage() {
  return (
    <>
      <HeroSection />
      <CardSection />
      <section className="h-full bg-accent">
        <p className="mx-auto max-w-5xl p-10 text-center text-2xl font-semibold text-foreground">
          Whether you've grown up in church all your life or have never been to church before, we hope that Olivet will be a warm and welcoming place for you where you're engaged with the truth of
          God's Word and the love of God's people.
        </p>
      </section>

      {/* Worship Service Information */}
      <section id="worship-info" className="">
        {/* Desktop version */}
        <div className="hidden bg-foreground lg:relative lg:block">
          <Image src={sanctuaryImage} alt="full-view of olivet sanctuary" className="blur-[2px]" />
          <div className="absolute inset-0 z-10 bg-foreground opacity-70"></div>

          <div className="absolute inset-0 z-20 mx-auto flex max-w-screen-sm flex-col justify-center gap-6 text-background md:max-w-2xl xl:max-w-4xl">
            <h2 className="text-center text-lg font-semibold sm:text-2xl md:text-4xl lg:text-5xl">Worship Gathering Information</h2>
            <Separator />

            {/* Service / Location card */}
            <div className="mx-auto flex max-w-xl flex-col items-center gap-10 lg:flex-row xl:max-w-3xl">
              <div className="flex flex-col gap-8 whitespace-nowrap rounded-lg bg-background/80 py-10 pl-20 pr-10 text-foreground">
                <p className="flex flex-col gap-4 text-xl tracking-wider xl:text-2xl ">
                  <span className="-ml-8 flex items-baseline gap-2 text-3xl font-bold leading-3 xl:text-4xl ">
                    <Clock10 className="" /> Service Time
                  </span>
                  Sunday at 10:00am
                </p>
                <p className="flex flex-col gap-4 text-lg tracking-wider xl:text-2xl">
                  <span className="-ml-8 flex items-baseline gap-2 text-3xl font-bold leading-3 xl:text-4xl">
                    <MapPin /> Location
                  </span>
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                </p>
              </div>
              <div className="text-muted-background grid flex-auto items-center gap-2 text-lg tracking-wider sm:text-xl xl:text-2xl">
                <span>Main parking lot on the north side.</span>
                <span>Additional parking is available on the west side of High St.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Version */}
        <div className="bg-foreground p-16 lg:hidden ">
          <div className="grid justify-center gap-4">
            <h2 className="text-center text-4xl font-semibold text-background">Worship Gathering Information</h2>
            <Separator className="w-screen max-w-lg" />

            {/* Service / Location card */}
            <div className="mx-auto max-w-fit rounded-lg bg-background">
              <div className="flex flex-col gap-4 py-8 pl-14 pr-8">
                {/* Service time */}
                <p className="text-muted-background flex flex-col gap-4 whitespace-nowrap text-xl tracking-wider">
                  <span className="-ml-8 flex items-baseline gap-2 text-3xl font-bold leading-3 ">
                    <Clock10 className="" /> Service Time
                  </span>
                  Sunday at 10:00am
                </p>

                {/* Location time */}
                <p className="text-muted-background mb-2 flex flex-col gap-4 whitespace-nowrap text-xl tracking-wider">
                  <span className="-ml-8 flex items-baseline gap-2 text-3xl font-bold leading-3">
                    <MapPin /> Location
                  </span>
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                </p>

                <span className="font-bold">
                  Main parking lot is on the north side. <br />
                  Additional parking is available on the west side of High St.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function HeroSection(props: { className?: string }) {
  return (
    <section className={cn("relative h-full w-screen", props.className)}>
      <Image src={heroImage} alt={"pastor preaching in pulpit"} className="h-full w-full" />
      <div className="absolute top-0 h-full w-full pb-6 pl-24 pt-24 text-white">
        <div className="flex h-full flex-col items-start justify-end gap-6 ">
          <h1 className="max-w-lg text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">Our church exists for the glory of God</h1>
          <div className="flex max-w-[980px] flex-col items-start gap-2">
            <p className="text-muted-background max-w-[700px] text-lg sm:text-xl">
              We seek to glorify Him by <strong>loving Him</strong> with all of our being, <strong>loving others</strong> as ourselves, and <strong>making disciples</strong> of all ages and nations
              starting right here in Wichita.
            </p>
            <p className="text-muted-background max-w-[700px] text-lg sm:text-xl">We invite you to join us for worship this Sunday at 10:00 a.m</p>
          </div>
          <div className="flex flex-grow gap-4">
            <ScrollLink href="#worship-info" className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "text-lg")}>
              Worship with us
            </ScrollLink>
          </div>
          <div className="hidden w-full 2xl:block">
            <ChevronDown className="mx-auto h-12 w-12 animate-bounce text-muted duration-1000" />
          </div>
        </div>
      </div>
    </section>
  )
}

function CardSection() {
  return (
    <section className="m-6 flex flex-col justify-center gap-6 md:flex-row">
      <Card className="mx-auto w-full max-w-md flex-1 md:mx-0">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl lg:text-2xl">When We Gather</CardTitle>
          <Separator />
        </CardHeader>
        <CardContent className="grid grow space-y-2 text-lg">
          <span>
            <span className="flex w-fit items-baseline gap-1.5">
              <strong className="text-xl">Sundays</strong> | <strong>10:00 AM</strong>
            </span>
            Worship Gathering
          </span>
          <span>
            <span className="flex w-fit items-baseline gap-1.5">
              <strong className="text-xl">Wednesdays</strong> | <strong>6:30 PM</strong>
            </span>
            Adult study, AWANA, Youth Group
          </span>
          <span>
            <strong className="text-xl">Discipleship Groups</strong> meet various times throughout the week.
          </span>
        </CardContent>
        <CardFooter className="">
          <Link href="/resources/calendar" className="my-auto">
            <Button variant={"default"} className="text-lg">
              View upcoming events
            </Button>
          </Link>
        </CardFooter>
      </Card>

      <Card className="mx-auto flex w-full max-w-md flex-1 flex-col md:mx-0">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl lg:text-2xl">Who We Are</CardTitle>
          <Separator />
        </CardHeader>
        <CardContent className="grow text-lg xl:text-2xl">
          We are a Christ-ruled, pastor/elder-led, deacon-served, staff-run, congregationally-governed body of believers.
          <br />
        </CardContent>
        <CardFooter className="xs:grid-flow-col grid max-w-fit gap-2 sm:md:grid-flow-row lg:grid-flow-col">
          {/* TODO: Figure out a better name for this button */}
          <Link href="/im-new/leadership">
            <Button variant={"default"} className="w-full text-lg">
              Meet our Team
            </Button>
          </Link>
          <Link href="/im-new/core-documents">
            <Button variant={"outline"} className="w-full text-lg">
              Our Beliefs
            </Button>
          </Link>
        </CardFooter>
      </Card>

      <Card className="mx-auto flex w-fit max-w-md flex-col md:mx-0">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl lg:text-2xl">Resources</CardTitle>
          <Separator />
        </CardHeader>
        <CardContent className="grid max-w-fit space-y-2">
          <Link href="/resources/sermon-videos">
            <Button variant={"outline"} className="flex w-full justify-start gap-4 text-lg">
              <Video /> Watch Sermons
            </Button>
          </Link>
          <Link href="/resources/recommended-reading">
            <Button variant={"outline"} className="flex w-full justify-start gap-4 text-lg">
              <Icons.bookMarked /> Recommended Reading
            </Button>
          </Link>
          <Link href={siteConfig.links.social.spotify}>
            <Button variant={"outline"} className="flex w-full justify-start gap-4 text-lg">
              <Icons.spotify className="h-6 w-6" /> Recommended Music
            </Button>
          </Link>
        </CardContent>
      </Card>
    </section>
  )
}
