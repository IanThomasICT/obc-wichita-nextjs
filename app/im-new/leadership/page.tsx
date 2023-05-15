import Image from "next/image"

import { staffInfo } from "@/config/staff"
import BibleRef from "@/components/ui/BibleReference"

function LeadershipPage() {
  return (
    <div className="space-y-6 bg-muted py-6">
      {/* Pastors / Elders */}
      <section className="">
        <div className="max-w-4xl mx-auto grid text-lg justify-center gap-4 px-4 text-foreground">
          <h1 className="text-center uppercase text-4xl font-bold">
            Pastors / Elders
          </h1>
          <span className="text-xl whitespace-nowrap">
            Olivet is a Christ-ruled, pastor/elder-led, deacon-served,
            staff-run, congregationally-governed body of believers.
          </span>
          <span>
            Following the pattern of the New Testament, we use the terms
            pastor/elder/overseer interchangeably.
            <BibleRef
              content="Acts 20:17, 28; Titus 1:5-9; 1 Peter 5:1-4"
              size={4}
            />
            Our pastors/elders/overseers are the under-shepherds who serve the
            Chief Shepherd (i.e. Jesus) by leading and caring for the flock of
            Olivet Baptist Church. Our pastors/elders/overseers are accountable
            to the church as a whole.
          </span>
        </div>
      </section>

      <section className="bg-background shadow p-10 mx-24 rounded-lg">
        <div className="flex justify-center flex-wrap gap-4 mx-4">
          {staffInfo.pastors.map((pastor) => (
            <div key={pastor.name} className="max-w-fit mt-auto">
              <h2 className="text-center capitalize text-3xl font-bold">
                {pastor.name}
              </h2>
              <div className="relative">
                <Image
                  src={pastor.img}
                  alt={pastor.name}
                  width={300}
                  height={300}
                  className="rounded-md drop-shadow-lg shadow"
                />
                {pastor.title && (
                  <p className="absolute bottom-0 w-full bg-foreground py-1.5 text-center text-muted tracking-wider text-lg border border-foreground/30 rounded-b-md">
                    {pastor.title}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ministry Staff */}
      <section className="max-w-4xl mx-auto grid text-lg justify-center gap-4 py-10">
        <h1 className="text-center uppercase text-3xl font-bold">
          Ministry Staff
        </h1>
        <span className="text-center">
          The paid staff serve under the leadership and oversight of the
          pastors/elders, and are accountable to the church as a whole. Their
          objective is to help the pastors/elders shepherd the people by leading
          in specific areas of ministry.
        </span>
      </section>

      <section>
        <div className="flex justify-center flex-wrap gap-4 mx-4">
          {staffInfo.staff.map((staff) => (
            <div key={staff.name} className="max-w-fit mt-auto">
              <h2 className="text-center capitalize text-3xl font-bold">
                {staff.name}
              </h2>
              <div className="relative">
                <Image
                  src={staff.img}
                  alt={staff.name}
                  width={300}
                  height={300}
                  className="rounded-md"
                />
                {staff.title && (
                  <p className="absolute bottom-0 w-full bg-foreground py-1.5 text-center text-muted tracking-wider text-lg border border-foreground/30 rounded-b-md">
                    {staff.title}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default LeadershipPage
