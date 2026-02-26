"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";

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

export default function ThreeBackground() {
  const [isMounted, setIsMounted] = useState(false);

  // This ensures the component ONLY renders on the browser, never the server
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Vercel will see this during build and quickly move on
  }

  return (
    <div className="w-full h-auto rounded-lg overflow-hidden fixed inset-0 -z-1">
      <Canvas>
        <AnimatedStars />
      </Canvas>
    </div>
  );
}