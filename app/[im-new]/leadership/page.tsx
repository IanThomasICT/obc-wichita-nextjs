import Image from "next/image"
import { Mail } from "lucide-react"

import { staffInfo } from "@/config/staff"
import BibleRef from "@/components/ui/BibleReference"

export default function LeadershipPage() {
  return (
    <div className="space-y-12 bg-muted-foreground/10 py-12">
      {/* Pastors / Elders */}
      <section className="">
        <div className="mx-auto grid max-w-4xl justify-center gap-4 px-4 text-lg text-foreground">
          <h1 className="py-4 text-center text-6xl font-bold uppercase tracking-widest">Pastors / Elders</h1>
          <span className="whitespace-nowrap text-xl">Olivet is a Christ-ruled, pastor/elder-led, deacon-served, staff-run, congregationally-governed body of believers.</span>
          <span>
            Following the pattern of the New Testament, we use the terms pastor/elder/overseer interchangeably.
            <BibleRef content="Acts 20:17, 28; Titus 1:5-9; 1 Peter 5:1-4" size={3} />
            Our pastors / elders / overseers are the under-shepherds who serve the Chief Shepherd (i.e. Jesus) by leading and caring for the flock of Olivet Baptist Church. Our pastors / elders /
            overseers are accountable to the church as a whole.
          </span>
        </div>
      </section>

      <section className="mx-20">
        <div className="mx-4 flex flex-wrap justify-center gap-4">
          {staffInfo.pastors.map((pastor) => (
            <div key={pastor.name} className="mt-auto max-w-fit rounded bg-background p-5 shadow">
              <h2 className="text-center text-3xl font-bold capitalize">{pastor.name}</h2>
              <a href={"mailto:" + pastor.email} className="group relative block">
                <Image src={pastor.img} alt={pastor.name} width={250} height={250} className="rounded-md brightness-100 drop-shadow-lg duration-300 ease-in-out group-hover:brightness-50" />
                <Mail className="absolute left-[45%] top-[40%] h-10 w-10 translate-y-5 text-white opacity-0 ease-in group-hover:opacity-100 group-hover:duration-200" />
                {pastor.title && <p className="absolute bottom-0 w-full rounded-b-md border border-foreground/30 bg-foreground py-1.5 text-center text-lg tracking-wider text-muted">{pastor.title}</p>}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Ministry Staff */}
      <section className="mx-auto grid max-w-4xl justify-center gap-4 pt-10 text-lg">
        <h1 className="text-center text-6xl font-bold uppercase tracking-widest">Ministry Staff</h1>
        <span className="text-center text-xl">
          Our paid staff serve under the leadership and oversight of the pastors/elders and are accountable to the church as a whole. Their objective is to help the pastors/elders shepherd the people
          by leading in specific areas of ministry.
        </span>
      </section>

      <section>
        <div className="mx-4 flex flex-wrap justify-center gap-4">
          {staffInfo.staff.map((staff) => (
            <div key={staff.name} className="mt-auto max-w-fit rounded bg-background p-4 shadow">
              <h2 className="text-center text-3xl font-bold capitalize">{staff.name}</h2>
              <a href={"mailto:" + staff.email} className="group relative block">
                <Image src={staff.img} alt={staff.name} width={250} height={250} className="rounded-md brightness-100 drop-shadow-lg duration-300 ease-in-out group-hover:brightness-50" />
                <Mail className="absolute left-[45%] top-[40%] h-10 w-10 translate-y-5 text-white opacity-0 ease-in group-hover:opacity-100 group-hover:duration-200" />
                {staff.title && <p className="absolute bottom-0 w-full rounded-b-md border border-foreground/30 bg-foreground py-1.5 text-center tracking-wider text-muted">{staff.title}</p>}
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
