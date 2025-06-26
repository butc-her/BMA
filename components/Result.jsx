import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import Image from 'next/image';
import junkImage from '@public/shubham-dhage-rPCTklMCMKc-unsplash.jpg';
import secondImg from '@public/yigit-ali-atasoy-6Jdz9qiZfsQ-unsplash.jpg';
import thirdImg from '@public/choong-deng-xiang-GEONQEnR_3A-unsplash.jpg';

const Result = () => {
  return (
    <section className="overflow-hidden py-10">
        <div className="max-w-screen-2xl mx-auto">
            <div className="flex flex-col gap-y-4 lg:gap-8">
                <div className="text-center">
                    <h2 className="capitalize text-2xl lg:text-[2.5rem] mb-4">real lives, real result</h2>
                    <p className="mx-auto lg-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sapiente dignissimos voluptatibus.</p>
                </div>
                <div className="overflow-hidden lg:overflow-visible">
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
                <div className="w-full relative"></div>
                <div className="overflow-hidden px-4 lg:px-0"></div>
            </div>
        </div>
    </section>
  )
}

export default Result