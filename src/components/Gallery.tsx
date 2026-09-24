import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Camera, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Tag 
} from "lucide-react";
import { galleryItems, GalleryItem } from "../data/gallery";

export const Gallery: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = ["All", "Fleet", "Airport & Corporate", "Destinations", "Weddings & Family"];

  const filteredItems = galleryItems.filter((item) => {
    if (selectedFilter === "All") return true;
    return item.category === selectedFilter;
  });

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextImage = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
  };

  const prevImage = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex(
      (activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length
    );
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy-900 text-gold-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5 text-gold-400" />
            <span>Visual Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-navy-900 tracking-tight mb-4">
            TRAVEL &amp; FLEET GALLERY
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Take a look at our fleet of Dzire, Ertiga, Innova Crysta, Urbania and Tempo Travellers, alongside memorable client journeys across Ahmedabad, Gujarat, and interstate routes.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedFilter(cat);
                setActiveLightboxIndex(null);
              }}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                selectedFilter === cat
                  ? "bg-navy-900 text-gold-400 shadow-md shadow-navy-900/20 scale-105"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Responsive Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => openLightbox(index)}
                className="group relative rounded-2xl overflow-hidden bg-slate-100 cursor-pointer shadow-sm hover:shadow-card-hover border border-slate-200 h-64"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gold-400 mb-1 flex items-center gap-1">
                    <Tag className="w-3 h-3" />
                    {item.category}
                  </span>
                  <h4 className="text-base font-display font-bold leading-tight mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-300 line-clamp-2">
                    {item.caption}
                  </p>
                  <div className="mt-2 flex items-center gap-1 text-[11px] font-semibold text-gold-300">
                    <Maximize2 className="w-3 h-3" />
                    <span>Click to expand</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeLightboxIndex !== null && filteredItems[activeLightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-navy-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm z-50 transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Image */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white z-50 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Image */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white z-50 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox content card */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full bg-navy-900 border border-navy-700 rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="max-h-[70vh] overflow-hidden flex items-center justify-center bg-black/50">
                <img
                  src={filteredItems[activeLightboxIndex].image}
                  alt={filteredItems[activeLightboxIndex].title}
                  className="max-h-[70vh] w-auto max-w-full object-contain"
                />
              </div>

              <div className="p-6 bg-navy-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-navy-800">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
                    {filteredItems[activeLightboxIndex].category} • {activeLightboxIndex + 1} of {filteredItems.length}
                  </span>
                  <h3 className="text-xl font-display font-bold mt-1">
                    {filteredItems[activeLightboxIndex].title}
                  </h3>
                  <p className="text-sm text-slate-300 mt-1">
                    {filteredItems[activeLightboxIndex].caption}
                  </p>
                </div>

                <a
                  href={`/booking?vehicle=${encodeURIComponent(filteredItems[activeLightboxIndex].title)}`}
                  className="px-5 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs uppercase tracking-wider whitespace-nowrap"
                >
                  Book This Ride
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
