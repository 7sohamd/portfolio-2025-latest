'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Line, Sphere, Text } from '@react-three/drei';
import * as THREE from 'three';

const skills = [
    { name: 'React', position: [-2, 2, 0] },
    { name: 'Node', position: [2, 2, 0] },
    { name: 'Three.js', position: [0, -2, 0] },
    { name: 'TypeScript', position: [0, 0, 0] },
    { name: 'MongoDB', position: [-2, -2, 0] },
];

export default function SkillConstellation() {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
        }
    });

    const points = skills.map(s => new THREE.Vector3(...(s.position as [number, number, number])));

    return (
        <group ref={groupRef}>
            <ambientLight intensity={0.5} />
            {skills.map((skill, idx) => (
                <group key={idx} position={skill.position as [number, number, number]}>
                    <Sphere args={[0.2, 16, 16]}>
                        <meshStandardMaterial color="#fbbf24" />
                    </Sphere>
                    <Text position={[0, 0.4, 0]} fontSize={0.3} color="white">
                        {skill.name}
                    </Text>
                </group>
            ))}
            <Line points={points} color="white" lineWidth={1} opacity={0.2} transparent />
        </group>
    );
}
