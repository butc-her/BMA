import Image from 'next/image'
import Nav from '@components/Nav'
import Link from 'next/link'
import heroImage from '@public/milad-fakurian-wNsHBf_bTBo-unsplash.jpg'

const HeroSection = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat h-screen flex flex-col justify-center items-center text-center w-full " style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage.src})` }}>
         
        <div className="flex flex-col gap-4">
            <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl p-2 font-bold mb-4 uppercase leading-tight"><span className='text-[#ff6f00]'>Blockchain</span> <span className='text-[#000]'>Masters Academy</span></h1>
            <p className="text-white text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl mb-8">Blockchain for Everyone</p>
            <div className="flex gap-6 justify-center">
              <Link href='/bootcamps' className="bg-[#f66f00] text-[#f8f8f8] px-6 py-3 rounded-lg hover:bg-[#ff7f00] hover:text-white transition duration-300 capitalize">
                our bootcamp
              </Link>
              <Link href='/events' className="border border-[#ff6f00] text-[#ff6f00] px-6 py-3 rounded-lg hover:text-[#ff6f00] hover:border hover:text-[#ff8f00] transition duration-300 capitalize">
                our event
              </Link>
            </div>
        </div>
    </div>
  )
}

export default HeroSection