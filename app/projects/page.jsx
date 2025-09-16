"use client"

import { motion } from "framer-motion"
import React, { useState } from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { BsArrowUpRight, BsGithub } from "react-icons/bs"


import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"
import Image from "next/image"
import ProjectSlideButton from "@/components/ProjectSlideButton"

function normalizeHref(url) {
  if (!url) return "/";
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  if (url.startsWith("/")) return url; // keep relative routes as-is
  return `https://${url.replace(/^\/+/, "")}`;
}



const projects = [
  {
    num: "01",
    category: "Full Stack",
    title: "Project 1",
    description: "Web application built to connect doctors and patients for seamless online and offline consultations. The platform allows doctors to manage their profiles, schedule appointments, and interact with patients. Patients can search for doctors based on specialties, book appointments, and consult their healthcare providers easily.",
    stack: [
      [{ name: "HTML5" }],
      [{ name: "Tailwind.css" }],
      [{ name: "JavaScript" }],
      [{ name: "React" }],
      [{ name: "Node.js" }],
      [{ name: "Express" }],
      [{ name: "MongoDB" }],
      [{ name: "Firebase" }],
      [{ name: "Flowbite" }],
    ],
    image: "/assets/galeria-11.jpg",
    github: "https://github.com/Sacarima/MEDIPULSO",
    live: "https://medipulso.com/",
  },
  {
  num: "02",
  category: "Full Stack",
  stack: [
    [{ name: "HTML 5" }],
    [{ name: "Tailwind.css" }],
    [{ name: "React" }],
    [{ name: "Node.js" }],
    [{ name: "Express" }],
    [{ name: "MongoDB" }],
    [{ name: "Firebase (Auth)" }],
    [{ name: "Flowbite" }]
  ],
  title: "Immobilia-Virtual",
  description:
    "Modern, responsive real-estate web app for the Polish market. Search, filter, and explore listings; subscribe to market insights; contact trusted pros; and sign in with Google OAuth. Includes advanced search with URL-synced filters and pagination, a reusable newsletter subscription component, contact form with server-side validation, responsive navigation with mobile drawer, and Firebase Authentication with Google sign-in.",
  image: "/assets/realestate.jpg",
  github: "https://github.com/Sacarima/immobiliariovirtual",
  live: "https://immobiliario-virtual.onrender.com/" 
},
  
  {
    num: "03",
    category: "Chrome Extension",
    title: "Read Later with Time Estimation",
    description: `A productivity-focused Chrome extension that lets users save any web page with one click and automatically calculates an estimated reading time based on word count. The extension provides an intuitive popup interface where users can view, search, and manage saved articles. Features include inline reading-time estimation, quick search by title, delete/clear all functionality, and persistent storage via the Chrome Storage API. Built with clean UI and lightweight performance in mind, it helps users organize online reading without external tools.`,
    stack: [
      [{ name: "HTML 5" }],
      [{ name: "CSS3" }],
      [{ name: "JavaScript (ES6+)" }],
      [{ name: "Chrome Extensions API" }],
    ],
    image: "/assets/reading.jpg", 
    github: "https://github.com/Sacarima/read-later-extension",
    live: "https://chromewebstore.google.com/detail/read-later-with-estinatio/cifdmmkbpnkggmebbfeaaffhjbdipamb",
  },

  {
    num: "04",
    category: "Frontend",
    stack: [
      [{ name: "HTML 5" }],
      [{name: "Tailwind.css" }],
      [{ name: "JavaScript" }],
      [{ name: "React" }],
      [{ name: "Flowbite" }]
    ],
    title: "Project 4",
    description: "Alputo Trading is a dynamic trading company based in Angola and Namibia, focused on facilitating cross-border trade and promoting economic growth. Using React, I developed a responsive, user-friendly website that showcases the company’s services, including general trade, logistics, foreign trade consulting, and more.",
    image: "/assets/galeri-3.jpg",
    github: "https://github.com/Sacarima/Alputo-Trading/tree/main",
    live: "https://alputo-trading.vercel.app/",
  },
  {
    num: "05",
    category: "Personal Portfolio",
    stack: [
      [{ name: "HTML 5" }],
      [{ name: "Tailwind.css" }],
      [{ name: "Next.js" }]
    ],
    title: "Project 5",
    description: "A personal portfolio website built with Next.js and TailwindCSS, designed to showcase my skills, experience, and projects as a software engineer. The site features a modern, responsive design with smooth navigation, dark mode support, and optimized performance for fast loading.It includes sections for an About Me introduction, a Projects showcase, a Skills & Tech Stack overview, and a Contact form to easily connect. The portfolio is structured to highlight both technical expertise and design sense, ensuring a professional online presence for potential employers, clients, and collaborators.",
    image: "/assets/portfolio.jpg",
    github: "https://github.com/Sacarima/aleixo-portfolio/tree/main",
    live: "https://github.com/Sacarima/aleixo-portfolio/tree/main",
  },
  {
    num: "06",
    category: "Frontend",
    title: "Project 6",
    description: "Responsive and feature-rich eCommerce platform for selling clothes, using modern web technologies and tools. For the backend, Strapi was used to manage and deliver dynamic content, providing an easy-to-use interface for content updates. The platform integrates Stripe for secure payment processing",
    stack: [
      [{ name: "HTML 5" }],
      [{ name: "CSS" }],
      [{ name: "Tailwind.css" }],
      [{ name: "JavaScript" }],
      [{ name: "React" }],
      [{ name: "Strapi" }],
      [{ name: "Stripe" }],
      [{ name: "Formik" }],
      [{ name: "Material UI" }],

    ],
    image: "/assets/galeri-2.jpg",
    github: "https://github.com/Sacarima/ecommerce-server/tree/master",
    live: "https://github.com/Sacarima/ecommerce-server/tree/master",
  }


]



