"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const Photo = () => {
  return (
    <div className="w-full h-full relative">
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, 
                transition: { delay: 2, duration: 0.4, ease: "easeIn" },
            }}
        >
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, 
                    transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
                }}
                className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] absolut"
            >
                <Image
                src="/assets/joao.png"
                priority
                quality={100}
                alt="aleixo"
                fill
                className="object-contain "
                />

                
            </motion.div>
            {/* Circle */}
            {/* <motion.svg
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, 
                        transition: { delay: 2.8, duration: 0.4, ease: "easeInOut" },
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="transparent"
                    viewBox="0 0 506 506"
                    className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"   
                > 
                    <motion.circle
                        cx="257"
                        cy="257"
                        r="254"
                        stroke="#00FF99"
                        strokeWidth="5"
                        strokeLinecap={"round"}
                        strokeLinejoin={"round"}
                        initial={{ 
                            strokeDasharray: "24 10 0 0",
                         }}
                        animate={{ 
                            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                            rotate: [120, 280],
                         }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    
                    />
            </motion.svg> */}
        </motion.div>
    </div>
  )
}

export default Photo