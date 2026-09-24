import React from "react";
import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Navigation, 
  Clock, 
  ShieldCheck, 
  ExternalLink,
  Car,
  Building,
  Bus,
  CheckCircle2
} from "lucide-react";
import { businessContact, quickWhatsAppMessage } from "../data/navigation";

export const Contact: React.FC = () => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Galaxy Mall, BRTS Bus Stop, 216/A, opp. jhansi ni rani, Satellite, Ahmedabad, Gujarat 380015")}`;

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy-900 text-gold-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Phone className="w-3.5 h-3.5 text-gold-400" />
            <span>Get in Touch 24×7</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-navy-900 tracking-tight mb-4">
            CONTACT VINIT TOURS &amp; TRAVELS
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Have questions about vehicle rates, airport timings, outstation packages, or group bookings? Reach our Ahmedabad team directly on call, WhatsApp, or visit our office.
          </p>
        </div>

        {/* 3 Large CTAs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* CALL NOW */}
          <a
            href={`tel:${businessContact.primaryPhone}`}
            className="flex items-center justify-between p-6 sm:p-8 rounded-3xl bg-navy-900 text-white hover:bg-navy-850 shadow-xl border border-navy-800 transition-all duration-300 group hover:-translate-y-1"
            id="large-cta-call"
          >
            <div>
              <span className="text-xs font-bold text-gold-400 uppercase tracking-widest block mb-1">
                24×7 Direct Line
              </span>
              <h3 className="text-2xl font-display font-extrabold text-white group-hover:text-gold-400 transition-colors">
                CALL NOW
              </h3>
              <p className="text-sm text-slate-300 font-semibold mt-1">
                {businessContact.primaryPhone}
              </p>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-navy-800 text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950 flex items-center justify-center transition-all">
              <Phone className="w-7 h-7" />
            </div>
          </a>

          {/* WHATSAPP */}
          <a
            href={`https://wa.me/91${businessContact.primaryPhone}?text=${quickWhatsAppMessage("general")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-6 sm:p-8 rounded-3xl bg-emerald-600 text-white hover:bg-emerald-500 shadow-xl transition-all duration-300 group hover:-translate-y-1"
            id="large-cta-whatsapp"
          >
            <div>
              <span className="text-xs font-bold text-emerald-200 uppercase tracking-widest block mb-1">
                Instant Chat &amp; Booking
              </span>
              <h3 className="text-2xl font-display font-extrabold text-white">
                WHATSAPP
              </h3>
              <p className="text-sm text-emerald-100 font-semibold mt-1">
                Instant Reply &amp; Fare Quote
              </p>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-emerald-700/60 text-white flex items-center justify-center transition-all">
              <MessageSquare className="w-7 h-7" />
            </div>
          </a>

          {/* GET DIRECTIONS */}
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-6 sm:p-8 rounded-3xl bg-white text-navy-900 hover:bg-slate-50 border border-slate-200 shadow-lg transition-all duration-300 group hover:-translate-y-1"
            id="large-cta-directions"
          >
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-1">
                Galaxy Mall, Satellite
              </span>
              <h3 className="text-2xl font-display font-extrabold text-navy-900 group-hover:text-navy-700 transition-colors">
                GET DIRECTIONS
              </h3>
              <p className="text-xs text-slate-600 font-semibold mt-1">
                Opp. Jhansi Ni Rani BRTS, Ahmedabad
              </p>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-slate-100 text-navy-900 group-hover:bg-navy-900 group-hover:text-gold-400 flex items-center justify-center transition-all">
              <Navigation className="w-7 h-7" />
            </div>
          </a>
        </div>

        {/* DEDICATED OFFICE ADDRESS SECTION WITH USER IMAGE */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl mb-16 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Real Office Photo */}
            <div className="lg:col-span-5 relative group">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 aspect-[4/5] max-h-[420px] w-full bg-slate-900">
                <img
                  src="/images/office/office-desk.jpg"
                  alt="Vinit Tours & Travels Office Desk Ahmedabad"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
                
                {/* Floating pill */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-navy-950/90 text-gold-400 text-xs font-bold uppercase tracking-wider border border-navy-700 backdrop-blur-sm">
                    Head Office &amp; Operations Desk
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-sm font-bold">Vinit Tours &amp; Travels Desk</p>
                  <p className="text-xs text-slate-300">24×7 Cab Booking &amp; Fleet Dispatch Center</p>
                </div>
              </div>
            </div>

            {/* Right: Detailed Office Address & Landmarks */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-400/30 text-gold-700 text-xs font-bold uppercase tracking-wider mb-2">
                  <Building className="w-3.5 h-3.5 text-gold-600" />
                  <span>Physical Office Address</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-navy-900">
                  Galaxy Mall Office, Ahmedabad
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Located in: <strong className="text-navy-900">Galaxy Mall office</strong>
                </p>
              </div>

              {/* Exact Address Box from Image 2 */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                      Full Postal Address:
                    </span>
                    <p className="text-base font-bold text-navy-900 leading-snug mt-1">
                      Galaxy Mall, BRTS Bus Stop, 216/A, opp. jhansi ni rani, Satellite, Ahmedabad, Gujarat 380015
                    </p>
                  </div>
                </div>

                {/* Transit info from screenshot */}
                <div className="pt-3 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="flex items-center gap-2 text-slate-700 font-medium">
                    <Bus className="w-4 h-4 text-gold-600 flex-shrink-0" />
                    <span>Directly Opp. Jhansi Ni Rani BRTS Stop</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 font-medium">
                    <Navigation className="w-4 h-4 text-navy-800 flex-shrink-0" />
                    <span>Ambawadi / IIM Road / Satellite Area</span>
                  </div>
                </div>
              </div>

              {/* Location Actions */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-navy-900 hover:bg-gold-500 text-white hover:text-navy-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md"
                  id="btn-office-google-maps"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={`tel:${businessContact.primaryPhone}`}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-navy-900 font-bold text-xs transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold-500" />
                  <span>Call Office Desk</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Details & Official Contact Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Official Visiting / Contact Card */}
          <div className="lg:col-span-6 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white rounded-3xl p-8 sm:p-10 border border-gold-500/40 shadow-2xl relative overflow-hidden">
            {/* Background design elements */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-gold-500/10 rounded-full blur-2xl" />
            
            <div className="flex items-center justify-between border-b border-navy-800 pb-6 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gold-500 flex items-center justify-center text-navy-950 shadow-md">
                  <Car className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-extrabold text-white">
                    Vinit Tours &amp; Travels
                  </h3>
                  <span className="text-xs text-gold-400 font-bold uppercase tracking-wider">
                    Ahmedabad, Gujarat
                  </span>
                </div>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gold-500/20 text-gold-300 border border-gold-500/30">
                Official Card
              </span>
            </div>

            <p className="text-xs text-slate-300 mb-6 italic">
              "Reliable Travel. Comfortable Journeys. Professional Service."
            </p>

            {/* Direct Contact Numbers */}
            <div className="space-y-4 mb-6">
              <div className="p-3.5 rounded-2xl bg-navy-850/80 border border-navy-700/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-gold-500/20 text-gold-400 flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Primary Booking Number</span>
                    <a href={`tel:${businessContact.allPhones[0]}`} className="text-base font-bold text-white hover:text-gold-400">
                      📞 {businessContact.allPhones[0]}
                    </a>
                  </div>
                </div>
                <a
                  href={`tel:${businessContact.allPhones[0]}`}
                  className="px-3 py-1 bg-gold-500 hover:bg-gold-400 text-navy-950 text-xs font-bold rounded-lg transition-colors"
                >
                  CALL
                </a>
              </div>

              <div className="p-3.5 rounded-2xl bg-navy-850/80 border border-navy-700/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-navy-700 text-slate-300 flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Secondary Line 1</span>
                    <a href={`tel:${businessContact.allPhones[1]}`} className="text-base font-bold text-white hover:text-gold-400">
                      📞 {businessContact.allPhones[1]}
                    </a>
                  </div>
                </div>
                <a
                  href={`tel:${businessContact.allPhones[1]}`}
                  className="px-3 py-1 bg-navy-700 hover:bg-navy-600 text-white text-xs font-bold rounded-lg transition-colors"
                >
                  CALL
                </a>
              </div>

              <div className="p-3.5 rounded-2xl bg-navy-850/80 border border-navy-700/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-navy-700 text-slate-300 flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Secondary Line 2</span>
                    <a href={`tel:${businessContact.allPhones[2]}`} className="text-base font-bold text-white hover:text-gold-400">
                      📞 {businessContact.allPhones[2]}
                    </a>
                  </div>
                </div>
                <a
                  href={`tel:${businessContact.allPhones[2]}`}
                  className="px-3 py-1 bg-navy-700 hover:bg-navy-600 text-white text-xs font-bold rounded-lg transition-colors"
                >
                  CALL
                </a>
              </div>

              <div className="p-3.5 rounded-2xl bg-navy-850/80 border border-navy-700/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-navy-700 text-gold-400 flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Official Email</span>
                    <a href={`mailto:${businessContact.email}`} className="text-sm font-semibold text-white hover:text-gold-400">
                      ✉️ {businessContact.email}
                    </a>
                  </div>
                </div>
                <a
                  href={`mailto:${businessContact.email}`}
                  className="px-3 py-1 bg-navy-700 hover:bg-navy-600 text-white text-xs font-bold rounded-lg transition-colors"
                >
                  EMAIL
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-navy-800 text-[11px] text-slate-400 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-gold-400" />
                Galaxy Mall, Satellite, Ahmedabad 380015
              </span>
              <span className="text-gold-400 font-semibold">24×7 Operating</span>
            </div>
          </div>

          {/* Quick FAQ / Travel Inquiries Advice */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-md">
            <span className="text-xs font-bold text-navy-900 uppercase tracking-widest block mb-2">
              Fast Track Assistance
            </span>
            <h3 className="text-2xl font-display font-extrabold text-navy-900 mb-6">
              Need an Urgent Cab Right Now?
            </h3>

            <div className="space-y-4 mb-8">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="font-bold text-sm text-navy-900 mb-1">
                  How quickly can a cab arrive in Ahmedabad?
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  For immediate city or airport pickups, our cabs are dispatched on priority, typically reaching within 20–30 minutes subject to traffic.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="font-bold text-sm text-navy-900 mb-1">
                  How is outstation distance calculated?
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Outstation journeys follow our standard minimum 300 KM per calendar day policy. Toll tax, parking and state entry permits are paid as actuals.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="font-bold text-sm text-navy-900 mb-1">
                  Do you arrange flights and hotel stays?
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Yes, Vinit Tours &amp; Travels offers complete domestic flight ticket assistance and hotel bookings across Gujarat, Rajasthan, and major destinations.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`https://wa.me/91${businessContact.primaryPhone}?text=${quickWhatsAppMessage("general")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-navy-900 hover:bg-gold-500 text-white hover:text-navy-950 font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-sm"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Chat with Operations Manager</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
