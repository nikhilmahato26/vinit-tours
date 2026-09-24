import React from "react";
import { Helmet } from "react-helmet-async";
import { Services } from "../components/Services";
import { TravelServices } from "../components/TravelServices";
import { BookingForm } from "../components/BookingForm";
import { 
  Sparkles, 
  Phone, 
  MessageSquare,
  ShieldCheck
} from "lucide-react";
import { businessContact, quickWhatsAppMessage } from "../data/navigation";

export const ServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Our Services — Vinit Tours &amp; Travels | Ahmedabad Cab &amp; Travel Solutions</title>
        <meta
          name="description"
          content="Explore one way taxi, round trip, outstation cabs, airport transfers, corporate travels, sightseeing, hotel &amp; flight bookings in Ahmedabad, Gujarat."
        />
      </Helmet>

      {/* Services Header Banner */}
      <section className="bg-navy-950 text-white py-16 sm:py-24 relative overflow-hidden border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/15 border border-gold-400/30 text-gold-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Comprehensive Travel Offerings</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-white tracking-tight mb-4">
            OUR TRAVEL &amp; CAB SERVICES
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Reliable travel. Comfortable journeys. Professional service across Ahmedabad, Gujarat, and selected outstation destinations.
          </p>
        </div>
      </section>

      {/* Main Core Services Grid */}
      <Services />

      {/* Complete Travel Solutions */}
      <TravelServices />

      {/* Booking Form */}
      <section className="py-20 lg:py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookingForm />
        </div>
      </section>
    </>
  );
};
