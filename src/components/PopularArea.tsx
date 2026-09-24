import React from "react";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Navigation, 
  Compass, 
  CheckCircle2, 
  ArrowUpRight 
} from "lucide-react";
import { serviceCoverage } from "../data/pricing";

export const PopularArea: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy-900 text-gold-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Navigation className="w-3.5 h-3.5 text-gold-400" />
            <span>Service Coverage Area</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-navy-900 tracking-tight mb-4">
            {serviceCoverage.headline}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Headquartered in <strong>{serviceCoverage.primaryHub}</strong>, we provide punctual local taxi service across the metropolitan area, along with trusted outstation routes connecting major hubs in Gujarat, Rajasthan, and Maharashtra.
          </p>
        </div>

        {/* 3 Region Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {serviceCoverage.regions.map((region, idx) => (
            <motion.div
              key={region.state}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`rounded-3xl p-7 border flex flex-col justify-between transition-all duration-300 ${
                idx === 0 
                  ? "bg-navy-900 text-white border-gold-500/40 shadow-xl" 
                  : "bg-slate-50 text-slate-900 border-slate-200 shadow-sm"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                    idx === 0 ? "bg-gold-500/20 text-gold-400 border border-gold-400/30" : "bg-white text-navy-900 border border-slate-200"
                  }`}>
                    {idx === 0 ? "Primary Hub" : "Regional Route"}
                  </span>
                  <MapPin className={`w-5 h-5 ${idx === 0 ? "text-gold-400" : "text-navy-700"}`} />
                </div>

                <h3 className={`text-xl font-display font-extrabold mb-3 ${idx === 0 ? "text-white" : "text-navy-900"}`}>
                  {region.state}
                </h3>

                <p className={`text-xs leading-relaxed mb-6 ${idx === 0 ? "text-slate-300" : "text-slate-600"}`}>
                  {region.description}
                </p>

                <div className="mb-6">
                  <span className={`text-[11px] font-bold uppercase tracking-wider block mb-2 ${idx === 0 ? "text-gold-400" : "text-slate-500"}`}>
                    Popular Destinations / Stops:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {region.cities.map((city) => (
                      <span
                        key={city}
                        className={`text-xs px-2.5 py-1 rounded-lg font-medium ${
                          idx === 0 
                            ? "bg-navy-800 text-slate-200 border border-navy-700" 
                            : "bg-white text-slate-700 border border-slate-200"
                        }`}
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className={`pt-4 border-t ${idx === 0 ? "border-navy-800" : "border-slate-200"} flex items-center justify-between text-xs font-semibold`}>
                <span className={idx === 0 ? "text-gold-400" : "text-navy-900"}>
                  {idx === 0 ? "24x7 Instant Dispatch" : "Advance Outstation Booking"}
                </span>
                <CheckCircle2 className={`w-4 h-4 ${idx === 0 ? "text-gold-400" : "text-emerald-600"}`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
