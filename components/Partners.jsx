import Image from 'next/image';

const Partners = () => {
  return (
    <div className="">
        <div className="">
            <div className="">
                <h2 className="text-3xl sm:text-3xl xl:text-5xl text-left sm:text-left xl:text-center font-bold mb-4">Our Partners</h2>
                <p className="text-2xl sm:text-2xl xl:text-2xl text-gray-600 mb-8 text-left sm:text-left xl:text-center">We collaborate with leading organizations to drive innovation and excellence.</p>
                <button className="bg-[#ff6f00] hover:bg-[#ff7f00] text-white px-4 py-2 rounded transition duration-300">
                Partner with us
                </button>
            </div>
            <div className="">
                <Image
                    src="/partners.png"
                    alt="Partners Image"
                    width={50}
                    height={30}
                    className="rounded-lg shadow-lg mb-6"
                />
            </div>
        </div>
    </div>
  )
}

export default Partners