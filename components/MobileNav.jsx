"use client"

import { useEffect, useState } from "react"
import { Sheet, SheetContent, SheetTrigger, SheetDescription } from "@/components/ui/sheet"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { CgMenuRight } from "react-icons/cg"
import Image from "next/image"

const links = [
  { name: "home", path: "/" },
  { name: "about", path: "/about" },
  { name: "skills", path: "/skills" },
  { name: "projects", path: "/projects" },
  { name: "contact", path: "/contact" },
]

const MobileNav = () => {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // Auto-close the sheet whenever the route changes (e.g., back/forward nav)
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex items-center justify-center">
        <CgMenuRight className="text-[40px] text-[#00FF99]" />
      </SheetTrigger>

      <SheetContent className="flex flex-col">
        <SheetDescription className="sr-only">Navigation Menu</SheetDescription>

        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/" onClick={() => setOpen(false)}>
            <h1 className="text-4xl font-semibold ml-4">
              J<span className=" text-[#00FF99] mx-1 ">&#9763;</span>a
            </h1>
          </Link>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex flex-col justify-center items-center gap-8">
            {links.map((link) => {
              const isActive = pathname === link.path
              return (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    onClick={() => setOpen(false)}
                    className={`${
                      isActive
                        ? "text-[#00FF99] font-bold border-b-2 border-[#00FF99] capitalize"
                        : "text-white capitalize font-medium hover:text-[#00FF99] transition-all"
                    } text-xl`}
                  >
                    {link.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
