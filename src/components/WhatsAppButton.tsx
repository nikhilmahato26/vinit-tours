import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MessageSquare, 
  X, 
  Phone, 
  Send, 
  ChevronRight, 
  Plane, 
  Compass, 
  Hotel, 
  Ticket, 
  Sparkles 
} from "lucide-react";
import { businessContact, quickWhatsAppMessage } from "../data/navigation";

export const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState<string>(businessContact.primaryPhone);

  const quickPresets = [
    { label: "Cab Booking", icon: "🚕", query: "Hello Vinit Tours & Travels, I would like to enquire about a cab booking." },
    { label: "Airport Transfer", icon: "✈️", query: "Hello Vinit Tours & Travels, I need an airport pickup/drop. Please share availability and fare." },
    { label: "Outstation Taxi", icon: "🛣️", query: "Hello Vinit Tours & Travels, I need an outstation cab. Please share vehicle availability and fare." },
    { label: "Hotel Booking", icon: "🏨", query: "Hello Vinit Tours & Travels, I would like to enquire about hotel booking." },
    { label: "Flight Booking", icon: "🎫", query: "Hello Vinit Tours & Travels, I would like to enquire about flight booking." },
  ];

  return (
    <div className="fixed bottom-20 sm:bottom-8 right-5 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="mb-4 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-navy-900 p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-md">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm">
                    Vinit Tours &amp; Travels
                  </h4>
                  <span className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Online • Typically replies instantly
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-navy-800 transition-colors"
                aria-label="Close WhatsApp Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Select Contact Number */}
            <div className="p-4 bg-slate-50 border-b border-slate-200">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                Choose WhatsApp Support Line:
              </span>
              <div className="grid grid-cols-3 gap-1.5">
                {businessContact.allPhones.map((num, idx) => (
                  <button
                    key={num}
                    onClick={() => setSelectedNumber(num)}
                    className={`py-1.5 px-2 rounded-xl text-xs font-semibold transition-all ${
                      selectedNumber === num
                        ? "bg-navy-900 text-gold-400 shadow-sm"
                        : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    <span className="block text-[9px] uppercase opacity-70">
                      {idx === 0 ? "Primary" : `Line ${idx + 1}`}
                    </span>
                    {num.slice(0, 5)}...
                  </button>
                ))}
              </div>
            </div>

            {/* Quick preset message options */}
            <div className="p-4 space-y-2">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                Select Enquiry Topic:
              </span>
              {quickPresets.map((preset) => (
                <a
                  key={preset.label}
                  href={`https://wa.me/91${selectedNumber}?text=${encodeURIComponent(preset.query)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-200/80 hover:border-emerald-300 text-xs font-semibold text-slate-800 transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-base">{preset.icon}</span>
                    <span>{preset.label}</span>
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all" />
                </a>
              ))}
            </div>

            {/* Direct Open Button */}
            <div className="p-4 pt-0">
              <a
                href={`https://wa.me/91${selectedNumber}?text=${quickWhatsAppMessage("general")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md shadow-emerald-600/20"
              >
                <Send className="w-4 h-4" />
                <span>Chat Directly on WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative group w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl shadow-emerald-500/40 flex items-center justify-center transition-colors focus:outline-none focus:ring-4 focus:ring-emerald-400/30"
        aria-label="Open WhatsApp Consultation"
        id="floating-whatsapp-btn"
      >
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-30 pointer-events-none" />
        {isOpen ? (
          <X className="w-7 h-7 sm:w-8 sm:h-8" />
        ) : (
          <MessageSquare className="w-7 h-7 sm:w-8 sm:h-8" />
        )}
      </motion.button>
    </div>
  );
};
