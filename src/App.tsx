import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { StickyMobileBar } from "./components/StickyMobileBar";
import { ScrollToTop } from "./components/ScrollToTop";

import { Home } from "./pages/Home";
import { ServicesPage } from "./pages/Services";
import { FleetPage } from "./pages/Fleet";
import { BookingPage } from "./pages/Booking";
import { ContactPage } from "./pages/Contact";

export const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-gold-500 selection:text-white">
          {/* Main Navigation */}
          <Navbar />

          {/* Routed Views */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/fleet" element={<FleetPage />} />
              <Route path="/booking" element={<BookingPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>

          {/* Floating WhatsApp Action Widget */}
          <WhatsAppButton />

          {/* Fixed Bottom Action Bar for Mobile Devices */}
          <StickyMobileBar />

          {/* Global Footer */}
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
