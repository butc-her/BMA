import Image from 'next/image';
import Link from 'next/link';
import communityimg from '@public/hassan-kibwana-Ks1-CD31HUQ-unsplash.jpg'

const JoinCommunity = () => {
  return (
    <section className=''>
        <div className="px-8 lg:py-12">
            <div className="flex flex-col">
                <h2 className='text-3xl sm:text-4xl md:text-4xl text-black text-left font-bold mt-4 capitalize'>join our vibrant communities</h2>
                <p className='text-1xl sm:text-4xl md:text-2xl text-black mb-8 text-left'>Be part of a vibrant community that shares your passion for blockchain technology.</p>
                <div className='flex flex-col justify-center items-center gap-6 text-left sm:flex-row '>
                    <div className="flex-1">
                        <Image 
                            alt="Discord"                 
                            src={communityimg}
                            className="h-full w-[100%] object-cover sm:w-[100%]" 
                        />    
                    </div>
                    <div className="flex-1">
                        <h2 className="capitalize text-3xl md:text-4xl md:font-bold text-black"><span className="uppercase">cma</span> developers community</h2>
                        <p className='mb-5 text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto fugit tempore dolore doloribus unde nesciunt minima error perspiciatis laudantium, voluptates sed molestiae, quibusdam ipsum neque dolor. Tempora, ducimus esse. Facilis!</p>
                        <p className='mb-5 text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto fugit tempore dolore doloribus unde nesciunt minima error perspiciatis laudantium, voluptates sed molestiae, quibusdam ipsum neque dolor. Tempora, ducimus esse. Facilis!</p>
                        <p className='mb-5 text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto fugit tempore dolore doloribus unde nesciunt minima error perspiciatis laudantium, voluptates sed molestiae, quibusdam ipsum neque dolor. Tempora, ducimus esse. Facilis!</p>
                        <div className="flex justify-end items-end w-[100%] mt-4">
                            <Link href="/joincommuinty" className="">
                                <button className="bg-[#ff6f00] capitalize px-[15px] py-2 mb-4 rounded-lg text-white transition-all duration-200 hover:bg-[#ff7f00]">
                                    join our community
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default JoinCommunity