import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Briefcase, 
  Building2, 
  Users, 
  FileText, 
  Clock, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import { businessContact, quickWhatsAppMessage } from "../data/navigation";

export const CorporateTravel: React.FC = () => {
  const corporateServices = [
    { title: "Corporate Visits", desc: "Seamless executive transport for senior leaders and directors." },
    { title: "Business Meetings", desc: "Punctual point-to-point transfers across Ahmedabad & GIFT City." },
    { title: "Client Transportation", desc: "First-class impression with premium clean cars & suited chauffeurs." },
    { title: "Airport Transfers", desc: "Priority curbside flight meet & greet with placard support." },
    { title: "Local Business Travel", desc: "Full day dedicated cabs for multi-client site inspections." },
    { title: "Outstation Business Travel", desc: "Comfortable highway sedans & MPVs for industrial visits across Gujarat." },
  ];

  return (
    <section id="corporate" className="py-20 lg:py-28 bg-navy-950 text-white relative overflow-hidden">
      {/* Decorative architectural grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#132c6315_1px,transparent_1px),linear-gradient(to_bottom,#132c6315_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/15 border border-gold-400/30 text-gold-400 text-xs font-bold uppercase tracking-wider mb-4">
              <Briefcase className="w-3.5 h-3.5 text-gold-400" />
              <span>Executive Mobility Partner</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white mb-6">
              CORPORATE TRAVEL
            </h2>

            <p className="text-base text-slate-300 leading-relaxed mb-6">
              Providing Ahmedabad, Gandhinagar, and GIFT City companies with dependable, executive transportation. Transparent monthly billing, GST invoices, and dedicated corporate priority bookings.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <ShieldCheck className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <span>Verified, Background-Checked Chauffeurs</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <FileText className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <span>Valid GST Invoicing &amp; Customized Billing Terms</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <Building2 className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <span>Special Fleet Coverage for GIFT City &amp; Sanand Industrial Area</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/booking?service=Corporate%20Travel"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-sm uppercase tracking-wider transition-all shadow-lg shadow-gold-500/25 group"
                id="btn-corporate-enquiry"
              >
                <span>ENQUIRE FOR CORPORATE TRAVEL</span>
                <ArrowRight className="w-4 h-4 text-navy-950 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Corporate Highlights Grid + Photo (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            {/* GIFT City Corporate Photo */}
            <div className="rounded-3xl overflow-hidden mb-6 border border-navy-800 shadow-2xl relative">
              <img
                src="/images/services/corporate-travel.jpg"
                alt="Corporate Travel GIFT City Ahmedabad"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6">
                <span className="text-xs font-bold text-gold-400 uppercase tracking-widest">
                  GIFT City &amp; Business Hub Chauffeurs
                </span>
              </div>
            </div>

            {/* 6 Requested Corporate Offerings */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {corporateServices.map((item) => (
                <div
                  key={item.title}
                  className="p-4 rounded-2xl bg-navy-900/80 border border-navy-800/80 hover:border-gold-500/40 transition-colors"
                >
                  <div className="flex items-center gap-2 text-white font-display font-bold text-sm mb-1">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed pl-6">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
