import Image from 'next/image'

import cairoImg from '@public/gidaxstark.webp'
import starknetImg from '@public/starknet.svg'
import meetImg from '@public/meet.svg'
import youtubeImg from '@public/youtube.svg'
import CMALogo from '@public/CMALogo.png'
import heroImage from '@public/choong-deng-xiang-EbbqeyHpbto-unsplash.jpg'


const Cairo = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full gap-8 bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${heroImage.src})` }}>
      {/* Logo Row */}
      <div className="flex items-center gap-4 mb-2 mt-10">
        <Image src={CMALogo} alt="" className='w-24 hidden md:inline-block' />
        <span className="hidden md:inline-block">X</span>
        <Image src={starknetImg} alt="Starknet" className='w-24' />
      </div>

      {/* Cairo Image */}
      <div className="flex items-center gap-4 overflow-hidden">
        <Image src={cairoImg} alt="" className='w-[300px] md:w-[400px] lg:w-[450px]' />
      </div>

      {/* Tag Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 max-w-3xl text-xs capitalize mt-4 md:mt-[-20px] mb-6 mt-10">
        <div className="bg-[#ff6f00] rounded-md px-4 md:px-6 py-2 md:py-3 hover:bg-[#ff8f00] hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-lg">Mentorship Opportunities</div>
        <div className="bg-[#ff6f00] rounded-md px-4 md:px-6 py-2 md:py-3 hover:bg-[#ff8f00] hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-lg">Understanding Rust And Cairo</div>
        <div className="bg-[#ff6f00] rounded-md px-4 md:px-6 py-2 md:py-3 hover:bg-[#ff8f00] hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-lg">Learn web3/blockchain development</div>
        <div className="bg-[#ff6f00] rounded-md px-4 md:px-6 py-2 md:py-3 hover:bg-[#ff8f00] hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-lg">Hybrid - virtual classes & physical meetups</div>
        <div className="bg-[#ff6f00] rounded-md px-4 md:px-6 py-2 md:py-3 hover:bg-[#ff8f00] hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-lg">Network with fellow developers and build projects</div>
      </div>

      {/* Footer Info */}
      <div className="text-sm md:text-base bg-black flex items-center justify-center w-full text-center py-3 mt-8 gap-4 md:gap-6">
        <div className="flex items-center gap-2 text-white">
          <span>24<sup>th</sup> Feb - 14<sup>th</sup> Apr 2025</span>
        </div>
        <div className="flex items-center gap-2 text-white">
          <Image src={meetImg} alt="" className='mx-1 w-5 inline' />
          <Image src={youtubeImg} alt="" className='mx-1 w-5 inline' />
          <span>+ IRL Meetups</span>
        </div>
      </div>
    </div>

  )
}

export default Cairo