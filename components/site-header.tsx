import { LogoButton } from "@/components/logo-button"
import { ThemeToggle } from "@/components/theme-toggle"

import { MainNav } from "./main-nav"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <LogoButton />
        <div className="max-w-fit flex flex-1 items-center justify-end space-x-4">
          <MainNav />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
