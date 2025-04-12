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
            <svg height="34.66956154730507" width="369.96969696969694" style="width: 369.97px; height: 34.6696px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%) scale(1); z-index: 0; cursor: pointer; overflow: visible;"><defs id="SvgjsDefs1001"><linearGradient id="SvgjsLinearGradient1011"><stop id="SvgjsStop1012" stop-color="#905e26" offset="0"></stop><stop id="SvgjsStop1013" stop-color="#f5ec9b" offset="0.5"></stop><stop id="SvgjsStop1014" stop-color="#905e26" offset="1"></stop></linearGradient><linearGradient id="SvgjsLinearGradient1015"><stop id="SvgjsStop1016" stop-color="#905e26" offset="0"></stop><stop id="SvgjsStop1017" stop-color="#f5ec9b" offset="0.5"></stop><stop id="SvgjsStop1018" stop-color="#905e26" offset="1"></stop></linearGradient></defs><g id="SvgjsG1007" featurekey="v37d4h-0" transform="matrix(0.2664839348256434,0,0,0.2664839348256434,-10.392873458200093,-7.72803410994366)" fill="url(#SvgjsLinearGradient1011)"><g xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M130.6,61.8c1.8,1.1,4.4,3.8,4.4,9.5c0,4.7-5.4,7.2-10.3,8.5   c-9.9,1.1-16.7,3.5-16.7,6.3c0,3.9,13.2,7,29.5,7s29.5-3.1,29.5-7c0-2.8-6.9-5.2-16.8-6.3c-5.3-1.3-11.3-3.8-11.2-8.5   c0.1-5.8,2.9-8.4,4.6-9.5C149.7,59.1,154,53,154,46c0-9.4-7.6-17-17-17c-9.4,0-17,7.6-17,17C120,53.1,124.4,59.3,130.6,61.8z    M124.6,40.7c1.2-3.2,3.8-5.7,6.9-7c0.8-0.3,1.6,0.1,2,0.8c0.3,0.8-0.1,1.6-0.8,2c-2.4,1-4.3,2.9-5.3,5.3c-0.3,0.8-1.2,1.2-1.9,0.8   C124.7,42.4,124.3,41.5,124.6,40.7z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M132.3,74.2c0.2-0.4,0.4-0.7,0.5-1.1C100.4,73.7,75,80.1,75,88   c0,8.3,28.2,15,63,15c34.8,0,63-6.7,63-15c0-8-26.4-14.6-59.7-15c0.2,0.4,0.3,0.7,0.6,1.1c24.2,0.5,43.2,5.3,43.2,11.2   c0,6.2-21.1,11.2-47.1,11.2c-26,0-47.1-5-47.1-11.2C90.9,79.6,109,74.8,132.3,74.2z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M238,90.5c0-12.8-43.1-23.2-96.9-23.5c-0.1,0.4-0.1,0.8-0.1,1.2   c43.3,0.3,78,8.7,78,19c0,10.5-36,19.1-80.5,19.1S58,97.8,58,87.3c0-10.1,33.2-18.4,75.1-19c0-0.4-0.1-0.8-0.1-1.3   C80.6,67.7,39,78,39,90.5c0,12.6,42.3,23,95.3,23.5c0.5,0.8,0.7,1.8,0.7,2.8c0,5.7-2.6,8.3-4.4,9.5c-6.2,2.5-10.6,8.6-10.6,15.8   c0,9.4,7.6,17,17,17s17-7.6,17-17c0-7-4.3-13.1-10.4-15.7c-1.7-1.1-4.5-3.7-4.6-9.5c0-1.1,0.3-2,0.8-2.9   C194.2,113.8,238,103.4,238,90.5z M133.5,152.8c-0.3,0.8-1.2,1.1-2,0.8c-3.2-1.3-5.7-3.8-6.9-7c-0.3-0.8,0.1-1.6,0.8-1.9   c0.8-0.3,1.6,0.1,1.9,0.8c0.9,2.4,2.9,4.4,5.3,5.3C133.5,151.2,133.8,152.1,133.5,152.8z"></path></g></g><g id="SvgjsG1008" featurekey="UxBHKT-0" transform="matrix(1.9984500994086511,0,0,1.9984500994086511,70.32207656185312,-7.2328392305635045)" fill="url(#SvgjsLinearGradient1015)"><path d="M6.62 11.87 q-0.86 0.21 -1.58 0.99 t-0.72 2.28 l0 4.86 l-2.98 0 l0 -11 l2.98 0 l0 1.46 q0.74 -0.98 1.81 -1.33 t1.95 -0.33 l0 2.92 q-0.6 -0.06 -1.46 0.15 z M12.07 19.49 q-1.37 -0.77 -2.17 -2.09 t-0.8 -2.88 q0 -1.54 0.8 -2.86 t2.17 -2.09 t2.99 -0.77 t3 0.77 t2.19 2.09 t0.81 2.86 q0 1.56 -0.81 2.88 t-2.19 2.09 t-3 0.77 t-2.99 -0.77 z M13.54 11.83 q-0.7 0.41 -1.1 1.12 t-0.4 1.57 q0 0.9 0.39 1.61 t1.08 1.12 t1.55 0.41 q0.84 0 1.53 -0.41 t1.09 -1.13 t0.4 -1.6 q0 -0.86 -0.4 -1.57 t-1.09 -1.12 t-1.53 -0.41 q-0.82 0 -1.52 0.41 z M26.520000000000003 4.880000000000001 l0 8.8 l3.74 -4.62 l3.66 0 l-4.42 5.12 l4.6 5.82 l-3.62 0 l-2.88 -3.6 l-1.08 1.24 l0 2.36 l-3 0 l0 -15.12 l3 0 z M37.91 19.49 q-1.37 -0.77 -2.17 -2.09 t-0.8 -2.88 q0 -1.54 0.8 -2.86 t2.17 -2.09 t2.99 -0.77 t3 0.77 t2.19 2.09 t0.81 2.86 q0 1.56 -0.81 2.88 t-2.19 2.09 t-3 0.77 t-2.99 -0.77 z M39.379999999999995 11.83 q-0.7 0.41 -1.1 1.12 t-0.4 1.57 q0 0.9 0.39 1.61 t1.08 1.12 t1.55 0.41 q0.84 0 1.53 -0.41 t1.09 -1.13 t0.4 -1.6 q0 -0.86 -0.4 -1.57 t-1.09 -1.12 t-1.53 -0.41 q-0.82 0 -1.52 0.41 z M48.72 18.54 l1.56 -2.08 q0.72 0.5 1.68 0.84 t1.88 0.34 q0.68 0 1.13 -0.28 t0.45 -0.7 t-0.51 -0.59 t-0.99 -0.24 t-0.62 -0.09 q-1.2 -0.2 -2.07 -0.48 t-1.58 -1 t-0.71 -1.98 q0 -2.08 1.51 -2.78 t3.03 -0.7 q1.3 0 2.4 0.38 t2.18 1.2 l-1.56 2.04 q-0.78 -0.46 -1.54 -0.74 t-1.58 -0.28 q-0.5 0 -0.97 0.22 t-0.47 0.6 q0 0.48 0.65 0.68 t1.43 0.3 q1.4 0.24 2.24 0.5 t1.49 0.97 t0.65 2.01 q0 1.72 -1.18 2.65 t-3.34 0.93 q-3 0 -5.16 -1.72 z M60.12 11.62 l0 -2.58 l10.46 0 l-6 8.36 l5.38 0 l0 2.6 l-10.66 0 l5.98 -8.38 l-5.16 0 z M78.12 4.880000000000001 l3 0 l0 15.12 l-3 0 l0 -15.12 z M86.78 7.369999999999999 q-0.48 0.47 -1.16 0.47 q-0.7 0 -1.19 -0.47 t-0.49 -1.15 q0 -0.66 0.49 -1.13 t1.19 -0.47 q0.68 0 1.16 0.47 t0.48 1.13 q0 0.68 -0.48 1.15 z M84.11999999999999 9.02 l3 0 l0 10.98 l-3 0 l0 -10.98 z M106.48999999999998 10.04 q1.13 1.24 1.13 3.46 l0 6.5 l-3.02 0 l0 -6.5 q0 -1.18 -0.59 -1.7 t-1.55 -0.52 q-0.8 0 -1.44 0.6 t-0.66 2 l0 6.12 l-3.02 0 l0 -6.5 q0 -1.18 -0.59 -1.7 t-1.53 -0.52 q-0.86 0 -1.49 0.64 t-0.63 2.26 l-0.02 5.82 l-2.98 0 l0 -11 l2.98 0 l0 1 q0.58 -0.52 1.4 -0.86 t1.5 -0.34 q2.32 0 3.54 1.5 q0.62 -0.7 1.54 -1.1 t2 -0.4 q2.3 0 3.43 1.24 z M113.51999999999998 7.369999999999999 q-0.48 0.47 -1.16 0.47 q-0.7 0 -1.19 -0.47 t-0.49 -1.15 q0 -0.66 0.49 -1.13 t1.19 -0.47 q0.68 0 1.16 0.47 t0.48 1.13 q0 0.68 -0.48 1.15 z M110.85999999999999 9.02 l3 0 l0 10.98 l-3 0 l0 -10.98 z M120.51999999999998 16.08 q0 0.7 0.24 1.17 t1.12 0.47 q0.4 0 0.76 -0.04 l0 2.52 q-0.72 0.08 -1.34 0.08 q-1.28 0 -2.07 -0.21 t-1.23 -0.81 t-0.44 -1.72 l0 -6.1 l-1.34 0 l0 -2.62 l1.34 0 l0 -2.94 l2.96 0 l0 2.94 l2.2 0 l0 2.62 l-2.2 0 l0 4.64 z M127.82999999999998 19.74 q-1.37 -0.54 -2.35 -1.83 t-0.98 -3.37 t0.99 -3.36 t2.37 -1.82 t2.62 -0.54 q1.44 0 2.74 0.64 t2.13 1.88 t0.87 2.94 q0 0.52 -0.02 0.9 t-0.04 0.48 l-8.68 0 q0.24 1.16 1.2 1.58 t1.8 0.42 q1.08 0 1.72 -0.39 t1.1 -0.89 l2.32 1.34 q-1.88 2.56 -5.14 2.56 q-1.28 0 -2.65 -0.54 z M128.44 12.05 q-0.78 0.61 -0.88 1.49 l5.5 0 q-0.06 -0.52 -0.4 -1 t-0.91 -0.79 t-1.29 -0.31 q-1.24 0 -2.02 0.61 z M146.98 18.9 q-0.38 0.52 -1.31 0.93 t-2.03 0.41 q-1.7 0 -2.95 -0.76 t-1.91 -2.07 t-0.66 -2.91 t0.66 -2.91 t1.91 -2.07 t2.95 -0.76 q1.14 0 2.01 0.39 t1.33 0.99 l0 -5.26 l2.96 0 l0 15.12 l-2.96 0 l0 -1.1 z M146.28 12.25 q-0.82 -0.87 -2.2 -0.87 q-1.4 0 -2.21 0.87 t-0.81 2.25 q0 1.34 0.83 2.22 t2.19 0.88 q1.4 0 2.21 -0.83 t0.81 -2.27 q0 -1.38 -0.82 -2.25 z"></path></g></svg>
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
