import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import Image from 'next/image'
import profileImg from '@public/testimonial4.webp'
import junkImage from '@public/shubham-dhage-rPCTklMCMKc-unsplash.jpg';
import secondImg from '@public/yigit-ali-atasoy-6Jdz9qiZfsQ-unsplash.jpg';
import thirdImg from '@public/choong-deng-xiang-GEONQEnR_3A-unsplash.jpg';


const Alumini = () => {
  return (
    <section className="px-4 py-12 -ml-6">
        <div className='md:max-w-3xl md:mx-auto md:px-0 relative'>
            <div className="mx-4 mb-4">
                <h2 className="font-bold text-2xl mb-2 flex flex-col capitalize">see what our alumini from cairo bootcamps 1.0 are saying</h2>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-end px-2 pointer-events-none">
                <button className="pointer-events-auto">next</button>
            </div>
        </div>
    </section>
  )
}

export default Alumini