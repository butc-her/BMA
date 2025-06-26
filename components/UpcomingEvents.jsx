import Image from 'next/image';
import Link from 'next/link';
import eventImg from '@public/krzysztof-hepner-o_x11ORH9vQ-unsplash.jpg'; 

const UpcomingEvents = () => {
    return (
    <section className="px-4 sm:px-8 py-8 sm:py-16">
        <div className="max-w-screen2xl mx-auto flex flex-col gap-10 sm:gap-20">
          <div className='text-center'>
            <h2 className='text-3xl xl:text-5xl font-bold mb-4'>Upcoming Events</h2>
            <p className="capitalize xl:text-2xl ">see all our events tailored to help you accelerate faster in your tech jorney</p>
          </div>
          <div className='w-full shadow-sm max-w-full flex flex-col items-center justify-center'>
            <div className="mt-[-50px]">
              <Image src={eventImg} alt="events" className='w-full h-[300px] max-w-full p-8 mt-4 ' />
              <div className='flex flex-col sm:flex-row justify-between gap-4 sm:gap-12'>
                <div className="flex-1">
                  <h3 className='text-3xl sm:text-3xl xl:text-5xl font-semibold mb-2 sm:text-left'>Tech Conference</h3>
                  <p className='text-left'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem impedit non quis voluptatibus sit adipisci nobis eius aliquid cum quos eligendi vitae quasi, similique nemo vero! Optio blanditiis suscipit id!</p>          
                </div>
                <div className="flex flex-col gap-2 flex-1">
                    <div className="flex flex-row gap-6 ">
                        <div className="flex flex-col justify-between">
                            <p className="font-medium text-sm sm:text-[1.25rem] text-left">Mission</p>
                            <p className="font-bold text-1xl sm:text-[3.175rem]">50</p>
                        </div>
                        <div className="flex flex-col justify-between">
                            <p className="font-medium text-sm sm:text-[1.25rem] text-left">Mission</p>
                            <p className="font-bold text-1xl sm:text-[3.175rem]">50</p>
                        </div>
                        <div className="flex flex-col justify-between">
                            <p className="font-medium text-sm sm:text-[1.25rem] text-left">Mission</p>
                            <p className="font-bold text-1xl sm:text-[3.175rem]">50</p>
                        </div>
                    </div>
                  <div className="mb-[-40px] hidden">
                    <Link href="/events" className='text-white bg-[#ff6f00] p-2 rounded-lg hover:bg-[#ff7f00] mt-2 font-semibold absolute sm:right-20'>View All Events</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default UpcomingEvents