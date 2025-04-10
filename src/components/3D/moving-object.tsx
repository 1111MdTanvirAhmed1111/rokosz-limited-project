"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import type * as THREE from "three"

function ColorfulObject() {
  const meshRef = useRef<THREE.Mesh>(null)

  // Animation - move up and down on y-axis
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(clock.getElapsedTime()) * 2
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.005

      // Update shader time uniform if using shader material
      if (meshRef.current.material && "uniforms" in meshRef.current.material) {
        meshRef.current.material.uniforms.time.value = clock.getElapsedTime()
      }
    }
  })

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1, 0.3, 128, 32]} />
      <shaderMaterial
        uniforms={{
          time: { value: 0 },
        }}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          varying vec2 vUv;
          uniform float time;
          
          void main() {
            vec3 color1 = vec3(1.0, 0.0, 0.0); // red
            vec3 color2 = vec3(1.0, 1.0, 0.0); // yellow
            vec3 color3 = vec3(0.0, 1.0, 0.0); // green
            vec3 color4 = vec3(0.0, 0.0, 1.0); // blue
            vec3 color5 = vec3(0.5, 0.0, 0.5); // purple
            
            float t = fract((vUv.x + vUv.y) * 2.0);
            
            vec3 color;
            if (t < 0.2) {
              color = mix(color1, color2, t * 5.0);
            } else if (t < 0.4) {
              color = mix(color2, color3, (t - 0.2) * 5.0);
            } else if (t < 0.6) {
              color = mix(color3, color4, (t - 0.4) * 5.0);
            } else if (t < 0.8) {
              color = mix(color4, color5, (t - 0.6) * 5.0);
            } else {
              color = mix(color5, color1, (t - 0.8) * 5.0);
            }
            
            gl_FragColor = vec4(color, 1.0);
          }
        `}
        onBeforeCompile={(shader) => {
          shader.uniforms.time = { value: 0 }
        }}
      />
    </mesh>
  )
}

export default function Scene() {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <color attach="background" args={["#000000"]} />

        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />

        <ColorfulObject />

        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  )
}
