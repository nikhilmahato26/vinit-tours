export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  icon: string;
  features: string[];
  ctaText: string;
  ctaAction?: string;
  image?: string;
}

export const coreServices: ServiceItem[] = [
  {
    id: "one-way-taxi",
    title: "One Way Taxi",
    shortDesc: "Convenient one-way transportation for your destination.",
    longDesc: "Affordable one-way intercity cab service without paying two-way charges. Ideal for single trips between Ahmedabad, Vadodara, Surat, Rajkot, Udaipur, and Mumbai.",
    icon: "ArrowRightCircle",
    features: ["Pay only for one-way distance", "Door-to-door pickup & drop", "Clean sanitised vehicles", "No return fare penalty"],
    ctaText: "Book One Way",
    ctaAction: "oneway",
  },
  {
    id: "round-trip-taxi",
    title: "Round Trip Taxi",
    shortDesc: "Comfortable return-trip transportation for families and individuals.",
    longDesc: "Complete round-trip travel solutions with driver stationed at your service for city stops, temple darshans, and family tours.",
    icon: "Repeat",
    features: ["Driver on stand-by throughout", "Flexible stops & multi-city routing", "Transparent daily KM allowance", "Courteous verified drivers"],
    ctaText: "Book Round Trip",
    ctaAction: "roundtrip",
  },
  {
    id: "outstation-taxi",
    title: "Outstation Taxi",
    shortDesc: "Long-distance travel across Gujarat and nearby states.",
    longDesc: "Reliable highway cabs with verified experienced drivers. Covering Gujarat, Rajasthan, and Maharashtra with minimum 300 KM per day policy.",
    icon: "Compass",
    features: ["Gujarat, Rajasthan & Maharashtra coverage", "Minimum 300 KM applicable for outstation", "GPS tracked & well maintained", "24x7 highway helpline"],
    ctaText: "Get Outstation Fare",
    ctaAction: "outstation",
  },
  {
    id: "airport-transfer",
    title: "Airport Transfer",
    shortDesc: "Reliable airport pickup and drop service.",
    longDesc: "Timely pickup and drop services for Ahmedabad Sardar Vallabhbhai Patel International Airport (Terminal 1 & 2) with zero delay guarantee.",
    icon: "PlaneTakeoff",
    features: ["24x7 flight arrival tracking", "Meet and greet curbside assistance", "Luggage handling support", "Fixed transparent rates"],
    ctaText: "Book Airport Transfer",
    ctaAction: "airport",
  },
  {
    id: "corporate-travel",
    title: "Corporate Travel",
    shortDesc: "Professional transportation for business visits and corporate requirements.",
    longDesc: "Tailored executive mobility for corporate meetings in Ahmedabad, Gandhinagar, GIFT City, Sanand, and visiting client delegations.",
    icon: "Briefcase",
    features: ["Executive sedans & luxury MPVs", "GST invoicing for companies", "Uniformed punctual chauffeurs", "Dedicated account coordination"],
    ctaText: "Corporate Enquiry",
    ctaAction: "corporate",
  },
  {
    id: "side-seeing",
    title: "Side Seeing",
    shortDesc: "Comfortable sightseeing and local destination exploration.",
    longDesc: "Explore Ahmedabad's UNESCO heritage city, Sabarmati Riverfront, Atal Bridge, Adalaj Stepwell, Akshardham, and Modhera Sun Temple in cool comfort.",
    icon: "MapPin",
    features: ["Flexible custom itineraries", "Driver guides with local knowledge", "Full day & half day packages", "Family-friendly stops"],
    ctaText: "Book Local Tour",
    ctaAction: "sightseeing",
  },
  {
    id: "marriage-family-functions",
    title: "Marriage & Family Functions",
    shortDesc: "Transportation solutions for weddings, family functions and special occasions.",
    longDesc: "Complete fleet deployment for wedding parties, barat processions, guest transfers from railway stations and airports to venues.",
    icon: "HeartHandshake",
    features: ["Coordinated multi-vehicle fleets", "Decorated groom car options", "Tempo Travellers & Urbania for guests", "Dedicated event transportation manager"],
    ctaText: "Plan Group Travel",
    ctaAction: "wedding",
  },
  {
    id: "hotel-booking",
    title: "Hotel Booking",
    shortDesc: "Assist customers with hotel booking for their trips.",
    longDesc: "End-to-end hotel reservation assistance for business travelers, families, and tour groups across top partner hotels and heritage resorts in Gujarat.",
    icon: "Hotel",
    features: ["Partner discounts on select stays", "Budget to 5-star luxury hotels", "Pre-booked verification", "Combined stay & cab deals"],
    ctaText: "Enquire Hotel Stay",
    ctaAction: "hotel",
  },
  {
    id: "flight-booking",
    title: "Flight Booking",
    shortDesc: "Domestic and travel flight booking assistance.",
    longDesc: "Hassle-free domestic and international flight ticket booking assistance with real-time seat availability and itinerary support.",
    icon: "Ticket",
    features: ["Competitive airfares", "Group booking assistance", "Instant ticket confirmation", "Date change & cancellation help"],
    ctaText: "Enquire Flight Tickets",
    ctaAction: "flight",
  },
];

export interface CompleteTravelSolution {
  id: string;
  emoji: string;
  title: string;
  description: string;
  actionText: string;
  tag: string;
  image: string;
}

export const completeTravelSolutions: CompleteTravelSolution[] = [
  {
    id: "flight-solution",
    emoji: "✈️",
    title: "Flight Booking",
    description: "Flight booking assistance for travel requirements with competitive rates and instant confirmation.",
    actionText: "Book Flights",
    tag: "Domestic & Travel",
    image: "/images/services/flight-booking.jpg",
  },
  {
    id: "hotel-solution",
    emoji: "🏨",
    title: "Hotel Booking",
    description: "Hotel booking support for business and leisure trips across Gujarat, Rajasthan, and major Indian cities.",
    actionText: "Find Hotels",
    tag: "Handpicked Stays",
    image: "/images/services/hotel-booking.jpg",
  },
  {
    id: "cab-solution",
    emoji: "🚕",
    title: "Cab Booking",
    description: "Book comfortable vehicles for local and outstation journeys starting @ ₹12/KM* with verified chauffeurs.",
    actionText: "Reserve Cab",
    tag: "Sedan to Tempo",
    image: "/images/vehicles/dzire.jpg",
  },
  {
    id: "sightseeing-solution",
    emoji: "🗺️",
    title: "Sightseeing",
    description: "Vehicle arrangements for sightseeing and local tours covering Ahmedabad, Statue of Unity, Somnath & Dwarka.",
    actionText: "Explore Tours",
    tag: "Custom Itinerary",
    image: "/images/services/sightseeing.jpg",
  },
  {
    id: "corporate-solution",
    emoji: "👔",
    title: "Corporate Travel",
    description: "Professional travel arrangements for corporate visits, airport transit, VIP guests, and GIFT City conferences.",
    actionText: "Corporate Desk",
    tag: "Executive Fleet",
    image: "/images/services/corporate-travel.jpg",
  },
  {
    id: "wedding-solution",
    emoji: "💍",
    title: "Family & Wedding Travel",
    description: "Vehicle arrangements for weddings, family functions, barat, and group travel with coordinated Tempo Travellers.",
    actionText: "Wedding Fleet",
    tag: "Multi-Vehicle",
    image: "/images/services/wedding-travel.jpg",
  },
];
