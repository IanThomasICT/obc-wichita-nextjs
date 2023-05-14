import Image from "next/image"
import sanctuaryImage from "@/public/sanctuary-full-view.jpg"
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
      {/* accent-tinted background image */}
      <section id="worship-info" className="">
        <div className="hidden lg:relative lg:block">
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
              <div className="flex flex-col gap-8 pl-14 pr-8 py-8 rounded-lg bg-white/10 backdrop-blur-sm whitespace-nowrap">
                <p className="xl:text-2xl text-xl text-muted-background tracking-wider flex flex-col gap-4 ">
                  <span className="-ml-8 flex xl:text-4xl text-3xl text-background gap-2 items-baseline leading-3 font-bold ">
                    <Clock10 className="" /> Service Time
                  </span>
                  Sunday at 10:00am
                </p>
                <p className="xl:text-2xl text-lg text-muted-background tracking-wider flex flex-col gap-4">
                  <span className="-ml-8 flex xl:text-4xl gap-2 items-baseline leading-3 font-bold">
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
        <div className="bg-foreground p-10 lg:hidden">
          <h2 className="text-2xl font-semibold text-background text-center mb-2">
            Worship Gathering Information
          </h2>

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

              <span>
                Main parking lot is on the north side. <br />
                Additional parking is available on the west side of High St.
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
