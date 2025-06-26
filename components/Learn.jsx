import learnImg from '@public/choong-deng-xiang-EbbqeyHpbto-unsplash.jpg'

const Learn = () => {
  return (
    <div className='h-[50vh] lg::h-[70vh] bg-cover py-12 px-4 lg:p-20 xl:pb-[100px] bg-center' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${learnImg.src})` }}>
        <div className="h-full flex items-end justify-end max-w-screen-2xl mx-auto">
            <div className='flex flex-col text-white'>
                <p className='leading-[1] text-[2.5rem] text-[#fff] font-bold tracking-[0.1em] uppercase mb-4'>Ready to Learn?</p>
                <p className='text-[1.5rem] text-[#fff] font-semibold tracking-[0.05em]'>Join our community and start your journey today!</p>
                <div className="flex text-sm flex-col flex-wrap sm:flex-row gap-2 lg:gap-4 mt-10">
                    <button className='bg-[#ff6f00] text-sm text-[1c1c1c] text-white rounded-lg hover:bg-[#ff7f00] text-[1.2em] p-3'>Register for our bootcamps</button>
                    <button className='border border-[#ff6f00] text-sm text-[1c1c1c] rounded-lg hover:bg-[#ff7f00] text-[1.2em] p-3'>Join our community</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Learn