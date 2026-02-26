// src/components/Common/ThreeBackground.tsx
"use client";
import dynamic from "next/dynamic";

// 1. Dynamically import the Scene with SSR strictly disabled
const Scene = dynamic(() => import("./ThreeScene"), { ssr: false });

export default function ThreeBackground() {
  return (
    <div className="w-full h-auto rounded-lg overflow-hidden fixed inset-0 -z-1">
      {/* 2. Render the safely imported client-only scene */}
      <Scene />
    </div>
  );
}