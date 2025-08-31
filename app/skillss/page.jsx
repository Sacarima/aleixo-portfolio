"use client"

import { BsArrowDownRight } from "react-icons/bs"
import { motion  } from "framer-motion"
import Link from "next/link"

const Skillss = () => {
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
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold text-white">Skills</h2>
            <p className="text-white/80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold text-white">Skills</h2>
            <p className="text-white/80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold text-white">Skills</h2>
            <p className="text-white/80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skillss