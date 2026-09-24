export interface ContactInfo {
  primaryPhone: string;
  secondaryPhones: string[];
  allPhones: string[];
  email: string;
  city: string;
  state: string;
  country: string;
  fullAddress: string;
  tagline: string;
  workingHours: string;
}

export const businessContact: ContactInfo = {
  primaryPhone: "8200393678",
  secondaryPhones: ["9574710357", "7043120893"],
  allPhones: ["8200393678", "9574710357", "7043120893"],
  email: "vinit5p4308@gmail.com",
  city: "Ahmedabad",
  state: "Gujarat",
  country: "India",
  fullAddress: "Ahmedabad, Gujarat",
  tagline: "Reliable Travel. Comfortable Journeys. Professional Service.",
  workingHours: "24×7 Available",
};

export interface NavItem {
  name: string;
  href: string;
}

export const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Our Fleet", href: "/fleet" },
  { name: "Airport Transfer", href: "/#airport" },
  { name: "Outstation", href: "/#outstation" },
  { name: "Corporate", href: "/#corporate" },
  { name: "Sightseeing", href: "/#sightseeing" },
  { name: "Book Now", href: "/booking" },
  { name: "Contact", href: "/contact" },
];

export const quickWhatsAppMessage = (topic: string = "general", customText?: string) => {
  if (customText) {
    return encodeURIComponent(customText);
  }
  
  switch (topic.toLowerCase()) {
    case "airport":
      return encodeURIComponent("Hello Vinit Tours & Travels, I need an airport pickup/drop. Please share availability and fare.");
    case "outstation":
      return encodeURIComponent("Hello Vinit Tours & Travels, I need an outstation cab. Please share vehicle availability and fare.");
    case "hotel":
      return encodeURIComponent("Hello Vinit Tours & Travels, I would like to enquire about hotel booking.");
    case "flights":
    case "flight":
      return encodeURIComponent("Hello Vinit Tours & Travels, I would like to enquire about flight booking.");
    case "corporate":
      return encodeURIComponent("Hello Vinit Tours & Travels, I would like to enquire about corporate travel solutions.");
    case "wedding":
    case "family":
      return encodeURIComponent("Hello Vinit Tours & Travels, I would like to enquire about vehicles for wedding / family function travel.");
    case "general":
    default:
      return encodeURIComponent("Hello Vinit Tours & Travels, I would like to enquire about a cab booking.");
  }
};
