"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { collections } from "@/lib/mockData";

export function Collections() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Shop by Collection
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative group h-[500px] overflow-hidden"
            >
              <Image
                src={collection.image}
                alt={collection.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col items-start">
                <h3 className="text-2xl font-bold text-white mb-2">{collection.title}</h3>
                <p className="text-gray-200 mb-6 max-w-sm">{collection.subtitle}</p>
                <Link
                  href={`/collections/${collection.id}`}
                  className="inline-block bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-gray-100 transition-colors"
                >
                  Explore Collection
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
