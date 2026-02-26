// src/components/Common/ThreeBackground.tsx
"use client";
import dynamic from "next/dynamic";


const Scene = dynamic(() => import("./ThreeScene"), { ssr: false });

export default function ThreeBackground() {
  return (
    <div className="w-screen h-screen rounded-lg fixed inset-0 z-0 overflow-hidden">
      {/* 2. Render the safely imported client-only scene */}
      <Scene />
    </div>
  );
}