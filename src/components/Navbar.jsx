"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaServicestack, FaEnvelope } from "react-icons/fa"
import { Poppins, Space_Grotesk, Inter } from "next/font/google"

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"], display: "swap" })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["500", "600"], display: "swap" })
const inter = Inter({ subsets: ["latin"], weight: ["400", "500"], display: "swap" })

const navItems = [
  { name: "Home", href: "/", icon: <FaHome /> },
  { name: "About", href: "/about", icon: <FaInfoCircle /> },
  { name: "Services", href: "/services", icon: <FaServicestack /> },
  { name: "Contact", href: "/contact", icon: <FaEnvelope /> },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className="w-full bg-gradient-to-r from-[#0f0f0f] via-[#1a1a1a] to-[#121212] shadow-xl border-b-2 border-white z-50">
      <div className="w-[97%] mx-auto sticky top-0 z-50">
        <div className={`flex justify-between items-center px-6 py-2 ${inter.className} animate-slideUp`}>
          {/* Logo / Brand */}
          <div className="flex items-center space-x-3">
            <Image src="/logo.png" alt="Logo" width={45} height={45} />
            <span className={`text-xl text-white font-semibold tracking-wide ${spaceGrotesk.className}`}>
              Rokosz
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`group flex items-center space-x-2 text-gray-100 hover:text-white transition-all duration-300 ${poppins.className} animate-fadeInStagger`}
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "both" }}
              >
                <span className="text-[1rem] group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                <span className="relative text-sm font-medium">
                  {item.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-white group-hover:w-full transition-all duration-300"></span>
                </span>
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle Button */}
          <button onClick={toggleMenu} className="md:hidden text-white text-2xl focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Slide Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-[#1a1a1a] shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <div className="flex flex-col p-6 space-y-6 mt-16">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`flex items-center space-x-3 text-white text-lg hover:text-gray-300 transition-all duration-200 ${poppins.className}`}
                onClick={() => setIsOpen(false)}
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Backdrop when menu is open */}
        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          />
        )}
      </div>
    </div>
  )
}

export default Navbar
