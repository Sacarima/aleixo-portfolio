"use client"

import PhotoAbout from "@/components/PhotoAbout"
import Link from "next/link"

const About = () => {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center py-12 xl:py-0 mx-4 xl:mx-0">
      <div className="container mx-auto flex flex-col xl:flex-row items-cente">

        <div className="order-2 xl:order-none">
          {/* Title */}
          <div className="flex items-center lg:w-full lg:p-6 lg:mx-auto  gap-4 py-4 mt-4 order-3 xl:order-none">
            <p className="text-[#00FF99] text-3xl">01.</p>
            <h1 className="text-xl xl:text-3xl md:text-xl lg:text-2xl font-bold text-white ">About me</h1>
            <div className="border-b-[0.5px] border-slate-300/50 w-[150px] xl:w-[400px]"></div>
          </div>
          {/* About Text */}
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 order-3 xl:order-none">
            <div className="xl:w-[55%] lg:w-full lg:p-6 lg:mx-auto flex-1 xl:text-lef ">
              <div className="max-w-[580px] lg:max-w-full xl:max-w-2/3">
                <p className="text-white/50 mt-4">
                  I am a passionate Software Developer with a focus on creating dynamic and
                  responsive web applications. I have experience in various technologies
                  and frameworks and I am always eager to learn more</p>
                <p className="text-white/50 mt-4">
                 My interest in web development started back in 2015 when I decided to creating a blog page using <span className="text-[#00FF99]">Adobe Dreamweaver</span>.
                 Turns out trying to figure out what's going on under the hood was much more fun than just using a <span className="text-[#00FF99]">WYSIWYG editor</span>.
                 I started learning <span className="text-[#00FF99]">HTML, CSS and JS</span> and never looked back.
                </p>
                <p className="text-white/50 mt-4">
                  My goal is to build user-friendly and efficient applications that solve
                  real-world problems.
                </p>
                <p className="text-white/50 mt-4">
                  I am constantly exploring new technologies and best practices to improve
                  my skills and deliver high-quality work.
                </p>
                <p className="text-white/50 mt-4">
                  I am excited to collaborate with others and contribute to innovative
                  projects that make a difference.
                </p>
                <p className="text-white/50 mt-4">
                  Let's connect and discuss how we can work together to create amazing
                  things!
                </p>
                <p className="text-white/50 mt-4">
                  Feel free to reach out to me through my contact page or connect with me
                  on <Link 
                     href="https://www.linkedin.com/in/jo%C3%A3o-aleixo-a3aa32253"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-[#00FF99] cursor-pointer"
                  >
                    LinkedIn.</Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="xl:w-[45%] lg:w-[80% order-1 xl:order-none mt-8 xl:mt-0 m">
            <PhotoAbout className=""/>
        </div>

      </div>
    </div>
  )
}

export default About