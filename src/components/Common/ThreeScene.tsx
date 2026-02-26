// src/components/Common/ThreeScene.tsx
"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef } from "react";

// animation must run *inside* the Canvas context, so we use a child component
function AnimatedStars() {
  const starsRef = useRef<any>(null);

  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.x += 0.0005;
      starsRef.current.rotation.y += 0.00010;
      starsRef.current.rotation.x -= 0.00015;
      starsRef.current.rotation.y -= 0.0005;
    }
  });

  return <Stars ref={starsRef} />;
}

export default function ThreeScene() {
  return (
    <Canvas>
      <AnimatedStars />
    </Canvas>
  );
}