import Link from "next/link"
import { Video } from "lucide-react"

import { siteConfig } from "@/config/site"

import { Icons } from "./Icons"
import { Button } from "./ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Separator } from "./ui/separator"

export default function CardSection() {
  return (
    <section className="flex flex-col md:flex-row justify-center gap-6 m-6">
      <Card className="max-w-md flex-1 w-full md:mx-0 mx-auto">
        <CardHeader>
          <CardTitle className="lg:text-2xl sm:text-xl text-lg">When We Gather</CardTitle>
          <Separator />
        </CardHeader>
        <CardContent className="grow grid space-y-2 text-lg">
          <span>
            <span className="w-fit flex items-baseline gap-1.5">
              <strong className="text-xl">Sundays</strong> | <strong>10:00 AM</strong>
            </span>
            Worship Gathering
          </span>
          <span>
            <span className="w-fit flex items-baseline gap-1.5">
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

      <Card className="max-w-md flex-1 w-full md:mx-0 mx-auto flex flex-col">
        <CardHeader>
          <CardTitle className="lg:text-2xl sm:text-xl text-lg">Who We Are</CardTitle>
          <Separator />
        </CardHeader>
        <CardContent className="grow text-lg xl:text-2xl">
          We are a Christ-ruled, pastor/elder-led, deacon-served, staff-run, congregationally-governed body of believers.
          <br />
        </CardContent>
        <CardFooter className="grid gap-2 xs:grid-flow-col lg:grid-flow-col sm:md:grid-flow-row max-w-fit">
          {/* TODO: Figure out a better name for this button */}
          <Link href="/im-new/leadership">
            <Button variant={"default"} className="text-lg w-full">
              Meet our Team
            </Button>
          </Link>
          <Link href="/im-new/core-documents">
            <Button variant={"outline"} className="text-lg w-full">
              Our Beliefs
            </Button>
          </Link>
        </CardFooter>
      </Card>

      <Card className="max-w-md w-fit md:mx-0 mx-auto flex flex-col">
        <CardHeader>
          <CardTitle className="lg:text-2xl sm:text-xl text-lg">Resources</CardTitle>
          <Separator />
        </CardHeader>
        <CardContent className="grid space-y-2 max-w-fit">
          <Link href="/resources/sermon-videos">
            <Button variant={"outline"} className="flex gap-4 w-full justify-start text-lg">
              <Video /> Watch Sermons
            </Button>
          </Link>
          <Link href="/resources/recommended-reading">
            <Button variant={"outline"} className="flex gap-4 w-full justify-start text-lg">
              <Icons.bookMarked /> Recommended Reading
            </Button>
          </Link>
          <Link href={siteConfig.links.social.spotify}>
            <Button variant={"outline"} className="flex gap-4 w-full justify-start text-lg">
              <Icons.spotify className="w-6 h-6" /> Recommended Music
            </Button>
          </Link>
        </CardContent>
      </Card>
    </section>
  )
}
