// src/components/Common/ThreeScene.tsx
"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef } from "react";

export default function ThreeScene() {
  const starsRef = useRef<any>(null);

  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.x += 0.0005;
      starsRef.current.rotation.y += 0.00010;
      starsRef.current.rotation.x -= 0.00015;
      starsRef.current.rotation.y -= 0.0005;
    }
  });

  return (
    <Canvas>
      <Stars ref={starsRef} />
    </Canvas>
  );
}