const Projects = () => {
  const [project, setProject] = useState(projects[0])
  const [swiper, setSwiper] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)


  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.realIndex
    setProject(projects[currentIndex])
  }
console.log("LIVE PROJECT 5 ->", project.live)
  return (
    <motion.div 
      initial={{ opacity: 0, }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="min-h-[80vh] flex flex-col justify-center items-center py-12 mx-4 xl:mx-0"
    >
      <div className="container mx-auto ">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="text-8xl leading-none font-extrabold stroke-text text-[#1c1c22] text-outline">
              {/* Outline */}
              {project.num}
            </div>
            {/* Projects */}
            <h2 className="text-[32px] font-bold leading-none text-white  group-hover:text-[#00FF99] transition-all duration-500 capitalize">{project.category} project</h2>
            {/* project description */}
            <p className="text-white/60 py-4">{project.description}</p>
            {/* Stack */}
            <ul className="flex flex-wrap gap-2 mb-4">
              {project.stack.map((item, index) => {
                return (
                  <li key={index} className="text-xl text-[#00FF99]">
                    {item[0].name}
                    {index !== project.stack.length - 1 && <span className="text-white/60">,</span>}
                  </li>
                )
              })}
            </ul>
            <div className="border border-white/20"></div>
            <div className="flex items-center  gap-4">
              <a 
                href={project.live} 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open live project (opens in a new tab)"
              >
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex items-center justify-center group  gap-4 mt-4">
                      <BsArrowUpRight className="text-white text-[40px] cursor-pointer group-hover:text-[#00FF99]" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </a>

              <Link href={project.github} target="_blank">
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex items-center justify-center group  gap-4 mt-4">
                      <BsGithub className="text-white text-[40px] cursor-pointer group-hover:text-[#00FF99]" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Github repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12 relative"
              onSlideChange={handleSlideChange}
              loop={true}
              
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[480px] xl:h-[480px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="w-full h-full relative">
                        <Image
                          src={project.image}
                          priority
                          alt={project.title}
                          fill
                          className="object-fill  group-hover:scale-105 transition-all duration-500"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              }
              )}
              {/* Swide button */}
              <ProjectSlideButton 
               
                containerStyles="flex gap-2 absolute  bottom-70 xl:bottom-10  z-20 w-full justify-between xl:w-full xl:justify-end"
                btnStyles="bg-[#00FF99] hover:bg-[#00FF99]-hove text-[#1c1c22] text-[22px] w-[44px] h-[44px] flex justify-center items-center transation-all"
                
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Projects