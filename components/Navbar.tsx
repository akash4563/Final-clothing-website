"use client";

import { motion } from "framer-motion";
import { Search, ShoppingBag, User } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-1 flex justify-start space-x-8">
            <Link href="/shop" className="text-gray-800 hover:text-black font-medium transition-colors">
              Shop
            </Link>
            <Link href="/collections" className="text-gray-800 hover:text-black font-medium transition-colors">
              Collections
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-black font-medium transition-colors">
              About
            </Link>
          </div>

          <div className="flex-shrink-0 flex items-center justify-center">
            <Link href="/" className="text-2xl font-bold tracking-tighter">
              LUMIÈRE
            </Link>
          </div>

          <div className="flex-1 flex justify-end space-x-6">
            <button aria-label="Search" className="text-gray-800 hover:text-black transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button aria-label="User account" className="text-gray-800 hover:text-black transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button aria-label="Shopping bag" className="text-gray-800 hover:text-black transition-colors relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
                2
              </span>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
