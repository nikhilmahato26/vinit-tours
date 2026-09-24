export interface ImportantFareNote {
  title: string;
  description: string;
  icon: string;
  highlight?: boolean;
}

export const fareNotes: ImportantFareNote[] = [
  {
    title: "Toll, Parking & State Permit",
    description: "Toll, Parking & State Permit charges extra as actual.",
    icon: "Receipt",
    highlight: true,
  },
  {
    title: "Minimum Distance",
    description: "Minimum 300 KM applicable for outstation trips.",
    icon: "Milestone",
    highlight: true,
  },
  {
    title: "Peak Season Policy",
    description: "Route fare may vary during peak season & festivals.",
    icon: "CalendarAlert",
    highlight: false,
  },
  {
    title: "Booking Confirmation",
    description: "Booking confirmation subject to vehicle availability.",
    icon: "CheckCircle2",
    highlight: false,
  },
];

export interface TrustFeature {
  title: string;
  subtitle: string;
  icon: string;
}

export const quickTrustFeatures: TrustFeature[] = [
  {
    title: "24×7 Service",
    subtitle: "Always Available",
    icon: "Clock",
  },
  {
    title: "Safe & Secure",
    subtitle: "Your Safety is Our Priority",
    icon: "ShieldCheck",
  },
  {
    title: "Verified Drivers",
    subtitle: "Experienced & Courteous",
    icon: "UserCheck",
  },
  {
    title: "Clean Cars",
    subtitle: "Well Maintained Vehicles",
    icon: "Sparkles",
  },
  {
    title: "On Time",
    subtitle: "Pickup & Drop",
    icon: "Timer",
  },
  {
    title: "No Hidden Charges",
    subtitle: "100% Transparent Billing",
    icon: "BadgePercent",
  },
];

export const whyChooseUsFeatures = [
  {
    title: "24×7 Customer Support",
    description: "Always available for booking assistance, late-night pickups, and round-the-clock emergency support.",
    icon: "Headphones",
  },
  {
    title: "Well Maintained Cars",
    description: "Clean and maintained vehicles for comfortable journeys, regularly serviced and sanitised before every trip.",
    icon: "Car",
  },
  {
    title: "GPS Enabled Vehicles",
    description: "GPS-enabled vehicle support as stated in the provided reference material for live tracking and safety.",
    icon: "Navigation",
  },
  {
    title: "Affordable Rates",
    description: "Competitive and transparent fare information with Dzire starting at ₹12/KM* and Ertiga at ₹14/KM*.",
    icon: "Wallet",
  },
  {
    title: "Professional Drivers",
    description: "Experienced and professional drivers with extensive knowledge of Gujarat highways and city shortcuts.",
    icon: "Award",
  },
  {
    title: "Safe & Secure",
    description: "Safety-focused travel experience with verified licenses, background checks, and SOS compliance.",
    icon: "Shield",
  },
];

export const serviceCoverage = {
  headline: "Serving Gujarat & Selected Outstation Destinations",
  primaryHub: "Ahmedabad, Gujarat",
  regions: [
    {
      state: "Gujarat (Full State Coverage)",
      cities: [
        "Ahmedabad", "Gandhinagar", "Vadodara", "Surat", "Rajkot", 
        "Bhavnagar", "Jamnagar", "Junagadh", "Somnath", "Dwarka", 
        "Statue of Unity (Kevadia)", "Modhera", "Bhuj / Kutch"
      ],
      description: "Comprehensive local pickup, airport transfers, intercity shuttles, and pilgrimage circuits."
    },
    {
      state: "Rajasthan (Select Outstation Routes)",
      cities: ["Udaipur", "Mount Abu", "Jaipur", "Jodhpur", "Nathdwara"],
      description: "Direct highway connections from Ahmedabad for leisure trips, destination weddings, and temple yatras."
    },
    {
      state: "Maharashtra (Interstate Corridors)",
      cities: ["Mumbai", "Thane", "Nashik", "Shirdi", "Pune"],
      description: "Comfortable interstate journeys via NH48 expressways with experienced long-distance highway captains."
    }
  ]
};
