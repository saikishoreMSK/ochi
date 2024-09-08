import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";


const LandingPage = () => {
  return (
    
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-52 px-20 '>
            {["We Create","Eye-Opening","Presentations"].map((item,index)=>{
                return (
                    <React.Fragment key={index}>
                      <div className='masker'>
                        <div className='w-fit flex items-end overflow-hidden'>
                          {index === 1 && (
                            <motion.div 
                            initial={{width:0}} animate={{width: "8vw"}} transition={{ease:"easeInOut",duration:1}}
                            className='mr-[1vw] w-[8vw] h-[5.7vw] rounded-md -top-[1.2vw] relative bg-red-500'>
                            </motion.div>)}
                        <h1 className='pt-[2vw] -mb-[1vw] flex items-center uppercase text-[9vw] leading-[7vw]  font-["Founders_Grotesk_X-Condensed"] font-bold'>
                          {item}</h1>
                        </div>
                      </div>
                      <div />
                    </React.Fragment>
                  )
            })}
        </div>
        <div className='border-t-[1px] bg-zinc-900 mt-20 flex justify-between items-center py-5 px-8'>
          {["For public and private companies","From the first pitch to IPO"].map((item,index)=>(
            <p className='text-md font-light tracking-tight leading-none'>{item}</p>
            ))}
            <div className='start flex items-center gap-5'>
              <div className='px-5 py-2 border-[1px] border-zinc-400 rounded-full font-light uppercase'>Start the project</div>
              <div className='w-10 h-10 border-[1px] border-zinc-400 rounded-full flex justify-center items-center rotate-45'>
              <FaArrowUpLong />
              </div>
            </div>
        </div>
        
    </div>

  );
}

export default LandingPage
