import React from "react";
import { motion } from "framer-motion";
import { 
  Clock, 
  ShieldCheck, 
  UserCheck, 
  Sparkles, 
  Timer, 
  BadgePercent 
} from "lucide-react";
import { quickTrustFeatures } from "../data/pricing";

const iconMap: Record<string, React.ReactNode> = {
  Clock: <Clock className="w-6 h-6 text-navy-900" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-navy-900" />,
  UserCheck: <UserCheck className="w-6 h-6 text-navy-900" />,
  Sparkles: <Sparkles className="w-6 h-6 text-navy-900" />,
  Timer: <Timer className="w-6 h-6 text-navy-900" />,
  BadgePercent: <BadgePercent className="w-6 h-6 text-navy-900" />,
};

export const TrustBar: React.FC = () => {
  return (
    <section className="relative -mt-10 sm:-mt-14 z-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* White rounded card with subtle shadow based on reference */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-card hover:shadow-card-hover border border-slate-100 transition-all duration-300"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {quickTrustFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className={`flex flex-col items-center text-center group ${
                index > 0 ? "pt-4 md:pt-0 md:pl-4 lg:pl-6" : ""
              }`}
            >
              {/* Soft circular background for elegant line icon */}
              <div className="w-14 h-14 rounded-2xl bg-amber-50 group-hover:bg-gold-500/20 border border-gold-200/50 flex items-center justify-center mb-3 transition-colors duration-300 shadow-sm">
                <div className="text-gold-600 group-hover:scale-110 transition-transform duration-300">
                  {iconMap[feature.icon]}
                </div>
              </div>

              <h4 className="text-base font-display font-bold text-navy-900 mb-1 tracking-tight">
                {feature.title}
              </h4>
              <p className="text-xs text-slate-500 font-medium">
                {feature.subtitle}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
