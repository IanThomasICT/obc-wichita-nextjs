import Link from "next/link"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  const items = siteConfig.mainNav as NavItem[]

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            {items?.length > 0 ? (
              <nav className="hidden gap-6 md:flex">
                {items?.map(
                  (item, index) =>
                    item.href && (
                      <Link
                        key={index}
                        href={item.href}
                        className={
                          "flex items-center text-lg font-semibold text-muted-foreground sm:text-sm sm:uppercase"
                        }
                      >
                        {item.title}
                      </Link>
                    )
                )}
              </nav>
            ) : null}

            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
