import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  HeartHandshake, 
  Users, 
  Sparkles, 
  Calendar, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Car
} from "lucide-react";
import { businessContact, quickWhatsAppMessage } from "../data/navigation";

export const FamilyTravel: React.FC = () => {
  const occasionServices = [
    { title: "Wedding Transportation", desc: "Decorated luxury cars for bride & groom, plus coordinated fleets for barat & family." },
    { title: "Family Functions", desc: "Smooth transit for ring ceremonies, anniversaries, birthdays, and puja gatherings." },
    { title: "Group Travel", desc: "High-capacity Tempo Travellers and Urbania mini-coaches for extended family holidays." },
    { title: "Guest Transportation", desc: "Airport & railway station guest pickups with dedicated signage and timely dispatch." },
    { title: "Event Transportation", desc: "Full-day standby vehicles for destination weddings in Ahmedabad, Gandhinagar & Udaipur." },
  ];

  const vehicleOptions = [
    { name: "Dzire", cap: "4 Seater Sedan", note: "VIP Guest & Family Transit" },
    { name: "Ertiga", cap: "6 Seater SUV", note: "Comfortable Family Group" },
    { name: "Innova Crysta", cap: "6/7 Seater Luxury", note: "Plush Captain Chairs" },
    { name: "Tempo Traveller", cap: "14/17/25 Seater", note: "Barat & Group Shuttle" },
    { name: "Urbania — 17 Seater", cap: "17 Seater Van", note: "VIP Luxury Transporter" },
  ];

  return (
    <section id="marriage-travel" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text & Vehicle Badges */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-400/30 text-rose-700 text-xs font-bold uppercase tracking-wider mb-4">
              <HeartHandshake className="w-4 h-4 text-rose-600" />
              <span>Weddings &amp; Family Celebrations</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-navy-900 tracking-tight mb-6">
              TRAVEL FOR EVERY SPECIAL OCCASION
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
              Organizing wedding or family travel in Ahmedabad and Gujarat? Vinit Tours &amp; Travels provides end-to-end transportation management so you can celebrate worry-free.
            </p>

            {/* 5 Occasion Categories */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {occasionServices.map((svc) => (
                <div key={svc.title} className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-2 font-bold text-navy-900 text-xs mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-rose-500 flex-shrink-0" />
                    <span>{svc.title}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 pl-5 leading-tight">
                    {svc.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Multiple Vehicle Options List */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 mb-8 shadow-sm">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">
                Featured Fleet Options for Events:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {vehicleOptions.map((v) => (
                  <div key={v.name} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-bold text-xs text-navy-900">{v.name}</div>
                    <div className="text-[11px] text-gold-700 font-semibold">{v.cap}</div>
                    <div className="text-[10px] text-slate-400 truncate">{v.note}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Required CTA: PLAN YOUR GROUP TRAVEL */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/booking?service=Marriage%20%2F%20Family%20Function"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-navy-900 hover:bg-gold-500 text-white hover:text-navy-950 font-bold text-sm uppercase tracking-wider transition-all shadow-md group"
                id="btn-plan-group-travel"
              >
                <span>PLAN YOUR GROUP TRAVEL</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={`https://wa.me/91${businessContact.primaryPhone}?text=${quickWhatsAppMessage("wedding")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-sm border border-emerald-300 transition-colors"
              >
                <span>Wedding Quote on WhatsApp</span>
              </a>
            </div>
          </motion.div>

          {/* Right Visual Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
              <img
                src="/images/services/wedding-travel.jpg"
                alt="Wedding Fleet Decoration Ahmedabad Vinit Tours"
                className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md">
                <div className="flex items-center gap-2 text-xs font-bold text-navy-900 mb-1">
                  <HeartHandshake className="w-4 h-4 text-rose-500" />
                  <span>Grand Shubh Vivah Palace &amp; Venue Transport</span>
                </div>
                <p className="text-xs text-slate-500">
                  Multiple vehicle packages, groom car decoration, guest shuttles, and luxury Urbania mini-coaches.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
