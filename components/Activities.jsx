'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import Link from 'next/link';

import Image from 'next/image';
import junkImage from '@public/shubham-dhage-rPCTklMCMKc-unsplash.jpg';
import secondImg from '@public/yigit-ali-atasoy-6Jdz9qiZfsQ-unsplash.jpg';
import thirdImg from '@public/choong-deng-xiang-GEONQEnR_3A-unsplash.jpg';

const Activities = () => {
  return (
    <section className="flex flex-col gap-3 p-4 h-screen justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-4 sm:flex-row sm:justify-center sm:items-center"> 
        <div className="flex flex-col text-left gap-4 flex-1">
          <h2 className="text-3xl md:text-4xl md:font-bold">Some Activities from our Developer Community </h2>
          <Link href="/activities" className="border border-[#ff7f00] w-30 rounded-lg text-[#ff6f00] transition-all duration-200 py-[10px] px-[12px] hover:text-[#ff8f00] mt-[12px]"> 
            Learn More
          </Link>
        </div>
        <div className="flex flex-1">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{type: 'bullets', clickable: true}}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Image src={junkImage} alt="Activity 1" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={secondImg} alt="Activity 2" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={thirdImg} height={2160} alt="Activity 3" className='' />
            </SwiperSlide>
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default Activities;