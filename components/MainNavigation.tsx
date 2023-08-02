"use client"

import React, { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"

interface NavItem {
  title: string
  href?: string
  description?: string
  routes?: NavItem[]
  disabled: boolean
}

export default function MainNavigation() {
  const items = siteConfig.mainNav as NavItem[]

  return (
    <>
      <NavigationMenu className="justify-end">
        <NavigationMenuList>
          {items?.length > 0
            ? items?.slice(1).map(
                (item, index) =>
                  item.href && (
                    <NavigationMenuItem key={item.title + index} className="relative">
                      {item.routes ? (
                        <>
                          <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <ul className="grid gap-3 p-6 md:w-[200px] lg:w-[300px]">
                              {item.routes.map((route) => (
                                <ListItem key={route.title} title={route.title} href={route.href} className={cn(route.disabled ? "pointer-events-none select-none text-neutral-300" : "")}>
                                  {route.description}
                                </ListItem>
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        </>
                      ) : (
                        <Link href={item.href} legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>{item.title}</NavigationMenuLink>
                        </Link>
                      )}
                    </NavigationMenuItem>
                  )
              )
            : null}
        </NavigationMenuList>
      </NavigationMenu>
    </>
  )
}

const ListItem = forwardRef<ElementRef<"a">, ComponentPropsWithoutRef<"a">>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className={cn("line-clamp-2 text-sm leading-snug text-muted-foreground", className)}>{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
