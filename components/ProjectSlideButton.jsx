"use client"

import {useSwiper } from "swiper/react"
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos  } from "react-icons/md";

const ProjectSlideButton = ({ containerStyles, btnStyles, iconsStyles }) => {
    const swiper = useSwiper()

  return (
    <div className={`relative ${containerStyles}`}>
        <button className={btnStyles}>
            <MdOutlineArrowBackIos 
            className={`${iconsStyles} cursor-pointer`} 
            onClick={() => swiper.slidePrev()} 
                />
        </button>
        <button className={btnStyles}>
            <MdOutlineArrowForwardIos 
            className={`${iconsStyles} cursor-pointer`} 
            onClick={() => swiper.slideNext()} 
                />
        </button>
    </div>
  )
}

export default ProjectSlideButton

