import LogoButton from "./LogoButton"
import MainNavigation from "./MainNavigation"

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <LogoButton />
        <div className="hidden sm:max-w-fit sm:flex flex-1 items-center justify-end space-x-4">
          <MainNavigation />
        </div>
      </div>
    </header>
  )
}
