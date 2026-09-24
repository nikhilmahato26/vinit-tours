import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  Sparkles, 
  MessageSquare,
  Plane,
  Building,
  Car,
  Compass,
  Briefcase,
  Users
} from "lucide-react";
import { completeTravelSolutions } from "../data/services";
import { businessContact, quickWhatsAppMessage } from "../data/navigation";

export const TravelServices: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-navy-950 text-white relative overflow-hidden">
      {/* Background Subtle Gradient Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-700/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/20 border border-gold-400/40 text-gold-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>One-Stop Travel Desk</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white mb-4">
              COMPLETE TRAVEL SOLUTIONS
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Beyond taxi rides, Vinit Tours &amp; Travels offers seamless hotel reservations, domestic flight booking assistance, family wedding fleets, and corporate itineraries.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/91${businessContact.primaryPhone}?text=${quickWhatsAppMessage("general")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-sm transition-all shadow-lg shadow-gold-500/20"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Direct WhatsApp Helpdesk</span>
            </a>
          </div>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {completeTravelSolutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative rounded-3xl overflow-hidden bg-navy-900 border border-navy-800 hover:border-gold-500/50 shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image banner */}
              <div className="h-44 w-full relative overflow-hidden">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-navy-950/80 backdrop-blur-md text-gold-400 text-xs font-bold border border-navy-700">
                  {solution.tag}
                </span>
                <span className="absolute top-4 right-4 text-2xl filter drop-shadow">
                  {solution.emoji}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {solution.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-navy-800 flex items-center justify-between">
                  <Link
                    to={`/booking?service=${encodeURIComponent(solution.title)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-gold-400 hover:text-white uppercase tracking-wider transition-colors"
                  >
                    <span>{solution.actionText}</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>

                  <a
                    href={`https://wa.me/91${businessContact.primaryPhone}?text=${quickWhatsAppMessage(solution.title.toLowerCase())}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-400 hover:text-emerald-400 flex items-center gap-1 transition-colors"
                    title="Enquire on WhatsApp"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
