import { Globe, MessageCircle, Navigation, PlayCircle } from "lucide-react";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

export function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className={`text-2xl font-bold tracking-tight lowercase flex items-baseline gap-1 mb-4 inline-flex ${playfair.className}`}>
              unserious <span className="text-xs font-normal text-gray-500 tracking-normal font-sans">(by maverick)</span>
            </Link>
            <p className="text-gray-500 text-sm mb-6">
              Modern clothing for the modern soul. Designed with passion, crafted with care.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-black transition-colors">
                <span className="sr-only">Instagram</span>
                <Globe className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-black transition-colors">
                <span className="sr-only">Facebook</span>
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-black transition-colors">
                <span className="sr-only">Twitter</span>
                <Navigation className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-black transition-colors">
                <span className="sr-only">Youtube</span>
                <PlayCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/shop" className="text-sm text-gray-500 hover:text-black transition-colors">New Arrivals</Link>
              </li>
              <li>
                <Link href="/shop" className="text-sm text-gray-500 hover:text-black transition-colors">Bestsellers</Link>
              </li>
              <li>
                <Link href="/shop?category=men" className="text-sm text-gray-500 hover:text-black transition-colors">Men</Link>
              </li>
              <li>
                <Link href="/shop?category=women" className="text-sm text-gray-500 hover:text-black transition-colors">Women</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/help" className="text-sm text-gray-500 hover:text-black transition-colors">Help Center</Link>
              </li>
              <li>
                <Link href="/shipping" className="text-sm text-gray-500 hover:text-black transition-colors">Shipping & Returns</Link>
              </li>
              <li>
                <Link href="/size-guide" className="text-sm text-gray-500 hover:text-black transition-colors">Size Guide</Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-500 hover:text-black transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Newsletter</h3>
            <p className="text-sm text-gray-500 mb-4">
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 bg-white border border-gray-300 rounded-l-md px-4 py-2 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
                required
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center bg-black border border-transparent rounded-r-md px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} unserious (by maverick). All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-gray-400 hover:text-gray-900">Privacy Policy</Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-gray-900">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
