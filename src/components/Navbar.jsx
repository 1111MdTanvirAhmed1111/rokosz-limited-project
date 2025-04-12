import Image from "next/image"
import Link from "next/link"
import { FaHome, FaInfoCircle, FaServicestack, FaEnvelope } from "react-icons/fa"
import { Poppins, Space_Grotesk, Inter } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
})

const navItems = [
  { name: "Home", href: "/", icon: <FaHome /> },
  { name: "About", href: "/about", icon: <FaInfoCircle /> },
  { name: "Services", href: "/services", icon: <FaServicestack /> },
  { name: "Contact", href: "/contact", icon: <FaEnvelope /> },
]

function Navbar() {
  return (
    <div className="w-full bg-gradient-to-r from-[#0f0f0f] via-[#1a1a1a] to-[#121212] shadow-xl border-b-2 border-white">
      <div className="w-[97%] mx-auto sticky top-0 z-50">
        <div
          className={`flex justify-between items-center px-6 py-2 ${inter.className} animate-slideUp`}
        >
          {/* Logo / Brand */}
          <div className="flex items-center space-x-3">
            <Image src="/logo.png" alt="Logo" width={45} height={45} />
            <span
              className={`text-xl text-white font-semibold tracking-wide ${spaceGrotesk.className}`}
            >
              Rokosz
            </span>
          </div>

          {/* Nav Links */}
          <nav className="flex space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`group flex items-center space-x-2 text-gray-100 hover:text-white transition-all duration-300 ${poppins.className} animate-fadeInStagger`}
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "both" }}
              >
                <span className="text-[1rem] group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </span>
                <span className="relative text-sm font-medium">
                  {item.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-white group-hover:w-full transition-all duration-300"></span>
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar
