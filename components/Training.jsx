import Image from 'next/image';
import imgOne from '@public/krzysztof-hepner-o_x11ORH9vQ-unsplash.jpg';
import imgTwo from '@public/maxim-hopman-fiXLQXAhCfk-unsplash.jpg';
import imgThree from '@public/pierre-borthiry-peiobty-vBCVcWUyvyM-unsplash.jpg';

const Training = () => {
  return (
    <div className='flex justify-center items-center'>
        <div className="flex flex-col">
            <div className="mt-6">
                <h2 className="text-3xl sm:text-3xll md:text-4xl lg:text-5xl font-bold mb-4">We Train you to become a Professional Trader</h2>
                <p className="text-lg text-gray-700 mb-6">See some snippets of wins & happanings in the Masters of Trading League below</p>
            </div>
            <div className="flex gap-4 p-5">
                <div className="flex-1"> 
                    <Image src={imgOne} alt="Activity 1" className="w-[300px] h-64 rounded-lg shadow-lg" />
                </div>
                <div className="flex-1"> 
                    <Image src={imgTwo} alt="Training Image 1" className="w-[300px] h-64 rounded-lg shadow-lg" />
                </div>
                <div className="flex-1"> 
                    <Image src={imgThree} alt="Training Image 1" className="w-[300px] h-64 rounded-lg shadow-lg" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Training