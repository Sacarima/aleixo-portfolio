"use client"

import { Button } from "@/components/ui/Button"
import { BsDownload } from "react-icons/bs"
import Socials from "@/components/Socials"
import Photo from "@/components/Photo"




const Home = () => {

  const handleDownloadResume = () => {
    // Logic to download the resume
    const resumeUrl = "/assets/aleixo-resume.pdf"
   window.open(resumeUrl, "_blank")
  }

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none ">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello, I'm <br /> <span className="text-[#00FF99]">João Aleixo</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">I excel at building exceptional digital experiences. 
              Currently, I'm focused on building accessible, human-centered products.
            </p>
            {/* button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase cursor-pointer rounded-full flex items-center gap-2 bg-[#1c1c22] border-[#00FF99] border-[.5px] text-[#00FF99]"
                onClick={handleDownloadResume}
              >
                <span>Downoad Resume</span>
                <BsDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0 2xl:hidden ">
                <Socials
                  containerStyles="flex gap-6 text-red-500"
                  iconStyles="w-9 h-9 border border-[#00FF99] rounded-full  flex justify-center items-center text-[#00FF99] text-base  hover:text-[#1c1c22] hover:transition-all duration-300 hover:bg-[#00FF99]"
                />
              </div>
            </div>
          </div>

        
        
          {/* image */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo  />
          </div>
        </div>
      </div>
  

       
    </section>
  )
}

export default Home