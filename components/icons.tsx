import Image from "next/image"
import globeLogo from "@/public/globe-icon.png"
import {
  Facebook,
  Instagram,
  Moon,
  SunMedium,
  Youtube,
  type Icon as LucideIcon,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  facebook: Facebook,
  youtube: Youtube,
  instagram: Instagram,
  logo: (props: { className: string }) => (
    <Image src={globeLogo} alt="olivet icon" className={props.className} />
  ),
}
