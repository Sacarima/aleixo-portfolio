"use client"


import { BsArrowDownRight } from "react-icons/bs"
import { motion  } from "framer-motion"
import Link from "next/link"




const ServicesCard = [
  {
    num: '01',
    title: "Languages",
    description: "JavaScript, TypeScript, HTML5,jQuery, CSS, SCSS, CSS3, SQL ",
    href:""
  },
  {
    num: '02',
    title: "Frameworks",
    description: "React, React-Native Next.js, Node.js, Express.js, WordPress, Tailwind CSS, Bootstrap,",
    href:""
  },
  {
    num: '03',
    title: "Tools",
    description: "Bash, Git, GitHub, Github Actions, Firebase, MongoDB, Postman, Postgres, Strapi, Chrome DevTools, Netlify",
    href:""
  },
  {
    num: '04',
    title: "UI/UX Design",
    description: "I'm probably not the typical designer positioned behind an Illustrator artboard adjusting pixels, but I design. Immersed in stylesheets tweaking font sizes and contemplating layouts is where you'll find me (~_^). I'm committed to creating fluent user experiences while staying fashionable.",
    href:""
  },
  {
    num: '05',
    title: "Engineering",
    description: "In building JavaScript applications, I'm equipped with just the right tools, and can absolutely function independently of them to deliver fast, resilient solutions optimized for scale — performance and scalabilty are priorities on my radar.",
    href:""
  },
]
const Skills = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center py-12 xl:py-0 mx-4 xl:mx-0">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0,}}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[60px] "
        >
            {ServicesCard.map((service, index) => {
              return (
                <div key={index} className="flex-1 flex flex-col justify-center  gap-6 group">
                  {/* Top */}
                  <div className="w-full flex items-center justify-between">
                    <div className="stroke-text text-5xl font-extrabold text-outine text-outline-hover text-transparent group-hover:text-[#00FF99]">
                      {service.num}
                    </div>
                    <Link href={service.href} className="w-[70px] h-[70px]  flex justify-center items-center hover:-rotate-45 rounded-full border  text-black bg-white text-2xl group-hover:bg-[#00FF99] group-hover:text-[#1c1c22] transition-all duration-300">
                      <BsArrowDownRight />
                    </Link>
                  </div>

                  {/* title*/}
                  <h2 className="text-[42px] font-bold text-white group-hover:text-[#00FF99] transition-all duration-300">
                    {service.title}
                  </h2>
                  {/* description */}
                  <p 
                    className="text-white/60"
                  >
                    {service.description} 
                  </p>
                  {/* border */}
                  <div className="w-full  border-b border-white/20"></div>
                </div>
              )
            })}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills