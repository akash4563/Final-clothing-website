"use client";

import { motion } from "framer-motion";
import { Leaf, HeartHandshake, ShieldCheck, Truck } from "lucide-react";
import { features } from "@/lib/mockData";

const iconMap: Record<string, React.ReactNode> = {
  Leaf: <Leaf className="h-8 w-8 text-gray-900" />,
  HeartHandshake: <HeartHandshake className="h-8 w-8 text-gray-900" />,
  ShieldCheck: <ShieldCheck className="h-8 w-8 text-gray-900" />,
  Truck: <Truck className="h-8 w-8 text-gray-900" />
};

export function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Why Choose LUMIÈRE
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto"
          >
            We believe in quality over quantity, and ethical practices over fast fashion.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {features.map((feature) => (
            <motion.div key={feature.id} variants={itemVariants} className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gray-100 mb-6">
                {iconMap[feature.icon]}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
