import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Box, Sphere, Cylinder } from '@react-three/drei'
import * as THREE from 'three'

const RobotModel = () => {
  const robotRef = useRef()
  const headRef = useRef()
  const leftArmRef = useRef()
  const rightArmRef = useRef()

  useFrame((state) => {
    if (robotRef.current) {
      robotRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
    if (headRef.current) {
      headRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.2
    }
    if (leftArmRef.current) {
      leftArmRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.6) * 0.3
    }
    if (rightArmRef.current) {
      rightArmRef.current.rotation.z = -Math.sin(state.clock.elapsedTime * 0.6) * 0.3
    }
  })

  const cyberMaterial = new THREE.MeshPhongMaterial({
    color: '#00f5ff',
    emissive: '#001a1a',
    shininess: 100,
    transparent: true,
    opacity: 0.8
  })

  const accentMaterial = new THREE.MeshPhongMaterial({
    color: '#8a2be2',
    emissive: '#1a001a',
    shininess: 100,
    transparent: true,
    opacity: 0.9
  })

  const eyeMaterial = new THREE.MeshPhongMaterial({
    color: '#ff1493',
    emissive: '#ff1493',
    shininess: 100
  })

  return (
    <group ref={robotRef} position={[2, -1, 0]} scale={[0.8, 0.8, 0.8]}>
      {/* Main Body */}
      <Box args={[1.5, 2, 0.8]} position={[0, 0, 0]} material={cyberMaterial}>
        <meshPhongMaterial attach="material" color="#00f5ff" emissive="#001a1a" shininess={100} transparent opacity={0.8} />
      </Box>

      {/* Chest Panel */}
      <Box args={[1.2, 1.5, 0.1]} position={[0, 0.2, 0.45]} material={accentMaterial}>
        <meshPhongMaterial attach="material" color="#8a2be2" emissive="#1a001a" shininess={100} />
      </Box>

      {/* Head */}
      <group ref={headRef} position={[0, 1.5, 0]}>
        <Box args={[1, 1, 1]} material={cyberMaterial}>
          <meshPhongMaterial attach="material" color="#00f5ff" emissive="#001a1a" shininess={100} transparent opacity={0.8} />
        </Box>
        
        {/* Eyes */}
        <Sphere args={[0.15]} position={[-0.25, 0.1, 0.5]} material={eyeMaterial}>
          <meshPhongMaterial attach="material" color="#ff1493" emissive="#ff1493" shininess={100} />
        </Sphere>
        <Sphere args={[0.15]} position={[0.25, 0.1, 0.5]} material={eyeMaterial}>
          <meshPhongMaterial attach="material" color="#ff1493" emissive="#ff1493" shininess={100} />
        </Sphere>

        {/* Antenna */}
        <Cylinder args={[0.05, 0.05, 0.5]} position={[0, 0.75, 0]} material={accentMaterial}>
          <meshPhongMaterial attach="material" color="#39ff14" emissive="#001a00" shininess={100} />
        </Cylinder>
        <Sphere args={[0.1]} position={[0, 1, 0]}>
          <meshPhongMaterial attach="material" color="#39ff14" emissive="#39ff14" shininess={100} />
        </Sphere>
      </group>

      {/* Left Arm */}
      <group ref={leftArmRef} position={[-1.2, 0.5, 0]}>
        <Cylinder args={[0.2, 0.2, 1.5]} rotation={[0, 0, Math.PI / 2]} material={cyberMaterial}>
          <meshPhongMaterial attach="material" color="#00f5ff" emissive="#001a1a" shininess={100} transparent opacity={0.8} />
        </Cylinder>
        {/* Left Hand */}
        <Sphere args={[0.3]} position={[-0.75, 0, 0]} material={accentMaterial}>
          <meshPhongMaterial attach="material" color="#8a2be2" emissive="#1a001a" shininess={100} />
        </Sphere>
      </group>

      {/* Right Arm */}
      <group ref={rightArmRef} position={[1.2, 0.5, 0]}>
        <Cylinder args={[0.2, 0.2, 1.5]} rotation={[0, 0, Math.PI / 2]} material={cyberMaterial}>
          <meshPhongMaterial attach="material" color="#00f5ff" emissive="#001a1a" shininess={100} transparent opacity={0.8} />
        </Cylinder>
        {/* Right Hand */}
        <Sphere args={[0.3]} position={[0.75, 0, 0]} material={accentMaterial}>
          <meshPhongMaterial attach="material" color="#8a2be2" emissive="#1a001a" shininess={100} />
        </Sphere>
      </group>

      {/* Left Leg */}
      <Cylinder args={[0.25, 0.25, 1.8]} position={[-0.4, -1.9, 0]} material={cyberMaterial}>
        <meshPhongMaterial attach="material" color="#00f5ff" emissive="#001a1a" shininess={100} transparent opacity={0.8} />
      </Cylinder>

      {/* Right Leg */}
      <Cylinder args={[0.25, 0.25, 1.8]} position={[0.4, -1.9, 0]} material={cyberMaterial}>
        <meshPhongMaterial attach="material" color="#00f5ff" emissive="#001a1a" shininess={100} transparent opacity={0.8} />
      </Cylinder>

      {/* Left Foot */}
      <Box args={[0.6, 0.2, 0.8]} position={[-0.4, -2.9, 0.2]} material={accentMaterial}>
        <meshPhongMaterial attach="material" color="#8a2be2" emissive="#1a001a" shininess={100} />
      </Box>

      {/* Right Foot */}
      <Box args={[0.6, 0.2, 0.8]} position={[0.4, -2.9, 0.2]} material={accentMaterial}>
        <meshPhongMaterial attach="material" color="#8a2be2" emissive="#1a001a" shininess={100} />
      </Box>

      {/* Decorative Elements */}
      <Sphere args={[0.1]} position={[0, 0.8, 0.45]}>
        <meshPhongMaterial attach="material" color="#39ff14" emissive="#39ff14" shininess={100} />
      </Sphere>
      <Sphere args={[0.08]} position={[-0.3, 0.5, 0.45]}>
        <meshPhongMaterial attach="material" color="#ffff00" emissive="#ffff00" shininess={100} />
      </Sphere>
      <Sphere args={[0.08]} position={[0.3, 0.5, 0.45]}>
        <meshPhongMaterial attach="material" color="#ffff00" emissive="#ffff00" shininess={100} />
      </Sphere>
    </group>
  )
}

export default RobotModel
