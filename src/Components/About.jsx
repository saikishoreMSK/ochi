import React from 'react'
// data-scroll data-scroll-section data-scroll-speed="-.2"
const About = () => {
  return (
    <div  className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl '>
      <h1 className='font-["Neue_Montreal"] tracking-tight text-black text-[4vw] leading-[4.5vw] '>Ochi is a strategic partner for fast-growing tech businesses
         that need to raise funds,sell products, explain complex ideas,
          and hire great people.</h1>
        
        <div className='flex gap-5 w-full border-t-[1px] border-[#434f17] pt-10 mt-20 text-black'>
            <div className='w-1/2'>
                <h1 className='text-7xl'>Our Approach: </h1>
                <button className='flex items-center gap-4 bg-zinc-900 px-8 py-4 rounded-full text-white mt-8'>READ MORE 
                    <div className='h-2 w-2 rounded-full bg-zinc-100'></div>
                </button>
            </div>
            <div className='w-1/2 h-[70vh] bg-[#71852a] rounded-3xl'></div>
        </div>

        
    </div>
  )
}

export default About
