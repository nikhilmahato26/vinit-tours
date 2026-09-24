import React from "react";
import { motion } from "framer-motion";
import { 
  Headphones, 
  Car, 
  Navigation, 
  Wallet, 
  Award, 
  Shield, 
  CheckCircle2, 
  Sparkles,
  Clock,
  UserCheck
} from "lucide-react";
import { whyChooseUsFeatures } from "../data/pricing";

const featureIcons: Record<string, React.ReactNode> = {
  Headphones: <Headphones className="w-7 h-7" />,
  Car: <Car className="w-7 h-7" />,
  Navigation: <Navigation className="w-7 h-7" />,
  Wallet: <Wallet className="w-7 h-7" />,
  Award: <Award className="w-7 h-7" />,
  Shield: <Shield className="w-7 h-7" />,
};

export const WhyChooseUs: React.FC = () => {
  const extraTrustBadges = [
    "Verified Drivers",
    "Clean Cars",
    "On-Time Pickup & Drop",
    "No Hidden Charges",
    "Transparent Billing",
    "Comfortable Journey",
    "24×7 Availability",
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-400/30 text-gold-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>The Vinit Difference</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-navy-900 tracking-tight mb-4">
            WHY CHOOSE US
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Every journey with Vinit Tours &amp; Travels is backed by our strict commitment to passenger safety, immaculate hygiene, verified drivers, and transparent pricing.
          </p>
        </div>

        {/* 6-Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {whyChooseUsFeatures.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white rounded-3xl p-8 border border-slate-200/80 hover:border-gold-400 shadow-sm hover:shadow-card-hover transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-16 h-16 rounded-2xl bg-amber-50 group-hover:bg-navy-900 text-gold-600 group-hover:text-gold-400 border border-gold-200/50 group-hover:border-navy-800 flex items-center justify-center mb-6 transition-all duration-300 shadow-sm">
                  {featureIcons[item.icon]}
                </div>

                <h3 className="text-xl font-display font-bold text-navy-900 mb-3 group-hover:text-gold-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-navy-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Standard on every booking</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Trust Bar Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-navy-900 text-white rounded-3xl p-6 sm:p-8 border border-navy-800 shadow-xl"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold text-gold-400 uppercase tracking-widest block mb-1">
                Guaranteed Travel Standards
              </span>
              <h4 className="text-lg sm:text-xl font-display font-bold text-white">
                Reliable Travel. Comfortable Journeys. Professional Service.
              </h4>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-end gap-2.5">
              {extraTrustBadges.map((badge) => (
                <span
                  key={badge}
                  className="px-3.5 py-1.5 rounded-full bg-navy-800 text-slate-200 text-xs font-semibold border border-navy-700/80 flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
