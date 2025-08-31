"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "about",
        path: "/about",
    },
    {
        name: "skills",
        path: "/skills",
    },
    {
        name: "projects",
        path: "/projects",
    },

    {
        name: "contact",
        path: "/contact",
    },

]

const Nav = () => {
  return (
    <nav className="flex gap-6">
        {links.map((link) => {
            const pathname = usePathname()
            const isActive = pathname === link.path

            return (
                <Link
                    key={link.name}
                    href={link.path}
                    className={`${
                        isActive
                            ? "text-[#00FF99] font-bold border-b-2 border-[#00FF99] capitalize "
                            : "text-white capitalize font-medium hover:text-[#00FF99] transition-all"
                    } text-lg`}
                >
                    {link.name}
                </Link>
            )
        }
        )}
    </nav>
  )
}

export default Nav