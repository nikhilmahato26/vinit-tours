import React from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { BookingForm } from "../components/BookingForm";
import { 
  Calendar, 
  Sparkles, 
  Phone, 
  ShieldCheck, 
  Clock, 
  CheckCircle2 
} from "lucide-react";
import { businessContact } from "../data/navigation";

export const BookingPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialService = searchParams.get("service") || "One Way Taxi";
  const initialVehicle = searchParams.get("vehicle") || "Dzire";

  return (
    <>
      <Helmet>
        <title>Book a Cab — Vinit Tours &amp; Travels | Instant Booking &amp; WhatsApp</title>
        <meta
          name="description"
          content="Reserve your taxi with Vinit Tours &amp; Travels Ahmedabad. Dzire @ ₹12/KM*, Ertiga @ ₹14/KM*, Innova Crysta, airport drops, and outstation rides."
        />
      </Helmet>

      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-16 sm:py-20 relative overflow-hidden border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/15 border border-gold-400/30 text-gold-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Calendar className="w-3.5 h-3.5 text-gold-400" />
            <span>Fast &amp; Transparent Booking</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight mb-4">
            RESERVE YOUR JOURNEY
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Fill out your trip details below. Receive quick confirmation and instant fare calculation directly on your phone.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-xs text-slate-300">
            <span className="flex items-center gap-1.5 bg-navy-900 px-3 py-1.5 rounded-full border border-navy-800">
              <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
              Dzire @ ₹12/KM* • Ertiga @ ₹14/KM*
            </span>
            <span className="flex items-center gap-1.5 bg-navy-900 px-3 py-1.5 rounded-full border border-navy-800">
              <Clock className="w-3.5 h-3.5 text-gold-400" />
              24×7 Customer Dispatch
            </span>
            <span className="flex items-center gap-1.5 bg-navy-900 px-3 py-1.5 rounded-full border border-navy-800">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
              Zero Hidden Charges
            </span>
          </div>
        </div>
      </section>

      {/* Booking Form Component */}
      <section className="py-16 sm:py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookingForm 
            initialService={initialService}
            initialVehicle={initialVehicle}
          />
        </div>
      </section>
    </>
  );
};
