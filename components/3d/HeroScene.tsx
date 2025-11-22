'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, Text3D, Center } from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import * as THREE from 'three';

function HeroContent() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
        }
    });

    return (
        <group>
            <Float speed={2} rotationIntensity={1} floatIntensity={2}>
                <mesh ref={meshRef}>
                    <torusKnotGeometry args={[1, 0.3, 100, 16]} />
                    <meshStandardMaterial color="#b026ff" wireframe />
                </mesh>
            </Float>
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
        </group>
    );
}

export default function HeroScene() {
    return (
        <div className="h-screen w-full absolute top-0 left-0 -z-10 bg-black">
            <Canvas camera={{ position: [0, 0, 5] }}>
                <HeroContent />
            </Canvas>
        </div>
    );
}
