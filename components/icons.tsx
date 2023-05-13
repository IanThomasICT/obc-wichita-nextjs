import Image from "next/image"
import globeLogo from "@/public/globe-icon.png"
import {
  LucideProps,
  Moon,
  SunMedium,
  Twitter,
  type Icon as LucideIcon,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  twitter: Twitter,
  logo: (props: { className: string }) => (
    <Image src={globeLogo} alt="olivet icon" className={props.className} />
  ),
}
