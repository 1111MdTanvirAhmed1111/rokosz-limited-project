"use client"

import { useRef, useLayoutEffect, useState, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, Extrude, Center } from "@react-three/drei"
import type * as THREE from "three"
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader"

// SVG file content - in a real app, this would be loaded from an external file
const svgContent = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="#FF00FF"/>
</svg>
`

// Create a Blob URL from the SVG content
const svgBlob = new Blob([svgContent], { type: "image/svg+xml" })
const svgUrl = URL.createObjectURL(svgBlob)

function SVGObject() {
  const groupRef = useRef<THREE.Group>(null)
  const [shapes, setShapes] = useState<THREE.Shape[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Load and parse the SVG file
  useEffect(() => {
    const loader = new SVGLoader()

    loader.load(
      svgUrl,
      (data) => {
        const extractedShapes: THREE.Shape[] = []

        data.paths.forEach((path) => {
          const shapes = path.toShapes(true)
          extractedShapes.push(...shapes)
        })

        setShapes(extractedShapes)
        setIsLoading(false)
      },
      undefined,
      (error) => {
        console.error("Error loading SVG:", error)
        setIsLoading(false)
      },
    )

    // Clean up the Blob URL when component unmounts
    return () => URL.revokeObjectURL(svgUrl)
  }, [])

  // Animation - move randomly on all axes
  useFrame(({ clock }) => {
    if (groupRef.current) {
      const t = clock.getElapsedTime()

      // Create complex motion using multiple sine/cosine waves with different frequencies
      groupRef.current.position.x = Math.sin(t * 0.7) * 2 + Math.cos(t * 1.3) * 1
      groupRef.current.position.y = Math.cos(t * 0.5) * 2 + Math.sin(t * 1.5) * 1.3
      groupRef.current.position.z = Math.sin(t * 0.3) * 2 + Math.cos(t * 0.9) * 1.5

      // Add some rotation for more dynamic movement
      groupRef.current.rotation.x += 0.003
      groupRef.current.rotation.y += 0.005
      groupRef.current.rotation.z += 0.004
    }
  })

  if (isLoading || shapes.length === 0) {
    return null
  }

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <Center>
        <Extrude args={[shapes, { depth: 0.4, bevelEnabled: true, bevelSize: 0.1, bevelThickness: 0.1 }]} scale={0.3}>
          <meshPhongMaterial color="#ff00ff" emissive="#440044" specular="#ffffff" shininess={100} />
        </Extrude>
      </Center>
    </group>
  )
}

// Camera setup component
function CameraSetup() {
  const { camera } = useThree()

  useLayoutEffect(() => {
    camera.position.set(0, 0, 15)
    camera.lookAt(0, 0, 0)
  }, [camera])

  return null
}

// Main component with fixed width
export default function SVG3DComponent() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-[600px] h-[400px] bg-white rounded-lg shadow-lg overflow-hidden">
        <Canvas>
          <color attach="background" args={["#000000"]} />
          <CameraSetup />

          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />

          <SVGObject />

          <OrbitControls enableZoom={true} enablePan={true} target={[0, 0, 0]} />
        </Canvas>
      </div>
    </div>
  )
}
