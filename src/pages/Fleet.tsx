import React from "react";
import { Helmet } from "react-helmet-async";
import { Fleet } from "../components/Fleet";
import { BookingForm } from "../components/BookingForm";
import { 
  Car, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  Receipt 
} from "lucide-react";

export const FleetPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Our Fleet — Dzire, Ertiga, Innova Crysta, Urbania — 17 Seater | Vinit Tours &amp; Travels</title>
        <meta
          name="description"
          content="Choose from our premium fleet: Maruti Dzire @ ₹12/KM*, Ertiga @ ₹14/KM*, Innova Crysta, Aura, Marazzo, Urbania — 17 Seater &amp; Tempo Travellers in Ahmedabad."
        />
      </Helmet>

      {/* Fleet Banner */}
      <section className="bg-navy-950 text-white py-16 sm:py-24 relative overflow-hidden border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/15 border border-gold-400/30 text-gold-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Car className="w-3.5 h-3.5 text-gold-400" />
            <span>Modern &amp; Well Maintained Fleet</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-white tracking-tight mb-4">
            VEHICLES &amp; TRANSPARENT FARES
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From fuel-efficient city sedans to spacious luxury MPVs and heavy group tourist coaches, all maintained with pristine cleanliness.
          </p>
        </div>
      </section>

      {/* Fleet Catalog */}
      <Fleet />

      {/* Booking Form */}
      <section className="py-20 lg:py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookingForm />
        </div>
      </section>
    </>
  );
};
