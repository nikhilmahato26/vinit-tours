import React from "react";
import { Link } from "react-router-dom";
import { 
  Car, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ChevronRight,
  Heart
} from "lucide-react";
import { businessContact } from "../data/navigation";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 text-white border-t border-navy-800/80 pt-16 pb-24 lg:pb-12 relative overflow-hidden">
      {/* Decorative top accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-navy-900 via-gold-500 to-navy-900 absolute top-0 left-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo/vinit-logo.png"
                alt="Vinit Tours & Travels Logo"
                className="w-12 h-12 rounded-full object-cover shadow-md border-2 border-gold-400/60 bg-navy-900"
              />
              <div>
                <h3 className="text-xl font-display font-black tracking-tight text-white">
                  VINIT TOURS <span className="text-gold-400">&amp; TRAVELS</span>
                </h3>
              </div>
            </div>

            <p className="text-sm font-semibold text-gold-400">
              Safe Journey. Comfortable Journey.
            </p>

            <p className="text-xs text-slate-400 leading-relaxed">
              Your premier cab, taxi, and complete travel booking partner in Ahmedabad, Gujarat. Committed to passenger safety, transparent billing, and 24x7 service excellence.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>GPS Tracked • Verified Chauffeurs</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold-400" />
                <span>24×7 Operations &amp; Booking Support</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-display font-bold uppercase tracking-wider text-gold-400 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link to="/" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  Services
                </Link>
              </li>
              <li>
                <Link to="/fleet" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  Fleet (Dzire, Ertiga &amp; More)
                </Link>
              </li>
              <li>
                <a href="/#airport" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  Airport Transfer
                </a>
              </li>
              <li>
                <a href="/#outstation" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  Outstation
                </a>
              </li>
              <li>
                <a href="/#corporate" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  Corporate Travel
                </a>
              </li>
              <li>
                <Link to="/booking?service=Hotel%20Booking" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  Hotel Booking
                </Link>
              </li>
              <li>
                <Link to="/booking?service=Flight%20Booking" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  Flight Booking
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-display font-bold uppercase tracking-wider text-gold-400 mb-5">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link to="/booking?service=One%20Way%20Taxi" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  One Way Taxi
                </Link>
              </li>
              <li>
                <Link to="/booking?service=Round%20Trip%20Taxi" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  Round Trip Taxi
                </Link>
              </li>
              <li>
                <Link to="/booking?service=Outstation%20Taxi" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  Outstation Taxi
                </Link>
              </li>
              <li>
                <Link to="/booking?service=Airport%20Transfer" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  Airport Transfer
                </Link>
              </li>
              <li>
                <Link to="/booking?service=Corporate%20Travel" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  Corporate Travel
                </Link>
              </li>
              <li>
                <Link to="/booking?service=Side%20Seeing" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  Side Seeing
                </Link>
              </li>
              <li>
                <Link to="/booking?service=Marriage%20%2F%20Family%20Function" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  Marriage &amp; Family Travel
                </Link>
              </li>
              <li>
                <Link to="/booking?service=Hotel%20Booking" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  Hotel Booking
                </Link>
              </li>
              <li>
                <Link to="/booking?service=Flight%20Booking" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  Flight Booking
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-sm font-display font-bold uppercase tracking-wider text-gold-400 mb-5">
              Contact Us
            </h4>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <a href={`tel:${businessContact.allPhones[0]}`} className="block hover:text-gold-400 font-semibold text-white">
                    {businessContact.allPhones[0]}
                  </a>
                  <a href={`tel:${businessContact.allPhones[1]}`} className="block hover:text-gold-400">
                    {businessContact.allPhones[1]}
                  </a>
                  <a href={`tel:${businessContact.allPhones[2]}`} className="block hover:text-gold-400">
                    {businessContact.allPhones[2]}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-2">
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <a href={`mailto:${businessContact.email}`} className="hover:text-gold-400">
                  {businessContact.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-2">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  {businessContact.fullAddress}
                </span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={`tel:${businessContact.primaryPhone}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Call {businessContact.primaryPhone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-navy-800 text-center text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Vinit Tours &amp; Travels. All Rights Reserved.</p>
          <p className="text-slate-500 flex items-center justify-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for seamless travels in Ahmedabad &amp; beyond</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
