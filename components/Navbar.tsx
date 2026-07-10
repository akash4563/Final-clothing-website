"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useCart } from "./CartProvider";
import { useAuth } from "./AuthProvider";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount, isMounted: cartMounted } = useCart();
  const { user, isMounted: authMounted } = useAuth();

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
          <div className="flex-1 flex justify-start space-x-4 lg:space-x-8 text-sm md:text-base whitespace-nowrap overflow-hidden hidden md:flex">
            <Link href="/shop" className="text-gray-800 hover:text-black font-medium transition-colors">
              Shop
            </Link>
            <Link href="/collections" className="text-gray-800 hover:text-black font-medium transition-colors">
              Collections
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-black font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-800 hover:text-black font-medium transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex-shrink-0 flex items-center justify-center mx-4">
            <Link href="/" className={`text-3xl font-bold tracking-tight lowercase ${playfair.className}`}>
              unseriious
            </Link>
          </div>

          <div className="flex-1 flex justify-end space-x-6">
            <button aria-label="Search" className="text-gray-800 hover:text-black transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Link
              href={authMounted && user ? "/profile" : "/login"}
              aria-label="User account"
              className="text-gray-800 hover:text-black transition-colors hidden sm:block"
            >
              <User className={`w-5 h-5 ${authMounted && user ? 'text-[#ff0055]' : ''}`} />
            </Link>
            <Link href="/cart" aria-label="Shopping bag" className="text-gray-800 hover:text-black transition-colors relative flex items-center">
              <ShoppingBag className="w-5 h-5" />
              {cartMounted && cartCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-[#ff0055] text-white text-[10px] font-bold rounded-full min-w-[16px] h-[16px] px-1 flex items-center justify-center shadow-md animate-in zoom-in leading-none text-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              className="md:hidden text-gray-800 hover:text-black transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-b border-gray-200"
          >
            <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col">
              <Link
                href="/shop"
                className="text-gray-800 hover:text-black font-medium text-lg py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                href="/collections"
                className="text-gray-800 hover:text-black font-medium text-lg py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Collections
              </Link>
              <Link
                href="/about"
                className="text-gray-800 hover:text-black font-medium text-lg py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-800 hover:text-black font-medium text-lg py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="border-t border-gray-200 pt-4 mt-2">
                <Link
                  href={authMounted && user ? "/profile" : "/login"}
                  className="flex items-center gap-2 text-gray-800 hover:text-black font-medium text-lg py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <User className={`w-5 h-5 ${authMounted && user ? 'text-[#ff0055]' : ''}`} />
                  {authMounted && user ? "My Profile" : "Login / Register"}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
