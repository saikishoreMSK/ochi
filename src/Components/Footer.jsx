import React from 'react'

const Footer = () => {
  return (
    <div className='w-full flex gap-5 h-screen bg-zinc-900 p-20 font-["Founders_Grotesk_X-Condensed"]'>
        <div className='w-1/2 '>
            <div className='heading '>
                <h1 className='text-[8vw] font-semibold uppercase leading-none -mb-10 '>Eyes-</h1>
                <h1 className='text-[8vw] font-semibold uppercase leading-none -mb-10 '>Opening</h1>
            </div>
        </div>
        <div className='w-1/2 '>
            <div className='heading'>
                <h1 className='text-[8vw] font-semibold uppercase leading-none -mb-10 '>Presentations-</h1>
            </div>
            <div className='links mt-10'>
              <a href="#" className='block font-["Neue_Montreal"] text-xl font-light'>Instagram</a>
              <a href="#" className='block font-["Neue_Montreal"] text-xl font-light'>FaceBook</a>
              <a href="#" className='block font-["Neue_Montreal"] text-xl font-light'>Twitter</a>
            </div>
        </div>
    </div>
  )
}

export default Footer
