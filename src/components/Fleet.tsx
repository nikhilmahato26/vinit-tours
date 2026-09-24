import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Car, 
  Info, 
  Receipt, 
  Milestone, 
  ShieldCheck, 
  Sparkles,
  CheckCircle2 
} from "lucide-react";
import { vehiclesData, Vehicle } from "../data/vehicles";
import { VehicleCard } from "./VehicleCard";
import { fareNotes } from "../data/pricing";

export const Fleet: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Vehicles (9)" },
    { id: "sedan", label: "Sedans (Dzire, Aura)" },
    { id: "suv", label: "SUVs & MPVs (Ertiga, Crysta, Marazzo)" },
    { id: "tempo", label: "Tempo Travellers & Urbania" },
  ];

  const filteredVehicles = vehiclesData.filter((v) => {
    if (filter === "all") return true;
    if (filter === "sedan") return v.category === "Sedan";
    if (filter === "suv") return v.category === "SUV / MPV" || v.category === "Luxury MPV";
    if (filter === "tempo") return v.category === "Tempo Traveller" || v.category === "Luxury Van";
    return true;
  });

  return (
    <section id="fleet" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy-900 text-gold-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Car className="w-3.5 h-3.5 text-gold-400" />
            <span>Well Maintained Fleet</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-navy-900 tracking-tight mb-4">
            OUR FLEET
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Choose from well-maintained sedans, spacious family SUVs, luxury Innova Crystas, and large Tempo Travellers driven by courteous, verified chauffeurs.
          </p>
        </div>

        {/* Featured Price Highlight Banner */}
        <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 rounded-3xl p-6 sm:p-8 mb-12 border border-gold-500/40 text-white shadow-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gold-500/20 border border-gold-400/40 flex items-center justify-center text-gold-400 flex-shrink-0">
                <Sparkles className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold text-gold-400 uppercase tracking-widest">
                  Transparent Base Pricing
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                  DZIRE starting @ <span className="text-gold-400">₹12 / KM*</span> &amp; ERTIGA @ <span className="text-gold-400">₹14 / KM*</span>
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  For Innova Crysta, Aura, Marazzo, Tempo Travellers &amp; Urbania, fares are customized based on route &amp; duration.
                </p>
              </div>
            </div>

            {/* Crucial Pricing Note Box */}
            <div className="bg-navy-800/90 border border-navy-700 p-4 rounded-2xl text-xs text-slate-300 max-w-md w-full">
              <div className="flex items-start gap-2 mb-1.5">
                <Info className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span className="font-bold text-white uppercase tracking-wider text-[11px]">
                  Official Pricing Disclaimer:
                </span>
              </div>
              <p className="font-semibold text-gold-300 mb-1">
                • Price applicable as per minimum KM.
              </p>
              <p className="font-semibold text-gold-300">
                • Toll, Parking &amp; State Permit extra.
              </p>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                filter === cat.id
                  ? "bg-navy-900 text-gold-400 shadow-md shadow-navy-900/20 scale-105"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>

        {/* Important Fare / Booking Notes Dedicated Box */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold text-navy-800 uppercase tracking-widest">
              Terms &amp; Clarity
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-navy-900 mt-1">
              IMPORTANT FARE &amp; BOOKING NOTES
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              We believe in 100% transparent communication without hidden surprises. Please review our standard travel policies:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fareNotes.map((note) => (
              <div
                key={note.title}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-gold-500/15 text-gold-600 flex items-center justify-center mb-3">
                    <Receipt className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-display font-bold text-navy-900 mb-2">
                    {note.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {note.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
