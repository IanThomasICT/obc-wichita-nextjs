import Image from "next/image"
import sanctuaryImage from "@/public/images/sanctuary-full-view.jpg"
import { Clock10, MapPin } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Separator } from "@/components/ui/separator"
import CardsSection from "@/components/cards-section"
import HeroSection from "@/components/hero-section"

export default function IndexPage() {
  return (
    <>
      <HeroSection />
      <CardsSection />
      <section className="bg-accent h-full">
        <p className="mx-auto text-2xl font-semibold text-foreground text-center p-10 max-w-5xl">
          Whether you've grown up in church all your life or have never been to
          church before, we hope that Olivet will be a warm and welcoming place
          for you where you're engaged with the truth of God's Word and the love
          of God's people.
        </p>
      </section>

      {/* Worship Service Information */}
      <section id="worship-info" className="">
        {/* Desktop version */}
        <div className="hidden lg:relative lg:block bg-foreground">
          <Image
            src={sanctuaryImage}
            alt="full-view of olivet sanctuary"
            className="blur-[2px]"
          />
          <div className="absolute inset-0 bg-foreground opacity-70 z-10"></div>

          <div className="absolute inset-0 flex flex-col justify-center mx-auto z-20 text-background xl:max-w-4xl md:max-w-2xl max-w-screen-sm gap-6">
            <h2 className="text-lg font-semibold sm:text-2xl md:text-4xl lg:text-5xl text-center">
              Worship Gathering Information
            </h2>
            <Separator />

            {/* Service / Location card */}
            <div className="flex flex-col lg:flex-row items-center gap-10 max-w-xl xl:max-w-3xl mx-auto">
              <div className="flex flex-col gap-8 text-foreground pl-20 pr-10 py-10 rounded-lg bg-background/80 whitespace-nowrap">
                <p className="xl:text-2xl text-xl tracking-wider flex flex-col gap-4 ">
                  <span className="-ml-8 flex xl:text-4xl text-3xl gap-2 items-baseline leading-3 font-bold ">
                    <Clock10 className="" /> Service Time
                  </span>
                  Sunday at 10:00am
                </p>
                <p className="xl:text-2xl text-lg tracking-wider flex flex-col gap-4">
                  <span className="-ml-8 flex xl:text-4xl text-3xl gap-2 items-baseline leading-3 font-bold">
                    <MapPin /> Location
                  </span>
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.state}{" "}
                  {siteConfig.address.zip}
                </p>
              </div>
              <div className="flex-auto grid items-center xl:text-2xl sm:text-xl text-lg text-muted-background tracking-wider gap-2">
                <span>Main parking lot on the north side.</span>
                <span>
                  Additional parking is available on the west side of High St.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Version */}
        <div className="bg-foreground p-16 lg:hidden ">
          <div className="grid gap-4 justify-center">
            <h2 className="text-4xl font-semibold text-background text-center">
              Worship Gathering Information
            </h2>
            <Separator className="w-screen max-w-lg" />

            {/* Service / Location card */}
            <div className="bg-background rounded-lg max-w-fit mx-auto">
              <div className="flex flex-col gap-4 pl-14 pr-8 py-8">
                {/* Service time */}
                <p className="text-xl text-muted-background tracking-wider flex flex-col gap-4 whitespace-nowrap">
                  <span className="-ml-8 flex text-3xl gap-2 items-baseline leading-3 font-bold ">
                    <Clock10 className="" /> Service Time
                  </span>
                  Sunday at 10:00am
                </p>

                {/* Location time */}
                <p className="text-xl text-muted-background tracking-wider flex flex-col gap-4 whitespace-nowrap mb-2">
                  <span className="-ml-8 flex text-3xl gap-2 items-baseline leading-3 font-bold">
                    <MapPin /> Location
                  </span>
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.state}{" "}
                  {siteConfig.address.zip}
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
