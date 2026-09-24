"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { galleryData } from "@/data/galleryData";
import { Image as ImageIcon } from "lucide-react";

export default function GalleryView() {
  return (
    <div className="h-full overflow-y-auto no-scrollbar p-6">
      <div className="max-w-5xl mx-auto">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-2">
            <ImageIcon className="w-5 h-5 text-brand" />
            <h1 className="text-2xl font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-montserrat)" }}>Visual Log</h1>
          </div>
          <p className="text-sm text-white/50">Moments from hackathons, speaking events, and deep work sessions.</p>
        </header>

        {/* Basic masonry approximation using columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryData.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="break-inside-avoid relative group rounded-xl overflow-hidden bg-white/5 border border-white/10"
            >
              <div className={`relative w-full ${item.aspectRatio === 'square' ? 'aspect-square' : item.aspectRatio === 'portrait' ? 'aspect-[3/4]' : 'aspect-video'}`}>
                <Image
                  src={item.url}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <h3 className="text-white font-bold text-sm" style={{ fontFamily: "var(--font-montserrat)" }}>{item.title}</h3>
                <p className="text-white/70 text-xs mt-1">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
