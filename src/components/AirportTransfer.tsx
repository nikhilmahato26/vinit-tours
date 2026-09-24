import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Plane, 
  Phone, 
  Clock, 
  ShieldCheck, 
  Luggage, 
  CheckCircle2,
  Calendar
} from "lucide-react";
import { businessContact, quickWhatsAppMessage } from "../data/navigation";

export const AirportTransfer: React.FC = () => {
  return (
    <section id="airport" className="py-20 lg:py-24 bg-navy-950 text-white relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/15 border border-gold-400/40 text-gold-400 text-xs font-bold uppercase tracking-wider mb-4">
              <Plane className="w-4 h-4" />
              <span>AIRPORT PICKUP &amp; DROP</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white mb-6">
              Reliable Airport Transfers Across Ahmedabad
            </h2>

            <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
              Whether customers need an airport pickup or airport drop, provide a convenient booking experience with professional drivers and comfortable vehicles.
            </p>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-navy-900 border border-navy-800">
                <Clock className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-200">24×7 Flight Tracking</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-navy-900 border border-navy-800">
                <Luggage className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-200">Luggage Assistance</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-navy-900 border border-navy-800">
                <ShieldCheck className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-200">Zero Surge Pricing</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-navy-900 border border-navy-800">
                <CheckCircle2 className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-200">T1 &amp; T2 Curbside Pickup</span>
              </div>
            </div>

            {/* Required Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/booking?service=Airport%20Transfer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-sm uppercase tracking-wider transition-all shadow-lg shadow-gold-500/20"
                id="btn-airport-book"
              >
                <Calendar className="w-4 h-4" />
                <span>BOOK AIRPORT TRANSFER</span>
              </Link>

              <a
                href={`tel:${businessContact.primaryPhone}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-navy-800 hover:bg-navy-700 text-white font-bold text-sm border border-navy-700 hover:border-gold-400/40 transition-colors uppercase tracking-wider"
                id="btn-airport-call"
              >
                <Phone className="w-4 h-4 text-gold-400" />
                <span>CALL NOW</span>
              </a>
            </div>
          </motion.div>

          {/* Right Image Display */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-navy-700 group">
              <img
                src="/images/services/airport-transfer.jpg"
                alt="Ahmedabad Airport Cab Pickup & Drop Vinit Tours"
                className="w-full h-96 lg:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-navy-900/90 backdrop-blur-md border border-navy-700 text-left">
                <span className="text-xs font-bold text-gold-400 uppercase tracking-widest block">
                  SVPI Airport Ahmedabad (AMD)
                </span>
                <p className="text-sm font-semibold text-white mt-1">
                  Terminal 1 (Domestic) &amp; Terminal 2 (International) Chauffeur Meet &amp; Greet
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
