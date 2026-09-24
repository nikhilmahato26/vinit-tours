import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Camera, 
  Compass, 
  Calendar, 
  ArrowRight,
  Sun,
  Users
} from "lucide-react";
import { businessContact, quickWhatsAppMessage } from "../data/navigation";

export const Sightseeing: React.FC = () => {
  const tours = [
    {
      title: "Ahmedabad UNESCO Heritage City Tour",
      duration: "Full Day (8-10 Hours)",
      spots: "Sabarmati Ashram, Atal Bridge, Adalaj Stepwell, Akshardham Gandhinagar, Sidi Saiyyed Mosque",
      recommendedCab: "Dzire / Ertiga",
    },
    {
      title: "Statue of Unity Day Tour (Kevadia)",
      duration: "Full Day Trip",
      spots: "World's Tallest Statue, Valley of Flowers, Laser Light Show, Sardar Sarovar Dam",
      recommendedCab: "Innova Crysta / Ertiga",
    },
    {
      title: "Saurashtra Darshan: Somnath & Dwarka",
      duration: "3 - 4 Days Tour",
      spots: "Somnath Jyotirlinga, Dwarkadhish Temple, Bet Dwarka, Porbandar, Junagadh",
      recommendedCab: "Innova Crysta / Tempo Traveller",
    },
  ];

  return (
    <section id="sightseeing" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
              <img
                src="/images/services/sightseeing.jpg"
                alt="Ahmedabad Atal Bridge Sightseeing Vinit Tours"
                className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md">
                <div className="flex items-center gap-2 text-xs font-bold text-navy-900 mb-1">
                  <MapPin className="w-4 h-4 text-gold-500" />
                  <span>Atal Pedestrian Bridge &amp; Sabarmati Riverfront</span>
                </div>
                <p className="text-xs text-slate-500">
                  Ahmedabad’s most iconic modern riverfront landmark. Explore in air-conditioned comfort.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-400/30 text-gold-700 text-xs font-bold uppercase tracking-wider mb-4">
              <Compass className="w-4 h-4 text-gold-600" />
              <span>Sightseeing &amp; Local Tours</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-navy-900 tracking-tight mb-6">
              EXPLORE WITH VINIT TOURS &amp; TRAVELS
            </h2>

            {/* Exact required content sentence */}
            <p className="text-base sm:text-lg text-slate-700 font-medium mb-8 leading-relaxed">
              Comfortable local transportation for sightseeing, city tours and destination exploration.
            </p>

            {/* Tour Cards */}
            <div className="space-y-4 mb-8">
              {tours.map((tour) => (
                <div
                  key={tour.title}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-gold-400 transition-colors"
                >
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-display font-bold text-navy-900 text-sm">
                      {tour.title}
                    </h4>
                    <span className="text-[11px] font-semibold text-gold-700 bg-gold-50 px-2 py-0.5 rounded-md border border-gold-200">
                      {tour.duration}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mb-2">
                    {tour.spots}
                  </p>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
                    <Users className="w-3 h-3 text-navy-800" />
                    <span>Suggested Cab: <strong className="text-navy-900">{tour.recommendedCab}</strong></span>
                  </div>
                </div>
              ))}
            </div>

            {/* Required CTA: BOOK A LOCAL TOUR */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/booking?service=Side%20Seeing"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-navy-900 hover:bg-gold-500 text-white hover:text-navy-950 font-bold text-sm uppercase tracking-wider transition-all shadow-md group"
                id="btn-book-local-tour"
              >
                <span>BOOK A LOCAL TOUR</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={`https://wa.me/91${businessContact.primaryPhone}?text=${quickWhatsAppMessage("general", "Hello Vinit Tours & Travels, I would like to book a local sightseeing tour in Ahmedabad.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-sm border border-emerald-300 transition-colors"
              >
                <span>Custom Tour on WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
