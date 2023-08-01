import { BookmarkPlus } from "lucide-react"

import { cn } from "@/lib/utils"

import { Separator } from "./separator"
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip"

function BibleRef(props: { content: string; size: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 12 | 14 | 16 }) {
  const iconSize = `w-${props.size} h-${props.size}`
  return (
    <Tooltip delayDuration={200}>
      <TooltipTrigger className="group mr-1">
        <BookmarkPlus className={iconSize} />
        <Separator className="bg-transparent mt-0.5 group-hover:bg-foreground duration-150" />
      </TooltipTrigger>
      <TooltipContent>{props.content}</TooltipContent>
    </Tooltip>
  )
}

export default BibleRef
