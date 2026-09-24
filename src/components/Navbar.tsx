import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Phone, 
  MessageSquare, 
  Menu, 
  X, 
  MapPin, 
  Car, 
  ChevronDown, 
  Clock, 
  Calendar 
} from "lucide-react";
import { businessContact, navItems } from "../data/navigation";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [phoneDropdownOpen, setPhoneDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setPhoneDropdownOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Top Notification / Contact Bar */}
      <div className="bg-navy-950 text-slate-300 text-xs py-2 px-4 border-b border-navy-800/80">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <span className="inline-flex items-center gap-1.5 text-gold-400 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
              </span>
              24×7 Cab & Travel Service
            </span>
            <span className="hidden sm:inline-block text-slate-500">•</span>
            <span className="flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-gold-400" />
              Ahmedabad, Gujarat
            </span>
            <span className="hidden sm:inline-block text-slate-500">•</span>
            <span className="hidden lg:flex items-center gap-1 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-gold-400" />
              Instant Pickup & Outstation Booking
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-slate-400 hidden sm:inline">Call Us:</span>
              <a 
                href={`tel:${businessContact.primaryPhone}`} 
                className="text-white hover:text-gold-400 font-semibold transition-colors flex items-center gap-1"
                id="header-phone-primary"
              >
                <Phone className="w-3 h-3 text-gold-400" />
                {businessContact.primaryPhone}
              </a>
              <span className="text-slate-600 hidden md:inline">|</span>
              <a 
                href={`tel:${businessContact.secondaryPhones[0]}`} 
                className="text-slate-300 hover:text-gold-400 transition-colors hidden md:inline"
                id="header-phone-secondary-1"
              >
                {businessContact.secondaryPhones[0]}
              </a>
            </div>

            <a 
              href={`https://wa.me/91${businessContact.primaryPhone}?text=${encodeURIComponent("Hello Vinit Tours & Travels, I would like to enquire about a cab booking.")}`}
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-emerald-600/30 hover:bg-emerald-600/40 text-emerald-300 px-2.5 py-0.5 rounded-full border border-emerald-500/40 flex items-center gap-1 text-xs transition-colors"
              id="header-whatsapp-pill"
            >
              <MessageSquare className="w-3 h-3 text-emerald-400" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-navy-900/95 backdrop-blur-md shadow-lg shadow-navy-950/20 py-3 border-b border-navy-800"
            : "bg-navy-900 py-4 border-b border-navy-800/50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand Wordmark */}
          <Link to="/" className="flex items-center gap-3 group" id="brand-logo-link">
            <div className="relative">
              <img
                src="/images/logo/vinit-logo.png"
                alt="Vinit Tours & Travels Ahmedabad Official Logo"
                className="w-11 h-11 sm:w-13 sm:h-13 rounded-full object-cover shadow-lg shadow-navy-950/40 border-2 border-gold-400/80 group-hover:scale-105 group-hover:border-gold-300 transition-all duration-300 bg-navy-950"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-display font-extrabold tracking-tight text-white">
                  VINIT
                </span>
                <span className="text-xl sm:text-2xl font-display font-light tracking-wide text-gold-400">
                  TOURS
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] sm:text-xs font-medium tracking-widest text-slate-300 uppercase">
                  & Travels • Ahmedabad
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              to="/"
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                location.pathname === "/" ? "text-gold-400 bg-navy-800/70" : "text-slate-200 hover:text-white hover:bg-navy-800/40"
              }`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                location.pathname === "/services" ? "text-gold-400 bg-navy-800/70" : "text-slate-200 hover:text-white hover:bg-navy-800/40"
              }`}
            >
              Services
            </Link>
            <Link
              to="/fleet"
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                location.pathname === "/fleet" ? "text-gold-400 bg-navy-800/70" : "text-slate-200 hover:text-white hover:bg-navy-800/40"
              }`}
            >
              Our Fleet
            </Link>
            <a
              href="/#airport"
              className="px-3 py-2 text-sm font-medium rounded-lg text-slate-200 hover:text-white hover:bg-navy-800/40 transition-colors"
            >
              Airport
            </a>
            <a
              href="/#outstation"
              className="px-3 py-2 text-sm font-medium rounded-lg text-slate-200 hover:text-white hover:bg-navy-800/40 transition-colors"
            >
              Outstation
            </a>
            <a
              href="/#corporate"
              className="px-3 py-2 text-sm font-medium rounded-lg text-slate-200 hover:text-white hover:bg-navy-800/40 transition-colors"
            >
              Corporate
            </a>
            <a
              href="/#sightseeing"
              className="px-3 py-2 text-sm font-medium rounded-lg text-slate-200 hover:text-white hover:bg-navy-800/40 transition-colors"
            >
              Sightseeing
            </a>
            <Link
              to="/contact"
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                location.pathname === "/contact" ? "text-gold-400 bg-navy-800/70" : "text-slate-200 hover:text-white hover:bg-navy-800/40"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right Action Area */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Call Numbers Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setPhoneDropdownOpen(!phoneDropdownOpen)}
                className="flex items-center gap-2 bg-navy-800/80 hover:bg-navy-800 text-slate-200 px-3.5 py-2 rounded-xl text-sm border border-navy-700 transition-colors"
                id="call-dropdown-btn"
              >
                <Phone className="w-4 h-4 text-gold-400" />
                <span className="font-semibold text-white">{businessContact.primaryPhone}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              <AnimatePresence>
                {phoneDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-2 w-64 bg-navy-900 border border-navy-700 rounded-xl shadow-2xl p-3 z-50"
                  >
                    <p className="text-xs font-semibold text-gold-400 uppercase tracking-wider mb-2">
                      24×7 Direct Lines
                    </p>
                    <div className="space-y-1.5">
                      {businessContact.allPhones.map((phone, idx) => (
                        <a
                          key={phone}
                          href={`tel:${phone}`}
                          className="flex items-center justify-between p-2 rounded-lg bg-navy-800/60 hover:bg-navy-700/80 text-white text-sm font-medium transition-colors"
                        >
                          <span className="flex items-center gap-2">
                            <Phone className="w-3.5 h-3.5 text-gold-400" />
                            {phone}
                          </span>
                          <span className="text-[10px] text-slate-400 uppercase">
                            {idx === 0 ? "Primary" : `Line ${idx + 1}`}
                          </span>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Book Now Button */}
            <Link
              to="/booking"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all text-sm"
              id="nav-book-btn"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Cab</span>
            </Link>
          </div>

          {/* Mobile Menu & Quick Call Buttons */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${businessContact.primaryPhone}`}
              className="p-2 rounded-lg bg-navy-800 text-gold-400 border border-navy-700"
              aria-label="Call Now"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-navy-800 text-slate-200 border border-navy-700 focus:outline-none"
              aria-label="Toggle navigation menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-gold-400" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-navy-900 border-b border-navy-800 px-4 pt-3 pb-6 shadow-2xl overflow-hidden"
            >
              <div className="space-y-1 mb-4">
                <Link
                  to="/"
                  className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-white hover:bg-navy-800"
                >
                  Home
                </Link>
                <Link
                  to="/services"
                  className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-white hover:bg-navy-800"
                >
                  Services
                </Link>
                <Link
                  to="/fleet"
                  className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-white hover:bg-navy-800"
                >
                  Our Fleet (Dzire, Ertiga & More)
                </Link>
                <a
                  href="/#airport"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-white hover:bg-navy-800"
                >
                  Airport Transfers
                </a>
                <a
                  href="/#outstation"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-white hover:bg-navy-800"
                >
                  Outstation Taxi
                </a>
                <a
                  href="/#corporate"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-white hover:bg-navy-800"
                >
                  Corporate Travel
                </a>
                <a
                  href="/#sightseeing"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-white hover:bg-navy-800"
                >
                  Sightseeing & Local Tours
                </a>
                <Link
                  to="/contact"
                  className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-white hover:bg-navy-800"
                >
                  Contact Us
                </Link>
              </div>

              {/* Mobile Phone Contacts */}
              <div className="bg-navy-850 p-4 rounded-xl border border-navy-700/60 mb-4">
                <p className="text-xs font-semibold text-gold-400 uppercase tracking-wider mb-2">
                  Call Us Directly:
                </p>
                <div className="grid grid-cols-1 gap-2">
                  {businessContact.allPhones.map((num) => (
                    <a
                      key={num}
                      href={`tel:${num}`}
                      className="flex items-center justify-between p-2 rounded-lg bg-navy-800 text-white font-medium text-sm"
                    >
                      <span className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-gold-400" />
                        {num}
                      </span>
                      <span className="text-xs text-gold-400 font-semibold">CALL</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Mobile Book Button */}
              <Link
                to="/booking"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-bold py-3 rounded-xl shadow-lg shadow-gold-500/20 text-center"
              >
                <Calendar className="w-5 h-5" />
                <span>BOOK A CAB NOW</span>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
