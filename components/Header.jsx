"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import Image from "next/image"

//components
import MobileNav from './MobileNav'
import Nav from './Nav'

const Header = () => {

 const handleDownloadResume = () => {
    // Logic to download the resume
    const resumeUrl = "/assets/Joao-Aleixo-Resumee.pdf"
   window.open(resumeUrl, "_blank")
  }
  
  return (
    <header className='py-2 xl:py-8 text-white '>
        <div className='container mx-auto flex items-center justify-between'>
            {/* Logo */}
            <Link href="/" className='flex items-center justify-center'>
                <h1 className='text-4xl font-bold ml-4'>
                    J<span className=" text-[#00FF99] mx-1 ">&#9763;</span>a
                </h1>
                
            </Link>
            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center gap-8">
                 <Nav />

                    <Button className="cursor-pointer rounded-full" onClick={handleDownloadResume}>
                        Resume
                    </Button>

            </div>

            {/* Mobile Navigation */}
            <div className="xl:hidden mx-4 ">
                <MobileNav />
            </div>
        </div>
        
    </header>
  )
}

export default Header