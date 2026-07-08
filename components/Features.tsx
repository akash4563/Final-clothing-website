"use client";

import { motion } from "framer-motion";
import { Leaf, HeartHandshake, ShieldCheck, Truck } from "lucide-react";
import { features } from "@/lib/mockData";

const iconMap: Record<string, React.ReactNode> = {
  Leaf: <Leaf className="h-10 w-10 text-white" />,
  HeartHandshake: <HeartHandshake className="h-10 w-10 text-white" />,
  ShieldCheck: <ShieldCheck className="h-10 w-10 text-white" />,
  Truck: <Truck className="h-10 w-10 text-white" />
};

export function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } }
  };

  return (
    <section className="py-24 bg-zinc-900 border-y-8 border-black relative overflow-hidden">
      {/* Background noise texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
              THE <span className="text-purple-500">UNSERIOUS</span> <br/>
              CODE
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-400 max-w-sm font-mono text-sm md:text-right"
          >
            Not just another clothing brand. We are building a community. Zero BS, just quality threads.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              className="group relative bg-zinc-800 p-8 rounded-2xl border-2 border-zinc-700 hover:border-purple-500 transition-colors duration-300 overflow-hidden"
            >
              {/* Hover effect gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-700 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    {iconMap[feature.icon]}
                  </div>
                  <span className="text-zinc-600 font-black text-4xl group-hover:text-purple-500/30 transition-colors">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm font-mono leading-relaxed group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
