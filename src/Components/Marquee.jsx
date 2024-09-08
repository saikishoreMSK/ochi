import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".2" className='bg-[#004D43] w-full py-20 rounded-tl-3xl rounded-tr-3xl'>
      <div className='text flex overflow-hidden whitespace-nowrap pr-20 border-t-2 border-b-2 border-zinc-300'>
      <motion.h1 
      initial={{x: "0"}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear",duration:10}}
      className='text-[17vw] leading-none font-["Founders_Grotesk_X-Condensed"] pt-10 -mb-[4vw] uppercase font-semibold'>Full Stack Developer</motion.h1>
      <motion.h1 
      initial={{x: "0"}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear",duration:10}}
      className='text-[17vw] leading-none font-["Founders_Grotesk_X-Condensed"] pt-10 -mb-[4vw] uppercase font-semibold'>Full Stack Developer</motion.h1>
      </div>
    </div>
  )
}

export default Marquee
