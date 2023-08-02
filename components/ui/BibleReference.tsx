import { BookmarkPlus } from "lucide-react"

import { Separator } from "./separator"
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip"

export default function BibleRef(props: { content: string; size: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 12 | 14 | 16 }) {
  const iconSize = `w-${props.size} h-${props.size}`
  return (
    <Tooltip delayDuration={200}>
      <TooltipTrigger className="group mr-2">
        <BookmarkPlus className={iconSize} />
        <Separator className="mt-0.5 bg-transparent duration-150 group-hover:bg-foreground" />
      </TooltipTrigger>
      <TooltipContent>{props.content}</TooltipContent>
    </Tooltip>
  )
}
