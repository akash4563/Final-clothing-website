"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { collections } from "@/lib/mockData";

export function Collections() {
  return (
    <section className="py-24 bg-zinc-900 border-b-8 border-black relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="max-w-[95%] mx-auto relative z-10">
        <div className="flex flex-col items-center mb-20">
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: "spring" }}
            className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 uppercase tracking-tighter leading-none text-center"
          >
            VIBE CHECK
          </motion.h2>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="text-gray-400 font-mono mt-4 text-center max-w-lg"
          >
            Pick your poison. Shop curated drops meant to disrupt.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 50, rotate: index % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
              className={`relative group h-[600px] overflow-hidden border-4 border-black bg-black ${
                index % 2 === 0 ? 'md:mt-0' : 'md:mt-16'
              }`}
            >
              <Image
                src={collection.image}
                alt={collection.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-[1.5s] group-hover:scale-110 group-hover:rotate-1 opacity-80 group-hover:opacity-100"
              />

              {/* Bold Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${index % 2 === 0 ? 'from-purple-900/90' : 'from-pink-900/90'} via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500`} />

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <motion.div
                  initial={false}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-5xl lg:text-7xl font-black text-white mb-2 uppercase tracking-tighter leading-[0.8]">
                    {collection.title}
                  </h3>
                  <p className="text-gray-200 mb-8 max-w-sm font-mono text-sm border-l-2 border-purple-500 pl-4 py-1">
                    {collection.subtitle}
                  </p>

                  <Link
                    href={`/shop`}
                    className="group/btn relative inline-flex items-center justify-center px-8 py-4 bg-white text-black font-black uppercase tracking-widest overflow-hidden border-2 border-transparent hover:border-white hover:text-white transition-colors duration-300"
                  >
                     <span className="relative z-10 flex items-center gap-2">
                       Enter <span className="text-xl group-hover/btn:translate-x-2 transition-transform">→</span>
                     </span>
                     <div className="absolute inset-0 bg-black translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
