import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowRightCircle, 
  Repeat, 
  Compass, 
  PlaneTakeoff, 
  Briefcase, 
  MapPin, 
  HeartHandshake, 
  Hotel, 
  Ticket,
  ChevronRight,
  CheckCircle2
} from "lucide-react";
import { coreServices } from "../data/services";

const serviceIcons: Record<string, React.ReactNode> = {
  ArrowRightCircle: <ArrowRightCircle className="w-7 h-7" />,
  Repeat: <Repeat className="w-7 h-7" />,
  Compass: <Compass className="w-7 h-7" />,
  PlaneTakeoff: <PlaneTakeoff className="w-7 h-7" />,
  Briefcase: <Briefcase className="w-7 h-7" />,
  MapPin: <MapPin className="w-7 h-7" />,
  HeartHandshake: <HeartHandshake className="w-7 h-7" />,
  Hotel: <Hotel className="w-7 h-7" />,
  Ticket: <Ticket className="w-7 h-7" />,
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-400/30 text-gold-700 text-xs font-bold uppercase tracking-wider mb-3">
            Comprehensive Travel Solutions
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-navy-900 tracking-tight mb-4">
            OUR SERVICES
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From local city cabs to seamless outstation trips, airport pickups, and full travel bookings, Vinit Tours &amp; Travels offers dependable, top-tier service tailored to every journey.
          </p>
        </div>

        {/* 9 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {coreServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="bg-white rounded-3xl p-7 border border-slate-200/80 hover:border-gold-400/60 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-navy-900 text-gold-400 flex items-center justify-center shadow-md shadow-navy-900/10 group-hover:bg-gradient-to-br group-hover:from-gold-500 group-hover:to-gold-600 group-hover:text-navy-950 transition-all duration-300">
                    {serviceIcons[service.icon]}
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-sm font-semibold text-slate-700 mb-2">
                  {service.shortDesc}
                </p>

                <p className="text-xs text-slate-500 leading-relaxed mb-5">
                  {service.longDesc}
                </p>

                <div className="space-y-1.5 mb-6 pt-3 border-t border-slate-100">
                  {service.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to={`/booking?service=${encodeURIComponent(service.title)}`}
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-navy-900 text-navy-900 hover:text-white font-semibold text-xs tracking-wide transition-all group-hover:bg-navy-900 group-hover:text-white"
                >
                  <span>{service.ctaText}</span>
                  <ChevronRight className="w-4 h-4 text-gold-400 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
