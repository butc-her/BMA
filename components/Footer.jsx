import Link from "next/link";
import { FaXTwitter, FaTelegram, FaLinkedin, FaFacebook,FaInstagram, FaYoutube } from "react-icons/fa6";


const Footer = () => {
    const aboutItems = [
        { label: "About", href: "/about" },
        { label: "Partnership", href: "/partnership" },
        { label: "Blog", href: "/blog" },
        { label: "Privacy", href: "/privacy" },
    ];

    const eventItems = [
        { label: "Events", href: "/events" },
        { label: "Bootcamps", href: "/bootcamps" },
        { label: "Community", href: "/community" },
    ];

    const contactItems = [
    { icon: <FaLinkedin />, label: "LinkedIn", href: "https://www.linkedin.com/company/chainmastersacademy" },
    { icon: <FaFacebook />, label: "Facebook", href: "https://www.facebook.com/share/16sA68zVUK" },
    { icon: <FaTelegram />, label: "Telegram", href: "https://t.me/BlockCMA" },
    { icon: <FaXTwitter />, label: "Twitter", href: "https://www.x.com/BlockCMA" },
    ];
  return (
    <footer className="bg-primary text-white px-4 sm:px-8 lg:px-20 py-10">
        <div className="w-full max-w-screen-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* About */}
        <div className="w-full text-left">
            <p className="text-xl sm:text-2xl lg:text-[2.5rem] font-semibold font-clash mb-4 text-black">About</p>
            <ul className="space-y-2 text-black font-semibold">
            {aboutItems.map((item) => (
                <li key={item.href}>
                <Link href={item.href} className="hover:underline">{item.label}</Link>
                </li>
            ))}
            </ul>
        </div>

        {/* Events */}
        <div className="w-full text-left">
            <p className="text-xl sm:text-2xl lg:text-[2.5rem] font-semibold font-clash mb-4 text-black">Events</p>
            <ul className="space-y-2 text-black font-semibold">
            {eventItems.map((item) => (
                <li key={item.href} className="mb-6">
                <Link href={item.href} className="hover:underline">{item.label}</Link>
                </li>
            ))}
            </ul>
        </div>

        {/* Contact */}
        <div className="w-full text-left">
            <p className="text-xl sm:text-2xl lg:text-[2.5rem] font-semibold font-clash mb-4 text-black">Contact</p>
            <ul className="space-y-2 text-black font-semibold">
                {contactItems.map((item) => (
                    <li key={item.href} className="mb-4 flex items-center gap-2">
                        <Link href={item.href} className="flex items-center gap-2 hover:underline">
                        <span className="text-xl">{item.icon}</span>
                        <span>{item.label}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>

        {/* Stay in the loop */}
        <div className="w-full text-black  text-left">
            <h2 className="text-xl sm:text-2xl lg:text-[2.5rem] font-semibold font-clash mb-4">Stay in the loop</h2>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
            <form className="flex flex-col items-center gap-4">
            <input 
                type="email" 
                placeholder="Enter your email" 
                className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6f00] w-full"
            />
            <button 
                type="submit" 
                className="w-full bg-[#ff6f00] text-white px-4 py-2 rounded-lg hover:bg-[#ff7f00] transition-colors duration-200"
            >
                Subscribe
            </button>
            </form>
        </div>
        </div>

        <div className="text-center lg:mt-12 font-lato bg-[#ff6f00] text-white p-4 mt-8 w-full">
            <p>Copyright &copy;	&#169; 2025 ChainMaster Academy - CMA&copy;	&#169;. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer