"use client"
import Link from 'next/link'
import Image from 'next/image';
import blogImg1 from '@public/milad-fakurian-wNsHBf_bTBo-unsplash.jpg'
import blogImg2 from '@public/milad-fakurian-wNsHBf_bTBo-unsplash.jpg'
import blogImg3 from '@public/milad-fakurian-wNsHBf_bTBo-unsplash.jpg'


const OurBlog = () => {
  return (
    <section className='w-full md:px-12 flex flex-col items-center'>
        <div className="max-w-screen-2xl mx-auto p-6">
            <div className="">
                <h2 className="text-2xl lg:text-[2.5rem] mb-8 text-center">Our Blog</h2>
            </div>
            <div className="grid grid-col-1 lg:grid-cols-2 gap-x-4 xl:gap-x-12 gap-y-12">
                <div className="lg: lg:row-span-2 flex flex-col gap-2 lg:gap-4">
                    <div className="overflow-hidden h-[200px] rounded-md lg:h-full lg:h-auto">
                        <Image
                            src={blogImg1}
                            alt="Blog Image"
                            width={40}
                            height={40}
                            className="object-cover hover:scale-105 transition-all h-full w-full rounded-lg"
                        />
                    
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <span className="capitalize text-sm lg:text-base font-lato rounded-full px-2 py-0.5 bg-[#ff6f00] text-white">crypto</span>
                        <span className="capitalize text-sm lg:text-base font-lato rounded-full px-2 py-0.5 bg-[#ff6f00] text-white">news</span>
                    </div>
                    <div className="">
                        <h3 className="hover:underline text-[1.5rem] lg:text-4xl cursor">Blockchain's mind-blowing potential</h3>
                        <p className="font-lato">Discover how blockchain technology is revolutionizing industries, enhancing security, and driving innovation.</p>
                        <Link href="/blog" className="flex gap-2 mt-4 items-centerlg:text-base">
                            <div className="flex item-center hover:underline justify-center gap-2">Read More</div>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col gap-2 lg:gap-4">
                    <div className="overflow-hidden h-[200px] rounded-md lg:h-full">
                        <Image
                            src={blogImg2}
                            alt="Blog Image"
                            width={40}
                            height={40}
                            className="object-cover hover:scale-105 transition-all h-full w-full rounded-lg shadow-lg"
                        />
                
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <span className="capitalize text-sm lg:text-base font-lato rounded-full px-2 py-0.5 bg-[#ff6f00] text-white">crypto</span>
                        <span className="capitalize text-sm lg:text-base font-lato rounded-full px-2 py-0.5 bg-[#ff6f00] text-white">news</span>
                    </div>
                    <div className="">
                        <h3 className="hover:underline text-[1.5rem] lg:text-4xl cursor">Blockchain's mind-blowing potential</h3>
                        <p className="font-lato">Discover how blockchain technology is revolutionizing industries, enhancing security, and driving innovation.</p>
                        <Link href="/blog" className="flex gap-2 mt-4 items-centerlg:text-base">
                            <div className="flex item-center hover:underline justify-center gap-2">Read More</div>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col gap-2 lg:gap-4">
                        <div className="overflow-hidden h-[200px] rounded-md lg:h-full">
                            <Image
                                src={blogImg3}
                                alt="Blog Image"
                                width={40}
                                height={40}
                                className="object-cover hover:scale-105 transition-all h-full w-full rounded-lg shadow-lg"
                            />
                    
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <span className="capitalize text-sm lg:text-base font-lato rounded-full px-2 py-0.5 bg-[#ff6f00] text-white">crypto</span>
                            <span className="capitalize text-sm lg:text-base font-lato rounded-full px-2 py-0.5 bg-[#ff6f00] text-white">news</span>
                        </div>
                        <div className="">
                                                    <h3 className="hover:underline text-[1.5rem] lg:text-4xl cursor">Blockchain's mind-blowing potential</h3>
                        <p className="font-lato">Discover how blockchain technology is revolutionizing industries, enhancing security, and driving innovation.</p>
                        <Link href="/blog" className="flex gap-2 mt-4 items-centerlg:text-base">
                            <div className="flex item-center hover:underline justify-center gap-2">Read More</div>
                        </Link>
                    </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default OurBlog