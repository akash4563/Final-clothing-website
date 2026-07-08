"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/mockData";

export function FeaturedProducts() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  };

  return (
    <section className="py-24 bg-white border-b-8 border-black overflow-hidden">
      <div className="max-w-[95%] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex-1"
          >
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black flex items-center gap-4">
              Trending
              <span className="text-2xl md:text-4xl bg-black text-white px-4 py-2 rounded-full transform -rotate-6">Now</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Link
              href="/shop"
              className="group flex items-center justify-center w-32 h-32 rounded-full border-4 border-black hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <span className="font-bold uppercase tracking-widest text-center text-sm group-hover:scale-110 transition-transform">
                View<br/>All
              </span>
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="group relative border-4 border-black bg-white flex flex-col hover:-translate-y-4 transition-transform duration-300"
            >
              {/* Product Badge */}
              <div className="absolute top-4 right-4 z-20 bg-purple-500 text-white font-bold py-1 px-3 border-2 border-black transform rotate-3 group-hover:rotate-6 transition-transform">
                #{index + 1}
              </div>

              <div className="relative h-[450px] w-full overflow-hidden border-b-4 border-black bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-purple-500/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Quick Add Button */}
                <div className="absolute bottom-4 left-4 right-4 translate-y-20 group-hover:translate-y-0 transition-transform duration-300 ease-out z-20">
                  <Link href={`/shop/${product.id}`} className="block w-full bg-black text-white text-center py-4 font-black uppercase tracking-widest hover:bg-purple-600 transition-colors">
                    Snag It
                  </Link>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-[length:100px_100px]">
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">{product.category}</p>
                  <h3 className="text-xl font-black text-black uppercase leading-tight mb-4 group-hover:text-purple-600 transition-colors">
                    <Link href={`/shop/${product.id}`}>
                      {product.name}
                    </Link>
                  </h3>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <p className="text-2xl font-black text-black">₹{product.price}</p>
                  <span className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center font-bold text-lg group-hover:bg-black group-hover:text-white transition-colors">
                    +
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
