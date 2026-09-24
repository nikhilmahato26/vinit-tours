import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Phone, 
  MessageSquare, 
  Calendar, 
  ShieldCheck, 
  Clock, 
  Award, 
  ChevronRight,
  Sparkles
} from "lucide-react";
import { businessContact, quickWhatsAppMessage } from "../data/navigation";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-navy-950">
      {/* Background Image with Dark Navy Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Vinit Tours & Travels Premium Cab Highway Service Ahmedabad"
          className="w-full h-full object-cover object-center scale-105 transform animate-pulse-slow"
        />
        {/* Deep Navy Overlays for maximum readability as requested */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/85 to-navy-950/90" />
        <div className="absolute inset-0 bg-navy-950/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Column: Headings, Badges, CTAs, Phone Numbers */}
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/15 border border-gold-400/40 text-gold-400 text-xs sm:text-sm font-bold tracking-wider uppercase mb-6 shadow-sm shadow-gold-500/10"
          >
            <Sparkles className="w-4 h-4 text-gold-400 animate-spin-slow" />
            <span>24×7 CAB & TRAVEL SERVICE</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-display font-black text-white tracking-tight leading-[1.1] mb-4"
          >
            VINIT TOURS <br className="hidden sm:inline" />
            <span className="gold-gradient-text">&amp; TRAVELS</span>
          </motion.h1>

          {/* Supporting Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl sm:text-2xl lg:text-3xl font-display font-semibold text-slate-200 mb-4"
          >
            Comfortable Rides. Reliable Service. Hassle-Free Travel.
          </motion.h2>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base sm:text-lg text-slate-300 mb-8 max-w-2xl leading-relaxed"
          >
            Local, airport, outstation and corporate travel services across Ahmedabad, Gujarat and beyond.
          </motion.p>

          {/* Prominent Phone Numbers Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-navy-900/90 backdrop-blur-md border border-gold-500/30 rounded-2xl p-4 sm:p-5 mb-8 shadow-2xl inline-block max-w-full"
          >
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-gold-400 font-bold text-sm uppercase tracking-wider">
                <Phone className="w-5 h-5 animate-bounce" />
                <span>Call &amp; Book 24×7:</span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg font-extrabold text-white">
                <a
                  href={`tel:${businessContact.allPhones[0]}`}
                  className="hover:text-gold-400 transition-colors bg-navy-800/80 px-3 py-1 rounded-lg border border-navy-700/80"
                >
                  {businessContact.allPhones[0]}
                </a>
                <span className="text-gold-500/60 hidden sm:inline">|</span>
                <a
                  href={`tel:${businessContact.allPhones[1]}`}
                  className="hover:text-gold-400 transition-colors bg-navy-800/80 px-3 py-1 rounded-lg border border-navy-700/80"
                >
                  {businessContact.allPhones[1]}
                </a>
                <span className="text-gold-500/60 hidden sm:inline">|</span>
                <a
                  href={`tel:${businessContact.allPhones[2]}`}
                  className="hover:text-gold-400 transition-colors bg-navy-800/80 px-3 py-1 rounded-lg border border-navy-700/80"
                >
                  {businessContact.allPhones[2]}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Primary & Secondary Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
          >
            {/* Primary CTA: BOOK A CAB */}
            <Link
              to="/booking"
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 hover:from-gold-400 hover:to-gold-300 text-navy-950 font-black text-base sm:text-lg px-8 py-4 rounded-xl shadow-xl shadow-gold-500/25 hover:shadow-gold-500/40 transform hover:-translate-y-0.5 active:translate-y-0 transition-all uppercase tracking-wide group"
              id="hero-book-cab-btn"
            >
              <Calendar className="w-5 h-5 text-navy-950 group-hover:scale-110 transition-transform" />
              <span>BOOK A CAB</span>
              <ChevronRight className="w-5 h-5 text-navy-950 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Secondary CTA: CALL NOW */}
            <a
              href={`tel:${businessContact.primaryPhone}`}
              className="inline-flex items-center justify-center gap-2.5 bg-navy-800/90 hover:bg-navy-800 text-white hover:text-gold-300 font-bold text-base sm:text-lg px-7 py-4 rounded-xl border border-navy-600 hover:border-gold-400/50 shadow-lg transition-all uppercase tracking-wide"
              id="hero-call-now-btn"
            >
              <Phone className="w-5 h-5 text-gold-400" />
              <span>CALL NOW</span>
            </a>

            {/* WHATSAPP BOOKING */}
            <a
              href={`https://wa.me/91${businessContact.primaryPhone}?text=${quickWhatsAppMessage("general")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base sm:text-lg px-7 py-4 rounded-xl shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/50 transition-all uppercase tracking-wide"
              id="hero-whatsapp-booking-btn"
            >
              <MessageSquare className="w-5 h-5" />
              <span>WHATSAPP BOOKING</span>
            </a>
          </motion.div>
        </div>

        {/* Right Floating Feature Spotlight Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full lg:w-96 bg-navy-900/85 backdrop-blur-xl border border-gold-500/30 rounded-3xl p-6 sm:p-7 shadow-2xl text-left"
        >
          <div className="flex items-center justify-between border-b border-navy-800 pb-4 mb-5">
            <div>
              <span className="text-xs font-semibold text-gold-400 uppercase tracking-widest">
                Special Rate Card
              </span>
              <h3 className="text-xl font-display font-bold text-white">Starting Fares</h3>
            </div>
            <span className="px-3 py-1 rounded-full bg-gold-500/20 text-gold-300 text-xs font-bold border border-gold-500/30">
              Verified Rates
            </span>
          </div>

          <div className="space-y-4 mb-6">
            <div className="p-3.5 rounded-2xl bg-navy-800/80 border border-navy-700/80 flex items-center justify-between hover:border-gold-400/40 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white p-1 flex items-center justify-center overflow-hidden">
                  <img src="/images/vehicles/dzire.jpg" alt="Dzire" className="w-full h-full object-contain" />
                </div>
                <div>
                  <div className="font-bold text-white text-base">Dzire Sedan</div>
                  <div className="text-xs text-slate-400">4 Seater • AC • City &amp; Highway</div>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xl font-display font-black text-gold-400">₹12</span>
                <span className="text-xs text-slate-400 block font-medium">/ KM*</span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-navy-800/80 border border-navy-700/80 flex items-center justify-between hover:border-gold-400/40 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white p-1 flex items-center justify-center overflow-hidden">
                  <img src="/images/vehicles/ertiga.jpg" alt="Ertiga" className="w-full h-full object-contain" />
                </div>
                <div>
                  <div className="font-bold text-white text-base">Ertiga SUV</div>
                  <div className="text-xs text-slate-400">6 Seater • AC • Family Travel</div>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xl font-display font-black text-gold-400">₹14</span>
                <span className="text-xs text-slate-400 block font-medium">/ KM*</span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-navy-800/80 border border-navy-700/80 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white p-1 flex items-center justify-center overflow-hidden">
                  <img src="/images/vehicles/innova-crysta.jpg" alt="Innova Crysta" className="w-full h-full object-contain" />
                </div>
                <div>
                  <div className="font-bold text-white text-base">Innova Crysta</div>
                  <div className="text-xs text-slate-400">6/7 Seater • Executive Luxury</div>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-gold-300 block">Contact for Fare</span>
                <span className="text-[10px] text-slate-400">Custom Quote</span>
              </div>
            </div>
          </div>

          <div className="text-[11px] text-slate-400 bg-navy-950/60 p-3 rounded-xl border border-navy-800/80 mb-5 leading-relaxed">
            * <strong className="text-slate-200">Price applicable as per minimum KM.</strong> Minimum 300 KM for outstation. Toll, Parking &amp; State Permit extra.
          </div>

          <Link
            to="/booking"
            className="w-full inline-flex items-center justify-center gap-2 py-3 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold rounded-xl text-sm transition-all shadow-md shadow-gold-500/20"
          >
            <span>Check Availability &amp; Book</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
