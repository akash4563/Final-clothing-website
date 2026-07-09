"use client";

import { useState, useMemo } from "react";
import { products } from "@/lib/mockData";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = useMemo(() => {
    const uniqueCategories = new Set(products.map(p => p.category));
    return ["All", ...Array.from(uniqueCategories)];
  }, []);

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") return products;
    return products.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="pt-24 pb-16 bg-[#f4f4f0] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 border-4 border-black bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center relative overflow-hidden">
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#ff0055] rounded-full mix-blend-multiply opacity-50 animate-pulse"></div>
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#ffff00] rounded-full mix-blend-multiply opacity-50 animate-pulse delay-1000"></div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-black mb-4 uppercase relative z-10">
            Shop Drop
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto font-mono text-lg relative z-10">
            Browse our complete collection. Secure the latest styles before they sell out.
          </p>
        </div>

        {/* Categories */}
        <div className="mb-12 flex flex-wrap gap-4 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-6 py-3 font-black uppercase tracking-widest text-sm transition-all duration-300
                border-2 border-black
                ${activeCategory === category
                  ? 'bg-[#ff0055] text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -translate-y-1'
                  : 'bg-white text-black hover:bg-black hover:text-white hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-16"
        >
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={product.id}
                className="group flex flex-col"
              >
                <Link href={`/shop/${product.id}`} className="block relative w-full aspect-[3/4] border-4 border-black bg-white overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group-hover:-translate-y-2 group-hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                  {/* Quick View Overlay Tag */}
                  <div className="absolute top-4 right-4 bg-[#ffff00] border-2 border-black px-2 py-1 font-black text-xs uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-4 group-hover:translate-x-0">
                    View Drop
                  </div>
                </Link>

                <div className="flex flex-col gap-1 flex-1">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-lg font-black uppercase leading-tight line-clamp-2">
                      <Link href={`/shop/${product.id}`} className="hover:text-[#ff0055] transition-colors">
                        {product.name}
                      </Link>
                    </h3>
                    <p className="text-xl font-bold whitespace-nowrap">₹{product.price}</p>
                  </div>
                  <p className="text-sm font-mono text-gray-500 uppercase">{product.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  );
}
