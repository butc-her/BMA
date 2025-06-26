'use client'

import Link from "next/link"
import Image from 'next/image'
import logo from "../public/CMALogo.png"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { useState } from "react"

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen)
  }

  // You can define the menu items as an array and map over them for both desktop and mobile menus.
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Bootcamps", href: "/bootcamps" },
    { label: "Events", href: "/events" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-[100] bg-gradient-to-r from-[#1c1c1c] to-[#ff6f00] shadow-xl">
      <div className="flex items-center justify-between h-full w-full px-4">
        {/* Logo always at the left */}
        <div className={`${menuOpen ? 'hidden' : 'block'} sm:block`}>
        <Link href="/" className="text-2xl font-bold text-[#1C1C1C]">
          <Image
            src={logo}
            alt="Logo"
            width={100}
            height={100}
            priority
            className="rounded-full"
          />
        </Link>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden sm:flex justify-center items-center mt-0">
          {menuItems.map((item) => (
            <li
              key={item.href}
              className="text-1xl text-white mx-4 transition-colors duration-200 hover:text-[#FF6F00]"
            >
              <Link href={item.href} className="hover:underline hover:decoration-[#FF6F00]">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* Button after menu */}
        <button className="ml-4 px-4 py-2 bg-[#FF6F00] text-white rounded hidden sm:block">
          Join Now
        </button>
        {/* Mobile Menu Icon and Button */}
        <div className="flex items-center sm:hidden">

          <AiOutlineMenu onClick={handleMenuToggle} className="text-2xl text-[#1C1C1C] cursor-pointer" />
        </div>
        {/* Mobile Version Listed Items */}
        {menuOpen && (
          <div className="sm:hidden left-0 top-15 w-[70%] h-screen bg-gradient-to-r from-[#FF6F00] to-[#1c1c1c] ease-in duration-500 flex flex-col justify-start z-50 p-6">
            <AiOutlineClose onClick={handleMenuToggle} className="text-2xl text-white mb-8 cursor-pointer self-end" />
            <ul className="flex flex-col">
              {menuItems.map((item) => (
                <li key={item.href} className="text-2xl text-white mb-6">
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Nav;