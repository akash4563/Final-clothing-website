"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <div className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000&auto=format&fit=crop"
          alt="Hero Background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/30 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="block text-sm font-semibold text-white tracking-[0.2em] uppercase mb-4">
            New Collection 2024
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-6"
        >
          Elevate Your <br className="hidden sm:block" /> Everyday Style.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="mt-4 text-xl sm:text-2xl text-gray-200 max-w-2xl mx-auto mb-10 font-light"
        >
          Discover our latest arrivals designed for comfort, crafted with purpose, and styled for the modern era.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/shop"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium bg-white text-black hover:bg-gray-100 transition-colors duration-300 min-w-[160px]"
          >
            Shop Men
          </Link>
          <Link
            href="/shop"
            className="inline-flex items-center justify-center px-8 py-4 border border-white text-base font-medium bg-transparent text-white hover:bg-white hover:text-black transition-colors duration-300 min-w-[160px]"
          >
            Shop Women
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
