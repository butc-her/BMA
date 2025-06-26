import Image from 'next/image'
import cairoImg from '@public/gidaxstark.webp'


const Registansts = () => {
  return (
    <section>
        <div className="bg-slate-300 w-full flex justify-evenly items-center py-16 flex-col md:flex-row">
            <div className="text-center">
                <div className="text-2xl md:text:5xl">0</div>
                <div className="text-lg">Registrants</div>
            </div>
            <div className="text-gray-400 hidden md:block">|</div>
            <div className="text-gray-400 hidden md:block">____</div>
            <div className="p-4">
                <div className="flex justify-center items-center gap-3 text-xl font-bold">
                    <div className="flex items-center">
                        <span className="text-center">0</span>
                        <span className="ml-1">Days</span>
                    </div>
                    <div className="flex items-center">
                        <span className="text-center">00
                            <span className="ml-1">Hours</span>
                        </span>
                    </div>
                    <div className="flex items-center">
                        <span className="text-center">00</span>
                        <span className="ml-1">Min</span>
                    </div>
                    <div className="flex items-center">
                        <span className="text-center">00</span>
                        <span className="ml-1">Sec</span>
                    </div>
                </div>
                <h2 className="text-center mt-4">until class starts</h2>
            </div>
            <div className="text-gray-400 hidden md:block">|</div>
            <div className="text-gray-400 hidden md:block">____</div>
        </div>
        <div className="bg-white text-black flex items-center justify-between p-8 lg:p-12 flex-col lg:flex-row gap-12 font-[400]">
            <div className="flex-1">
                <h2 className="text-2xl font-bold mb-6">Bootcamp Overview</h2>
                <div className="text-sm md:text-xl text-justify">
                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum assumenda possimus enim, harum temporibus deserunt veritatis. Non, doloremque aliquid dicta amet magnam accusantium distinctio? Assumenda quod veritatis tenetur fuga mollitia!</p>
                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos animi temporibus cupiditate fugiat nemo? Maxime molestias aliquam consectetur? Aperiam laboriosam odio fugit nesciunt harum quidem animi aliquam explicabo cupiditate similique!</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat reiciendis odit fuga commodi, numquam dicta consequatur quaerat. Ipsum labore voluptate sequi laborum? Sunt, dolor nisi recusandae neque ipsum est perspiciatis.</p>
                </div>`
            </div>
            <div className="flex-shrink-0 flex-1 bg-black">
                <Image src={cairoImg} alt='' />
            </div>
        </div>
    </section>
  )
}

export default Registansts