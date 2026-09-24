import React from "react";
import { Helmet } from "react-helmet-async";
import { Hero } from "../components/Hero";
import { TrustBar } from "../components/TrustBar";
import { Services } from "../components/Services";
import { TravelServices } from "../components/TravelServices";
import { Fleet } from "../components/Fleet";
import { AirportTransfer } from "../components/AirportTransfer";
import { Outstation } from "../components/Outstation";
import { CorporateTravel } from "../components/CorporateTravel";
import { Sightseeing } from "../components/Sightseeing";
import { FamilyTravel } from "../components/FamilyTravel";
import { PopularArea } from "../components/PopularArea";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { BookingForm } from "../components/BookingForm";
import { Gallery } from "../components/Gallery";
import { Contact } from "../components/Contact";

export const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Vinit Tours &amp; Travels — 24×7 Cab &amp; Travel Service | Ahmedabad, Gujarat</title>
        <meta
          name="description"
          content="Comfortable Rides. Reliable Service. Hassle-Free Travel. Book Dzire starting @ ₹12/KM*, Ertiga @ ₹14/KM*, Innova Crysta, Urbania &amp; Tempo Travellers in Ahmedabad."
        />
      </Helmet>

      {/* Hero Section */}
      <Hero />

      {/* Quick Trust Bar */}
      <TrustBar />

      {/* Our Services Section */}
      <Services />

      {/* Complete Travel Solutions (Flight, Hotel, Cab, Sightseeing, Corporate, Wedding) */}
      <TravelServices />

      {/* Fleet & Pricing Section */}
      <Fleet />

      {/* Dedicated Section: Airport Pickup & Drop */}
      <AirportTransfer />

      {/* Dedicated Section: Outstation Taxi */}
      <Outstation />

      {/* Dedicated Section: Corporate Travel */}
      <CorporateTravel />

      {/* Dedicated Section: Sightseeing & Local Tours */}
      <Sightseeing />

      {/* Dedicated Section: Marriage & Family Functions */}
      <FamilyTravel />

      {/* Popular Travel Area & Regions */}
      <PopularArea />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Booking Form Section */}
      <section className="py-20 lg:py-28 bg-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookingForm />
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />

      {/* Contact Section & Contact Card */}
      <Contact />
    </>
  );
};
