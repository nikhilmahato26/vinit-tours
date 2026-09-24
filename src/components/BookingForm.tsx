import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { 
  Send, 
  MessageSquare, 
  Phone, 
  Calendar, 
  Clock, 
  User, 
  MapPin, 
  Car, 
  CheckCircle2, 
  Sparkles,
  Info,
  HelpCircle,
  RotateCcw
} from "lucide-react";
import { businessContact } from "../data/navigation";

const bookingSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  phoneNumber: z.string().min(10, "Please enter a valid 10-digit phone number"),
  pickupLocation: z.string().min(3, "Pickup location is required"),
  dropLocation: z.string().min(3, "Drop location is required"),
  travelDate: z.string().min(1, "Travel date is required"),
  travelTime: z.string().min(1, "Travel time is required"),
  passengers: z.string().min(1, "Please specify number of passengers"),
  serviceRequired: z.string().min(1, "Please choose a service"),
  vehiclePreference: z.string().min(1, "Please choose a vehicle preference"),
  tripType: z.string().min(1, "Please select trip type"),
  message: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

interface BookingFormProps {
  initialService?: string;
  initialVehicle?: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({ 
  initialService = "One Way Taxi", 
  initialVehicle = "Dzire" 
}) => {
  const [submittedData, setSubmittedData] = useState<BookingFormData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      pickupLocation: "",
      dropLocation: "",
      travelDate: new Date().toISOString().split("T")[0],
      travelTime: "10:00",
      passengers: "1",
      serviceRequired: initialService,
      vehiclePreference: initialVehicle,
      tripType: "One Way",
      message: "",
    },
  });

  const selectedVehicle = watch("vehiclePreference");
  const selectedService = watch("serviceRequired");
  const selectedTripType = watch("tripType");

  useEffect(() => {
    if (initialService) setValue("serviceRequired", initialService);
    if (initialVehicle) setValue("vehiclePreference", initialVehicle);
  }, [initialService, initialVehicle, setValue]);

  const onSubmit = (data: BookingFormData) => {
    setIsSubmitting(true);
    setTimeout(() => {
      setSubmittedData(data);
      setIsSubmitting(false);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (e) {
        // Confetti fallback
      }
    }, 600);
  };

  const constructWhatsAppUrl = (data: BookingFormData) => {
    const text = `*New Booking Enquiry - Vinit Tours & Travels*
━━━━━━━━━━━━━━━━━━━━
👤 *Customer:* ${data.fullName}
📞 *Phone:* ${data.phoneNumber}
📍 *Pickup:* ${data.pickupLocation}
🏁 *Drop:* ${data.dropLocation}
📅 *Date:* ${data.travelDate}
⏰ *Time:* ${data.travelTime}
👥 *Passengers:* ${data.passengers}
🚗 *Vehicle:* ${data.vehiclePreference}
🧳 *Service:* ${data.serviceRequired}
🔄 *Trip Type:* ${data.tripType}
${data.message ? `💬 *Notes:* ${data.message}` : ""}
━━━━━━━━━━━━━━━━━━━━
Please confirm availability and share fare quote.`;

    return `https://wa.me/91${businessContact.primaryPhone}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl max-w-4xl mx-auto" id="booking-form">
      <div className="border-b border-slate-100 pb-6 mb-8 text-center sm:text-left">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-gold-600 uppercase tracking-widest block mb-1">
              Quick Reservation Desk
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-navy-900">
              Book Your Cab or Travel Service
            </h3>
          </div>
          <div className="flex items-center gap-2 self-center sm:self-auto bg-navy-50 text-navy-900 px-3.5 py-1.5 rounded-full border border-navy-200 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-gold-500" />
            <span>Instant Quote on WhatsApp</span>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {submittedData ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="text-center py-8 space-y-6"
          >
            <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <h4 className="text-2xl font-display font-bold text-navy-900 mb-2">
                Enquiry Ready! Proceed with WhatsApp
              </h4>
              <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                Thank you, <strong>{submittedData.fullName}</strong>. Your trip details for <strong>{submittedData.vehiclePreference}</strong> on <strong>{submittedData.travelDate}</strong> are formatted and ready.
              </p>
            </div>

            {/* Formatted summary */}
            <div className="bg-slate-50 p-6 rounded-2xl max-w-lg mx-auto text-left border border-slate-200 text-xs space-y-2 text-slate-700">
              <div className="flex justify-between border-b border-slate-200/80 pb-2">
                <span className="text-slate-500">Route:</span>
                <span className="font-bold text-navy-900">{submittedData.pickupLocation} ➔ {submittedData.dropLocation}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200/80 pb-2">
                <span className="text-slate-500">Date &amp; Time:</span>
                <span className="font-bold text-navy-900">{submittedData.travelDate} at {submittedData.travelTime}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200/80 pb-2">
                <span className="text-slate-500">Vehicle &amp; Service:</span>
                <span className="font-bold text-navy-900">{submittedData.vehiclePreference} ({submittedData.serviceRequired})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Passengers:</span>
                <span className="font-bold text-navy-900">{submittedData.passengers} Passenger(s)</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href={constructWhatsAppUrl(submittedData)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base shadow-lg shadow-emerald-600/30 transition-all uppercase tracking-wide"
                id="btn-whatsapp-confirm"
              >
                <MessageSquare className="w-5 h-5" />
                <span>CONFIRM ON WHATSAPP (INSTANT)</span>
              </a>

              <a
                href={`tel:${businessContact.primaryPhone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-base transition-colors"
              >
                <Phone className="w-5 h-5 text-gold-400" />
                <span>Call {businessContact.primaryPhone}</span>
              </a>
            </div>

            <div>
              <button
                type="button"
                onClick={() => {
                  setSubmittedData(null);
                  reset();
                }}
                className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-navy-900 underline mt-4"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Submit another booking enquiry</span>
              </button>
            </div>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Row 1: Name and Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    {...register("fullName")}
                    placeholder="e.g. Rajesh Patel"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-navy-900 text-sm transition-all"
                    id="input-fullname"
                  />
                </div>
                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-1 font-medium">{errors.fullName.message}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="tel"
                    {...register("phoneNumber")}
                    placeholder="e.g. 9876543210"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-navy-900 text-sm transition-all"
                    id="input-phone"
                  />
                </div>
                {errors.phoneNumber && (
                  <p className="text-red-500 text-xs mt-1 font-medium">{errors.phoneNumber.message}</p>
                )}
              </div>
            </div>

            {/* Row 2: Pickup and Drop Locations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Pickup Location *
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-emerald-600 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    {...register("pickupLocation")}
                    placeholder="e.g. Ahmedabad Airport / Vastrapur"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-navy-900 text-sm transition-all"
                    id="input-pickup"
                  />
                </div>
                {errors.pickupLocation && (
                  <p className="text-red-500 text-xs mt-1 font-medium">{errors.pickupLocation.message}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Drop Location *
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-rose-500 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    {...register("dropLocation")}
                    placeholder="e.g. Udaipur / Surat / Gandhinagar"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-navy-900 text-sm transition-all"
                    id="input-drop"
                  />
                </div>
                {errors.dropLocation && (
                  <p className="text-red-500 text-xs mt-1 font-medium">{errors.dropLocation.message}</p>
                )}
              </div>
            </div>

            {/* Row 3: Date, Time, Passengers, Trip Type */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Travel Date *
                </label>
                <input
                  type="date"
                  {...register("travelDate")}
                  className="w-full px-3 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-900 text-sm transition-all"
                />
                {errors.travelDate && (
                  <p className="text-red-500 text-xs mt-1 font-medium">{errors.travelDate.message}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Travel Time *
                </label>
                <input
                  type="time"
                  {...register("travelTime")}
                  className="w-full px-3 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-900 text-sm transition-all"
                />
                {errors.travelTime && (
                  <p className="text-red-500 text-xs mt-1 font-medium">{errors.travelTime.message}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Passengers *
                </label>
                <select
                  {...register("passengers")}
                  className="w-full px-3 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-900 text-sm transition-all bg-white"
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 Persons</option>
                  <option value="3">3 Persons</option>
                  <option value="4">4 Persons (Sedan)</option>
                  <option value="5-6">5-6 Persons (SUV)</option>
                  <option value="7-12">7-12 Persons (Tempo)</option>
                  <option value="13-17">13-17 Persons (Urbania/Tempo)</option>
                  <option value="18-25">18-25 Persons (25s Coach)</option>
                  <option value="25+">More than 25</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Trip Type *
                </label>
                <select
                  {...register("tripType")}
                  className="w-full px-3 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-900 text-sm transition-all bg-white"
                >
                  <option value="One Way">One Way</option>
                  <option value="Round Trip">Round Trip</option>
                  <option value="Local Hourly Package">Local Hourly Package</option>
                  <option value="Airport Pickup / Drop">Airport Transfer</option>
                </select>
              </div>
            </div>

            {/* Row 4: Service Required & Vehicle Preference */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Service Required *
                </label>
                <select
                  {...register("serviceRequired")}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-900 text-sm transition-all bg-white font-medium text-slate-800"
                  id="select-service"
                >
                  <option value="One Way Taxi">One Way Taxi</option>
                  <option value="Round Trip Taxi">Round Trip Taxi</option>
                  <option value="Outstation Taxi">Outstation Taxi</option>
                  <option value="Airport Transfer">Airport Transfer</option>
                  <option value="Corporate Travel">Corporate Travel</option>
                  <option value="Side Seeing">Side Seeing</option>
                  <option value="Marriage / Family Function">Marriage / Family Function</option>
                  <option value="Hotel Booking">Hotel Booking</option>
                  <option value="Flight Booking">Flight Booking</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Vehicle Preference *
                </label>
                <select
                  {...register("vehiclePreference")}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-900 text-sm transition-all bg-white font-medium text-slate-800"
                  id="select-vehicle"
                >
                  <option value="Dzire">Dzire (Sedan - ₹12/KM*)</option>
                  <option value="Ertiga">Ertiga (SUV - ₹14/KM*)</option>
                  <option value="Innova Crysta">Innova Crysta (Luxury 6/7 Seater)</option>
                  <option value="Aura">Aura (Sedan)</option>
                  <option value="Marazzo">Marazzo (MPV 7-8 Seater)</option>
                  <option value="Tempo Traveller 14 Seater">Tempo Traveller — 14 Seater</option>
                  <option value="Tempo Traveller 17 Seater">Tempo Traveller — 17 Seater</option>
                  <option value="Tempo Traveller 25 Seater">Tempo Traveller — 25 Seater</option>
                  <option value="Urbania">Urbania (Luxury 17 Seater)</option>
                </select>
              </div>
            </div>

            {/* Dynamic Fare Preview Reminder Box */}
            <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-300/80 flex items-start gap-3">
              <Info className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
              <div className="text-xs text-slate-700 space-y-1">
                <span className="font-bold text-amber-950 block">
                  Fare Guidance:
                </span>
                {selectedVehicle === "Dzire" && (
                  <p>
                    <strong>Dzire:</strong> Starts @ <strong>₹12 / KM*</strong>. Minimum 300 KM applicable for outstation trips. Toll, parking &amp; permit extra.
                  </p>
                )}
                {selectedVehicle === "Ertiga" && (
                  <p>
                    <strong>Ertiga SUV:</strong> Starts @ <strong>₹14 / KM*</strong>. Minimum 300 KM applicable for outstation trips. Toll, parking &amp; permit extra.
                  </p>
                )}
                {selectedVehicle !== "Dzire" && selectedVehicle !== "Ertiga" && (
                  <p>
                    <strong>{selectedVehicle}:</strong> Custom itinerary pricing upon enquiry. Minimum 300 KM applicable for outstation trips. Toll, parking &amp; permit extra.
                  </p>
                )}
              </div>
            </div>

            {/* Message field */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Additional Travel Details / Special Requests
              </label>
              <textarea
                {...register("message")}
                rows={3}
                placeholder="e.g. Need child seat / flight number AI-482 / multi-day Gujarat darshan..."
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-900 text-sm transition-all"
              />
            </div>

            {/* CTA: SEND BOOKING ENQUIRY */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-3 py-4 rounded-xl bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 hover:from-navy-800 hover:to-navy-850 text-white font-extrabold text-base uppercase tracking-wider shadow-lg shadow-navy-900/20 hover:shadow-navy-900/40 transition-all duration-200"
                id="btn-submit-booking-enquiry"
              >
                {isSubmitting ? (
                  <span>Processing Enquiry...</span>
                ) : (
                  <>
                    <Send className="w-5 h-5 text-gold-400" />
                    <span>SEND BOOKING ENQUIRY</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </AnimatePresence>
    </div>
  );
};
