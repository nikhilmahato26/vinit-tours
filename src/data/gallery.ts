export interface GalleryItem {
  id: string;
  title: string;
  category: "Fleet" | "Airport & Corporate" | "Destinations" | "Weddings & Family";
  image: string;
  caption: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    title: "Toyota Innova Crysta",
    category: "Fleet",
    image: "/images/vehicles/innova-crysta.jpg",
    caption: "Premium 6/7 seater luxury MPV ideal for executive & family outstation journeys.",
  },
  {
    id: "g2",
    title: "Ahmedabad Airport Transfer",
    category: "Airport & Corporate",
    image: "/images/services/airport-transfer.jpg",
    caption: "Curbside executive cab pickup at Sardar Vallabhbhai Patel International Airport, Ahmedabad.",
  },
  {
    id: "g3",
    title: "Maruti Suzuki Dzire",
    category: "Fleet",
    image: "/images/vehicles/dzire.jpg",
    caption: "Economical sedan starting @ ₹12 / KM* for punctual city transit & transfers.",
  },
  {
    id: "g4",
    title: "Gujarat Sightseeing at Atal Bridge",
    category: "Destinations",
    image: "/images/services/sightseeing.jpg",
    caption: "Sightseeing family exploration near iconic Atal Bridge and Sabarmati Riverfront.",
  },
  {
    id: "g5",
    title: "Corporate Fleet at GIFT City",
    category: "Airport & Corporate",
    image: "/images/services/corporate-travel.jpg",
    caption: "Professional business chauffeur transportation for GIFT City corporate delegates.",
  },
  {
    id: "g6",
    title: "Force Urbania — 17 Seater",
    category: "Fleet",
    image: "/images/vehicles/urbania.jpg",
    caption: "17-seater European style luxury transporter for VIP delegations and executive groups.",
  },
  {
    id: "g7",
    title: "Wedding & Barat Fleet",
    category: "Weddings & Family",
    image: "/images/services/wedding-travel.jpg",
    caption: "Decorated cars and coordinated family fleet at Ahmedabad grand wedding venue.",
  },
  {
    id: "g8",
    title: "Maruti Suzuki Ertiga",
    category: "Fleet",
    image: "/images/vehicles/ertiga.jpg",
    caption: "Spacious 6-seater MPV starting @ ₹14 / KM* for family holidays and temple tours.",
  },
  {
    id: "g9",
    title: "Statue of Unity, Kevadia",
    category: "Destinations",
    image: "/images/destinations/statue-of-unity.jpg",
    caption: "Day tour packages from Ahmedabad to the world's tallest statue.",
  },
  {
    id: "g10",
    title: "Force Tempo Traveller",
    category: "Fleet",
    image: "/images/vehicles/tempo-traveller.jpg",
    caption: "14, 17 & 25 seater luxury pushback coaches for pilgrimage yatras & family outings.",
  },
  {
    id: "g11",
    title: "Somnath Jyotirlinga Temple Tour",
    category: "Destinations",
    image: "/images/destinations/somnath-temple.jpg",
    caption: "Custom pilgrimage cab tour packages covering Somnath, Dwarka & Saurashtra.",
  },
  {
    id: "g12",
    title: "Udaipur & Rajasthan Tour",
    category: "Destinations",
    image: "/images/destinations/udaipur-rajasthan.jpg",
    caption: "Comfortable highway cab connection from Ahmedabad to Udaipur City of Lakes.",
  },
  {
    id: "g13",
    title: "Vinit Tours & Travels Booking Office",
    category: "Airport & Corporate",
    image: "/images/office/office-desk.jpg",
    caption: "Our official booking & customer support office at Galaxy Mall, Satellite, Ahmedabad.",
  },
];
