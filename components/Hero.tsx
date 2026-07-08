"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-black text-white pt-20 pb-10">
      {/* Dynamic abstract background */}
      <div
        className="absolute inset-0 z-0 opacity-40 blur-[100px] transition-transform duration-1000 ease-out"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.4) 0%, rgba(0,0,0,0) 50%)`,
        }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

        {/* Text Content */}
        <div className="flex-1 w-full text-center lg:text-left z-20 mt-10 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 50, rotate: -5 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
            className="inline-block"
          >
            <span className="inline-block py-1 px-3 border-2 border-white/20 rounded-full text-xs sm:text-sm font-bold tracking-widest uppercase mb-6 bg-white/5 backdrop-blur-sm">
              🔥 Drop 001 // Live Now
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-[12vw] sm:text-7xl lg:text-8xl xl:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-6 mix-blend-difference"
          >
            NOT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 italic pr-4">
              SERIOUS.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-md mx-auto lg:mx-0 mb-10 font-mono"
          >
            Breaking rules, setting trends. We don't do boring. Join the cult.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Link
              href="/shop"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold uppercase tracking-wider overflow-hidden rounded-md transition-transform hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Shop Latest</span>
            </Link>
          </motion.div>
        </div>

        {/* Image Grid / Collage */}
        <div className="flex-1 w-full relative h-[50vh] sm:h-[60vh] lg:h-[80vh] min-h-[400px]">
           <motion.div
             initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
             animate={{ opacity: 1, scale: 1, rotate: -3 }}
             transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
             className="absolute top-[10%] right-[20%] w-[50%] h-[60%] z-20 border-4 border-white overflow-hidden shadow-2xl"
           >
             <Image
                src="https://images.unsplash.com/photo-1523398002811-999aa8e9f5b9?q=80&w=800&auto=format&fit=crop"
                alt="Gen Z Style"
                fill
                className="object-cover hover:scale-110 transition-transform duration-700"
             />
           </motion.div>

           <motion.div
             initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
             animate={{ opacity: 1, scale: 1, rotate: 6 }}
             transition={{ duration: 0.8, type: "spring", delay: 0.4 }}
             className="absolute bottom-[10%] left-[10%] w-[45%] h-[55%] z-10 border-4 border-purple-500 overflow-hidden shadow-2xl"
           >
             <Image
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop"
                alt="Gen Z Style 2"
                fill
                className="object-cover hover:scale-110 transition-transform duration-700 grayscale hover:grayscale-0"
             />
           </motion.div>

           {/* Floating elements */}
           <motion.div
             animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-[5%] left-[20%] bg-pink-500 text-white font-bold py-2 px-4 rounded-full text-sm transform -rotate-12 shadow-lg border-2 border-black z-30"
           >
             *limited*
           </motion.div>
        </div>

      </div>

      {/* Marquee Banner */}
      <div className="absolute bottom-0 w-full overflow-hidden bg-white py-2 border-y-4 border-black z-30">
        <motion.div
          animate={{ x: [0, -1035] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
          className="whitespace-nowrap flex font-bold uppercase tracking-widest text-black text-sm sm:text-base"
        >
          <span className="mx-4">UNSERIOUS (BY MAVERICK)</span> •
          <span className="mx-4">STREETWEAR</span> •
          <span className="mx-4">NEW DROPS WEEKLY</span> •
          <span className="mx-4">FREE SHIPPING OVER ₹4999</span> •
          <span className="mx-4">UNSERIOUS (BY MAVERICK)</span> •
          <span className="mx-4">STREETWEAR</span> •
          <span className="mx-4">NEW DROPS WEEKLY</span> •
          <span className="mx-4">FREE SHIPPING OVER ₹4999</span> •
        </motion.div>
      </div>
    </div>
  );
}
