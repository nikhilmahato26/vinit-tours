import React from "react";
import { Phone, MessageSquare, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { businessContact, quickWhatsAppMessage } from "../data/navigation";

export const StickyMobileBar: React.FC = () => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-navy-950/95 backdrop-blur-md border-t border-navy-800 p-2.5 px-4 shadow-[0_-10px_25px_rgba(0,0,0,0.5)]">
      <div className="grid grid-cols-3 gap-2">
        {/* CALL */}
        <a
          href={`tel:${businessContact.primaryPhone}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-navy-800 active:bg-navy-700 text-white font-bold text-xs border border-navy-700 transition-colors"
          id="mobile-sticky-call"
        >
          <Phone className="w-4 h-4 text-gold-400 mb-0.5" />
          <span>CALL</span>
        </a>

        {/* BOOK NOW */}
        <Link
          to="/booking"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gold-500 active:bg-gold-400 text-navy-950 font-black text-xs shadow-md shadow-gold-500/20"
          id="mobile-sticky-book"
        >
          <Calendar className="w-4 h-4 text-navy-950 mb-0.5" />
          <span>BOOK CAB</span>
        </Link>

        {/* WHATSAPP */}
        <a
          href={`https://wa.me/91${businessContact.primaryPhone}?text=${quickWhatsAppMessage("general")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-600 active:bg-emerald-500 text-white font-bold text-xs shadow-md shadow-emerald-600/20"
          id="mobile-sticky-whatsapp"
        >
          <MessageSquare className="w-4 h-4 text-white mb-0.5" />
          <span>WHATSAPP</span>
        </a>
      </div>
    </div>
  );
};
