import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 flex items-center px-32 gap-5'>
      <div className='cardcontainer flex w-1/2 h-[40vh] '>
        <div className='card relative w-full h-full rounded-xl flex items-center justify-center  bg-[#004D43]'>
            <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg'/>
            <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>&copy;Hello</button>
        </div>
      </div>
      <div className='cardcontainer flex gap-5 w-1/2 h-[40vh]  '>
        <div className='card relative w-1/2 h-full rounded-xl flex items-center justify-center  bg-[#da852a]'>
            <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg'/>
            <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>&copy;Hello</button>
        </div>
        <div className='card relative w-1/2 h-full rounded-xl flex items-center justify-center  bg-[#da852a]'>
            <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg'/>
            <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>&copy;Hello</button>
        </div>
      </div>
    </div>
  )
}

export default Cards
