import Link from 'next/link'
import Image from 'next/image';
import teamMember1 from '@public/ceo.jpg';
import teamMember2 from '@public/admin.jpg';
import teamMember3 from '@public/founder.jpg';
import { FaXTwitter, FaTelegram, FaLinkedin } from "react-icons/fa6";


const OurTeam = () => {
    const socialItems = [
        { label: <FaXTwitter />, href: "/twitter" },
        { label: <FaTelegram />, href: "/telegram" },
        { label: <FaLinkedin />, href: "/linkedin" },
    ];
    const teamMembers = [
        {
            image: teamMember1,
            name: "John Doe",
            position: "Founder and CEO, CMA"
        },
        {
            image: teamMember2,
            name: "Jane Smith",
            position: "CTO, CMA"
        },
        {
            image: teamMember3,
            name: "Alex Johnson",
            position: "Community Manager"
        }
    ];


  return (
    <div className='p-6'>
        <div className="">
            <h2 className="text-5xl font-bold mb-4 mt-4">Meet Our Team</h2>
            <p className="text-gray-600 mb-8">We are a diverse group of professionals dedicated to making a difference.</p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-stretch gap-6 py-6 px-4 sm:px-8 lg:px-20">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 w-full sm:w-[300px] flex-1 min-h-[450px]">
                  <Image 
                    src={member.image} 
                    alt={`${member.name} picture`} 
                    className="w-full h-[400px] object-cover rounded-md mb-2" 
                  />
                  <div className="flex flex-col items-center gap-1 w-full px-2">
                    <h3 className="text-2xl font-bold text-center">{member.name}</h3>
                    <hr className="border-t-2 border-[#FF6F00] w-1/2" />
                    <p className="text-center text-sm">{member.position}</p>
                    <ul className="flex justify-center items-center gap-4 mt-2">
                      {socialItems.map((item) => (
                        <li
                          key={item.href}
                          className="text-2xl font-bold transition-colors duration-200 hover:text-[#FF6F00]"
                        >
                          <Link 
                            href={item.href} 
                            className="text-[#FF6F00] font-bold hover:underline"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
        </div>
        <div className=""></div>
    </div>
  )
}

export default OurTeam