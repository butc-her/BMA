import Link from 'next/link'
import Image from 'next/image';
import aboutImg from '@public/guerrillabuzz-8GXpptuzqBw-unsplash.jpg'
const AboutUs = () => {
return (
    <section className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center sm:flex-row sm:justify-center items-center px-6">
            <div className="flex flex-col gap-5 text-left flex-1">
                <h1 className="text-[2.5rem] xl:text-[2.5rem] uppercase">who are we?</h1>
                <p className="text-1xl">
                    We believe blockchain is the future, and everyone deserves a chance to be part of it. Our vision is to bridge the gap between curiosity and expertise, turning learners into creators, innovators, and leaders in the decentralized world. Through quality education, hands-on training, and a thriving  community, we aim to make Web3 a place where anyone regardless of background can grow, earn, and make meaningful impact.
                </p>
                <div className='flex flex-row gap-6 mt-3'>
                    <div className='flex flex-col gap-0 items-start'>
                        <p className='xl:text-[6rem] text-[3rem]'> 800+</p>
                        <p className='text-sm lg:text-base'>community members</p>
                    </div>
                    <div className='flex flex-col gap-0 items-start'>
                        <p className='xl:text-[6rem] text-[3rem]'>0</p>
                        <p className='text-sm lg:text-base'>bootcamps</p>
                    </div>
                    <div className='flex flex-col gap-0 items-start'>
                        <p className='xl:text-[6rem] text-[3rem]'>0</p>
                        <p className='text-sm lg:text-base'>events</p>
                    </div>
                </div>
                <div className="flex items-center gap-x-4 mb-3">
                    <Link href="/about">
                        <button className='capitalize text-white bg-[#ff6f00] px-[21px] py-[12px] rounded-lg transition-all duration-200 hover:bg-[#ff7f00]'>
                        about us
                        </button>
                    </Link>
                    <Link href="/commiunity">
                        <button className='capitalize text-[#ff6f00] border border-[#ff6f00] px-[21px] py-[12px] rounded-lg transition-all duration-200 hover:text-[#ff8f00]'>
                        our community
                        </button>
                    </Link>
                </div>

            </div>
            <div className="flex-1">
                <Image
                    src={aboutImg}
                    alt="About Us"
                    width={804}
                    height={707}
                    className=""
                />
            </div>            
        </div>
    </section>
)
}

export default AboutUs