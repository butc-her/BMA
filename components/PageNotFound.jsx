import Link from 'next/link'
import Image from 'next/image'
import pageLogo from '@public/CMALogo.png'
import heroImage from '@public/milad-fakurian-wNsHBf_bTBo-unsplash.jpg'

const PageNotFound = () => {
  return (
    <div className='pt-20 text-white relative min-w-full h-[92.4vh] max-h-screen' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage.src})` }}>
        <div className="flex flex-col items-center justify-center h-full gap-12">
            <Image src={pageLogo} alt="CMA Logo" className='w-[15%]' />
            <div className="flex flex-col flex-wrap items-center justify-center gap-2 md:gap-4 mb-30 max-w-3xl text-xs capitalize">
                <div className="text-2xl font-bold text-red-500 tracking-wide">page not found</div>
                <Link className='hover:underline animate-pluse text-lg text-black' href="/">back home</Link>
            </div>
        </div>
    </div>
  )
}

export default PageNotFound