'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Html, Float } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion-3d';

const projects = [
    { title: 'LoreChain', color: '#ef4444', position: [-2, 0, 0] },
    { title: 'Vaayu', color: '#3b82f6', position: [0, 1, -1] },
    { title: 'Pac-Rupt', color: '#10b981', position: [2, 0, 0] },
];

function ProjectOrb({ project, position }: { project: any; position: [number, number, number] }) {
    const meshRef = useRef<THREE.Mesh>(null);
    const [hovered, setHover] = useState(false);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.01;
            meshRef.current.rotation.y += 0.01;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <motion.mesh
                ref={meshRef as any}
                position={position}
                scale={hovered ? 1.2 : 1}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
                onClick={() => alert(`Clicked ${project.title}`)}
            >
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial color={project.color} wireframe />
                <Html distanceFactor={10}>
                    <div className={`bg-black/50 text-white p-2 rounded backdrop-blur-sm transition-opacity ${hovered ? 'opacity-100' : 'opacity-0'}`}>
                        {project.title}
                    </div>
                </Html>
            </motion.mesh>
        </Float>
    );
}

export default function ProjectOrbs() {
    return (
        <group>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            {projects.map((project, idx) => (
                <ProjectOrb key={idx} project={project} position={project.position as [number, number, number]} />
            ))}
        </group>
    );
}
