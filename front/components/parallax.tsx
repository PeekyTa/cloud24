"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function Parallax() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Map mouse values to movement for layers
  const x1 = useTransform(mouseX, [0, window.innerWidth], [-50, 50]);
  const y1 = useTransform(mouseY, [0, window.innerHeight], [-50, 50]);

  const x2 = useTransform(mouseX, [0, window.innerWidth], [50, -50]);
  const y2 = useTransform(mouseY, [0, window.innerHeight], [50, -50]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background layer */}
      <motion.div
        style={{ x: x1, y: y1 }}
        className="absolute top-0 left-0 w-full h-full bg-blue-400"
      />
      {/* Foreground layer */}
      <motion.div
        style={{ x: x2, y: y2 }}
        className="absolute top-0 left-0 w-full h-full bg-red-400 mix-blend-multiply"
      />
    </div>
  );
}
