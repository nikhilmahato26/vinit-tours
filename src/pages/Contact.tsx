import React from "react";
import { Helmet } from "react-helmet-async";
import { Contact } from "../components/Contact";
import { 
  Phone, 
  MapPin, 
  Sparkles, 
  Clock 
} from "lucide-react";
import { businessContact } from "../data/navigation";

export const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us — Vinit Tours &amp; Travels | Ahmedabad, Gujarat</title>
        <meta
          name="description"
          content="Contact Vinit Tours &amp; Travels Ahmedabad: Call 8200393678 / 9574710357 / 7043120893, email vinit5p4308@gmail.com, 24x7 cab bookings."
        />
      </Helmet>

      {/* Banner */}
      <section className="bg-navy-950 text-white py-16 sm:py-20 relative overflow-hidden border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/15 border border-gold-400/30 text-gold-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Phone className="w-3.5 h-3.5 text-gold-400" />
            <span>Customer Desk 24×7</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight mb-4">
            CONNECT WITH US
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Directly connect with our booking dispatch team for local rides, airport shuttles, corporate accounts, or outstation tours.
          </p>
        </div>
      </section>

      {/* Contact Component with 3 Large CTAs & Official Card */}
      <Contact />
    </>
  );
};
