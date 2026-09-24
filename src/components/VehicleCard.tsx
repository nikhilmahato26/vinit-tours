import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Users, 
  Briefcase, 
  Wind, 
  Check, 
  ArrowRight, 
  PhoneCall, 
  Sparkles,
  ShieldCheck 
} from "lucide-react";
import { Vehicle } from "../data/vehicles";
import { businessContact, quickWhatsAppMessage } from "../data/navigation";

interface VehicleCardProps {
  vehicle: Vehicle;
  onSelectVehicle?: (vehicle: Vehicle) => void;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle, onSelectVehicle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`rounded-3xl bg-white border transition-all duration-300 overflow-hidden flex flex-col justify-between group shadow-sm hover:shadow-card-hover ${
        vehicle.isPopularRate 
          ? "border-gold-400 ring-2 ring-gold-400/20 shadow-md" 
          : "border-slate-200 hover:border-navy-400/40"
      }`}
    >
      <div>
        {/* Vehicle Image Container */}
        <div className="relative h-56 bg-gradient-to-b from-slate-100 to-slate-200/60 p-4 flex items-center justify-center overflow-hidden">
          {/* Top Badges */}
          <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-navy-900 text-white shadow-sm">
              {vehicle.category}
            </span>
            {vehicle.isPopularRate && (
              <span className="px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-gradient-to-r from-gold-500 to-amber-500 text-navy-950 flex items-center gap-1 shadow-sm">
                <Sparkles className="w-3 h-3" />
                Featured Rate
              </span>
            )}
          </div>

          <div className="absolute top-4 right-4 z-10">
            <span className="px-2.5 py-1 rounded-xl bg-white/90 backdrop-blur-sm text-slate-800 text-xs font-bold shadow-sm flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-navy-800" />
              {vehicle.seats}
            </span>
          </div>

          {/* Vehicle photo with zoom effect */}
          <img
            src={vehicle.image}
            alt={`${vehicle.name} cab Ahmedabad`}
            className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>

        {/* Content Body */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-4 mb-2">
            <div>
              <h3 className="text-2xl font-display font-extrabold text-navy-900 group-hover:text-gold-600 transition-colors">
                {vehicle.name}
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                {vehicle.recommendedFor}
              </p>
            </div>

            {/* Rate Tag */}
            <div className="text-right">
              {vehicle.ratePerKm ? (
                <div>
                  <span className="text-2xl font-display font-black text-navy-950">
                    {vehicle.ratePerKm.split(" ")[0]}
                  </span>
                  <span className="text-xs font-bold text-slate-500 block">
                    / KM*
                  </span>
                </div>
              ) : (
                <div className="bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200">
                  <span className="text-xs font-bold text-navy-900 block">
                    {vehicle.rateDisplay}
                  </span>
                  <span className="text-[10px] text-slate-500">Upon Route Request</span>
                </div>
              )}
            </div>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed mb-4">
            {vehicle.description}
          </p>

          {/* Specifications Pills */}
          <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-100 mb-4 bg-slate-50/70 rounded-2xl px-3">
            <div className="flex items-center gap-1.5 text-xs text-slate-700">
              <Users className="w-3.5 h-3.5 text-navy-800 flex-shrink-0" />
              <span className="font-semibold">{vehicle.seats}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-700">
              <Wind className="w-3.5 h-3.5 text-navy-800 flex-shrink-0" />
              <span className="font-semibold">AC Climate</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-700">
              <Briefcase className="w-3.5 h-3.5 text-navy-800 flex-shrink-0" />
              <span className="font-semibold truncate">{vehicle.luggage}</span>
            </div>
          </div>

          {/* Key Features Bullet points */}
          <div className="space-y-1.5 mb-2">
            {vehicle.features.slice(0, 4).map((feature) => (
              <div key={feature} className="flex items-center gap-2 text-xs text-slate-600">
                <Check className="w-3.5 h-3.5 text-gold-500 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-6 pt-0 space-y-2">
        <Link
          to={`/booking?vehicle=${encodeURIComponent(vehicle.name)}`}
          onClick={() => onSelectVehicle?.(vehicle)}
          className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-navy-900 hover:bg-gold-500 text-white hover:text-navy-950 font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-sm"
        >
          <span>Book {vehicle.name}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>

        <a
          href={`https://wa.me/91${businessContact.primaryPhone}?text=${encodeURIComponent(`Hello Vinit Tours & Travels, I would like to enquire about the fare and availability for ${vehicle.name}.`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 py-2 rounded-xl bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 text-xs font-semibold transition-colors"
        >
          <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
          <span>Ask Fare on WhatsApp</span>
        </a>
      </div>
    </motion.div>
  );
};
