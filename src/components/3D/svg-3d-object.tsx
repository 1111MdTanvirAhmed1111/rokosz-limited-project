"use client"

import { useRef, useLayoutEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, Extrude, Center } from "@react-three/drei"
import type * as THREE from "three"
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader"

function SVGObject() {
  const groupRef = useRef<THREE.Group>(null)
  const meshRef = useRef<THREE.Mesh>(null)

  // Star shape SVG path
  const starPath = "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"

  // Animation - move randomly on all axes
  useFrame(({ clock }) => {
    if (groupRef.current) {
      const t = clock.getElapsedTime()

      // Create complex motion using multiple sine/cosine waves with different frequencies
      // This creates a random-looking but smooth motion
      groupRef.current.position.x = Math.sin(t * 0.7) * 2 + Math.cos(t * 1.3) * 1
      groupRef.current.position.y = Math.cos(t * 0.5) * 2 + Math.sin(t * 1.5) * 1.3
      groupRef.current.position.z = Math.sin(t * 0.3) * 2 + Math.cos(t * 0.9) * 1.5

      // Add some rotation for more dynamic movement
      groupRef.current.rotation.x += 0.003
      groupRef.current.rotation.y += 0.005
      groupRef.current.rotation.z += 0.004
    }
  })

  // Parse SVG path
  const shapes = useSVGShape(starPath)

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Use Center component to ensure the object is centered at its origin */}
      <Center>
        <Extrude
          ref={meshRef}
          args={[shapes, { depth: 0.4, bevelEnabled: true, bevelSize: 0.1, bevelThickness: 0.1 }]}
          scale={0.3} // Scale down to make sure it's visible
        >
          <meshPhongMaterial color="#ff00ff" emissive="#440044" specular="#ffffff" shininess={100} />
        </Extrude>
      </Center>
    </group>
  )
}

// Custom hook to convert SVG path to THREE.Shape
function useSVGShape(svgPath: string) {
  // Create a temporary SVG element with centered viewBox
  const svgMarkup = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="${svgPath}" />
    </svg>
  `

  // Create a DOM parser to parse the SVG
  const parser = new DOMParser()
  const svgDoc = parser.parseFromString(svgMarkup, "image/svg+xml")
  const svgElement = svgDoc.querySelector("svg")

  // Get the path element
  const pathElement = svgElement?.querySelector("path")

  if (!pathElement) {
    return []
  }

  // Create an SVG loader
  const loader = new SVGLoader()

  // Get the path data
  const pathData = pathElement.getAttribute("d") || ""

  // Parse the path data
  const paths = loader.parse(`<svg><path d="${pathData}"/></svg>`).paths

  // Convert paths to shapes
  const shapes = []
  for (let i = 0; i < paths.length; i++) {
    const path = paths[i]
    const shapes2 = path.toShapes(true)
    shapes.push(...shapes2)
  }

  return shapes
}

// Camera setup component to ensure proper positioning
function CameraSetup() {
  const { camera } = useThree()

  useLayoutEffect(() => {
    // Position camera to look at the center
    camera.position.set(0, 0, 15) // Move camera back a bit to see the full range of motion
    camera.lookAt(0, 0, 0)
  }, [camera])

  return null
}

export default function Scene() {
  return (
    <div className="w-full h-screen">
      <Canvas>
        <color attach="background" args={["#000000"]} />
        <CameraSetup />

        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />

        <SVGObject />

        <OrbitControls
          enableZoom={true}
          enablePan={true}
          target={[0, 0, 0]} // Set orbit controls to target the center
        />
      </Canvas>
    </div>
  )
}
