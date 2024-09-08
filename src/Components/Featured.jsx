import { delay, motion, useAnimate, useAnimation } from 'framer-motion'
import React, { useState } from 'react'

const Featured = () => {
  const cards = [useAnimation(),useAnimation()];
  const handleHover = (index)=>{
    cards[index].start({y:"0"})
  }
  const handleHoverEnd = (index)=>{
    cards[index].start({y:"100%"})
  }
  return (
    <div className='w-full py-20'>
      <div className='w-full border-b-[1px] border-zinc-700 px-20 pb-20 '>
        <h1 className='text-7xl font-["Neue_Montreal"] tracking-tight'>Featured Projects</h1>
      </div>
      <div className='px-20'>
      <div className='cards w-full flex gap-10 mt-10'>
        <motion.div onHoverStart={()=>handleHover(0)} onHoverEnd={()=>handleHoverEnd(0)} className='cardcontainer relative w-1/2 h-[75vh]'>
          <div className='absolute flex overflow-hidden left-full text-8xl -translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tighter font-semibold  text-[#CDEA68]'>
            {"HELLO".split("").map((item,index)=>
              <motion.span initial={{y: "100%"}} animate={cards[0]} transition={{ease: [0.22,1,0.36,1],delay: index*.04 }}
              className='z-99 inline-block'>{item}</motion.span>)}
          </div>
          <div className='card w-full h-full rounded-xl overflow-hidden'>
              <img className='w-full h-full bg-cover' src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png' />
          </div>
        </motion.div>
        <motion.div onHoverStart={()=>handleHover(1)} onHoverEnd={()=>handleHoverEnd(1)} className='cardcontainer relative w-1/2 h-[75vh]'>
          <div className='absolute flex overflow-hidden right-full text-8xl translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tighter font-semibold  text-[#e8831e]'>
            {"WORLD".split("").map((item,index)=>
              <motion.span initial={{y: "100%"}} animate={cards[1]} transition={{ease: [0.22,1,0.36,1],delay: index*.04 }}
              className='inline-block'>{item}</motion.span>)}
          </div>
            <div className='card w-full h-full rounded-xl overflow-hidden'>
                <img className='w-full h-full bg-cover' src='https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg' />
            </div>
        </motion.div>
      </div>
      </div>
    </div>
  )
}

export default Featured
