import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Compass, 
  Milestone, 
  Receipt, 
  MapPin, 
  ShieldCheck, 
  ArrowRight,
  PhoneCall
} from "lucide-react";
import { businessContact, quickWhatsAppMessage } from "../data/navigation";

export const Outstation: React.FC = () => {
  return (
    <section id="outstation" className="py-20 lg:py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Media Banner */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-card border border-slate-200 group">
              <img
                src="/images/services/outstation-highway.jpg"
                alt="Outstation Taxi Gujarat Maharashtra Rajasthan"
                className="w-full h-96 lg:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />

              {/* Highway Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg text-left">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-navy-900 uppercase tracking-wider">
                    Popular Outstation Routes
                  </span>
                  <span className="text-xs font-bold text-gold-600 bg-gold-50 px-2.5 py-0.5 rounded-full border border-gold-200">
                    Doorstep Pickup
                  </span>
                </div>
                <p className="text-xs text-slate-600">
                  Ahmedabad ⇄ Udaipur • Ahmedabad ⇄ Mount Abu • Ahmedabad ⇄ Surat • Ahmedabad ⇄ Mumbai • Ahmedabad ⇄ Somnath &amp; Dwarka
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Text & Fare Terms */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-400/30 text-gold-700 text-xs font-bold uppercase tracking-wider mb-4">
              <Compass className="w-4 h-4 text-gold-600" />
              <span>Interstate &amp; Regional Travel</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-navy-900 tracking-tight mb-6">
              OUTSTATION TAXI
            </h2>

            <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
              Provide comfortable transportation for long-distance journeys across Gujarat, Rajasthan, and Maharashtra with experienced highway drivers and well-maintained cars.
            </p>

            {/* Mandatory Explicit Outstation Conditions Box */}
            <div className="bg-amber-50/70 border-2 border-amber-300/80 rounded-2xl p-6 mb-8 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Milestone className="w-5 h-5 text-amber-700" />
                <span className="font-display font-bold text-amber-950 text-sm uppercase tracking-wide">
                  Standard Outstation Policy
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-2.5 text-sm text-slate-800 font-semibold">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>Minimum 300 KM applicable for outstation trips.</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-slate-800 font-semibold">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>Toll, parking and state permit charges are extra as actual.</span>
                </div>
              </div>
            </div>

            {/* CTA: GET OUTSTATION FARE */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/booking?service=Outstation%20Taxi"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-navy-900 hover:bg-gold-500 text-white hover:text-navy-950 font-bold text-sm uppercase tracking-wider transition-all duration-200 shadow-md group"
                id="btn-outstation-fare"
              >
                <span>GET OUTSTATION FARE</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={`https://wa.me/91${businessContact.primaryPhone}?text=${quickWhatsAppMessage("outstation")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold text-sm border border-emerald-300 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Quote</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
