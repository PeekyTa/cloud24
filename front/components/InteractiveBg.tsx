'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function InteractiveBg() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateSize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  const translateX = useTransform(
    mouseX,
    [0, windowSize.width || 1],
    [-50, 50]
  )
  const translateY = useTransform(
    mouseY,
    [0, windowSize.height || 1],
    [-50, 50]
  )

  const smoothX = useSpring(translateX, { stiffness: 50, damping: 20 })
  const smoothY = useSpring(translateY, { stiffness: 50, damping: 20 })

  return (
    <motion.div
      style={{ x: smoothX, y: smoothY }}
      className="absolute inset-0 z-0 overflow-hidden"
    >
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-amber-900/15 blur-[100px] rounded-full" />
      <div className="absolute top-1/5 left-3/4 w-72 h-72 bg-blue-400/20 blur-[100px] rounded-full" />
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-amber-700/20 blur-[100px] rounded-full" />
      <div className="absolute bottom-2/3 left-1/4 w-72 h-72 bg-blue-700/20 blur-[100px] rounded-full" />
    </motion.div>
  )
}
