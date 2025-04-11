"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import { useRouter } from "next/navigation"

export default function Preloader() {
  const [loading, setLoading] = useState(true)
  const [show, setShow] = useState(true)
  const [progress, setProgress] = useState(0)
  const [particlesLoaded, setParticlesLoaded] = useState(false)
  const audioRef = useRef(null)
  const logoControls = useAnimation()
  const router = useRouter()

  useEffect(() => {
    const initEngine = async () => {
      await initParticlesEngine(async (engine) => {
        await loadSlim(engine)
      })
      setParticlesLoaded(true)
    }
    initEngine()
  }, [])

  useEffect(() => {
    if (loading) {
      const startTime = Date.now()
      const duration = 2500
      const interval = setInterval(() => {
        const elapsed = Date.now() - startTime
        const newProgress = Math.min(100, (elapsed / duration) * 100)
        setProgress(newProgress)

        if (newProgress >= 100) {
          clearInterval(interval)
          setTimeout(() => setLoading(false), 500)
        }
      }, 50)

      return () => clearInterval(interval)
    }
  }, [loading])

  useEffect(() => {
    const sequence = async () => {
      await logoControls.start({
        scale: [0.8, 1.1, 1],
        opacity: [0, 0.8, 1],
        rotate: [0, 10, 0],
        transition: { duration: 1, ease: "easeInOut" },
      })

      await logoControls.start({
        y: [0, -5, 0],
        transition: {
          repeat: 0,
          duration: 1.5,
          ease: "easeInOut",
        },
      })
    }

    sequence()
  }, [logoControls])

  useEffect(() => {
    audioRef.current = new Audio("/loading-sound.mp3")
    audioRef.current.volume = 0.2
    audioRef.current.loop = false

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const handlePlayAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((err) => console.log("Audio play failed:", err))
    }
  }

  const particlesOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#888888",
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: true,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  }

  useEffect(() => {
    if (!loading) {
      const timeout = setTimeout(() => {
        setShow(false)
      }, 500)
      return () => clearTimeout(timeout)
    }
  }, [loading, router])

  if (!show) {
    return null
  }

  return (
    <div
      className="fixed w-screen h-screen overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#2a2a2a] z-[9999] flex items-center justify-center"
      onClick={handlePlayAudio}
      onMouseMove={(e) => {
        const particles = document.getElementById("tsparticles")
        if (particles) {
          particles.style.transform = `translate(${e.clientX * 0.01}px, ${e.clientY * 0.01}px)`
        }
      }}
    >
      {particlesLoaded && (
        <div id="tsparticles" className="absolute inset-0 transition-transform duration-1000">
          <Particles id="tsparticles" options={particlesOptions} className="h-full w-full" />
        </div>
      )}

      <AnimatePresence>
        {loading ? (
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative mb-8">
              <motion.div className="relative z-10" animate={logoControls}>
                <svg width="120" height="120" viewBox="0 0 120 120" className="drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
                  <motion.path
                    d="M60 10 L110 40 L110 80 L60 110 L10 80 L10 40 Z"
                    stroke="#ffffff"
                    strokeWidth="3"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: 1,
                      opacity: 1,
                      filter: "drop-shadow(0 0 6px #ffffff)",
                    }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                  <motion.text
                    x="60"
                    y="65"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="28"
                    fontFamily="monospace"
                    fontWeight="bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    style={{ filter: "drop-shadow(0 0 3px #ffffff)" }}
                  >
                    JS
                  </motion.text>
                </svg>
              </motion.div>

              <motion.div
                className="absolute inset-0 -z-10"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: 0, ease: "linear" }}
              >
                <svg width="120" height="120" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="54" fill="none" stroke="#333333" strokeWidth="4" />
                  <motion.circle
                    cx="60"
                    cy="60"
                    r="54"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="339.292"
                    strokeDashoffset={339.292 - (339.292 * progress) / 100}
                    initial={{ strokeDashoffset: 339.292 }}
                    animate={{ strokeDashoffset: 339.292 - (339.292 * progress) / 100 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    style={{ filter: "drop-shadow(0 0 5px rgba(255,255,255,0.5))" }}
                  />
                </svg>
              </motion.div>
            </div>

            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <h1
                className="text-3xl md:text-4xl font-bold mb-2 text-white font-['Orbitron']"
                style={{ textShadow: "0 0 10px rgba(255,255,255,0.4)" }}
              >
                Loading Developer&apos;s World
              </h1>

              <div className="h-8 font-mono text-gray-300 text-sm md:text-base">
                <TypeAnimation
                  sequence={[
                    "Powered by MERN Stack",
                    1000,
                    "MongoDB • Express • React • Node.js",
                    1000,
                    "Building the Future",
                    1000,
                  ]}
                  wrapper="span"
                  speed={60}
                  repeat={0}
                  style={{ display: "inline-block" }}
                />
              </div>
            </motion.div>

            <motion.div
             className="w-64 h-16 bg-[#1a1a1a] rounded-md p-2 overflow-hidden font-mono text-xs border border-gray-700 text-gray-200"
             initial={{ opacity: 0 }}
             animate={{ opacity: 0.8 }}
             transition={{ delay: 1, duration: 0.5 }}
           >
             <TypeAnimation
               sequence={[
                 "> initializing components...",
                 1000,
                 "> connecting to database...",
                 1000,
                 "> loading portfolio data...",
                 1000,
                 "> optimizing experience...",
                 1000,
                 `> progress: ${Math.floor(progress)}%`,
               ]}
               speed={70}
               wrapper="div"
               repeat={0}
             />
           </motion.div>
         </motion.div>
       ) : null}
     </AnimatePresence>
   </div>
 )
}