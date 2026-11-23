import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import ImageLightbox from './components/ImageLightbox';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [lightboxData, setLightboxData] = useState({ isOpen: false, image: null, title: null });

  const handleOpenLightbox = (image, title) => {
    setLightboxData({ isOpen: true, image, title });
  };

  const handleCloseLightbox = () => {
    setLightboxData({ isOpen: false, image: null, title: null });
  };

  return (
    <div className="min-h-screen bg-charcoal-950 text-gray-100 flex flex-col font-cairo antialiased selection:bg-ember-600 selection:text-white">
      
      {/* Sleek Minimalist Navbar */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      <main className="flex-1">
        {/* 1. HERO SECTION */}
        <Hero onOpenContact={() => setIsContactOpen(true)} />

        {/* 2. MENU SECTION (Large cards, name and price only, simple categories) */}
        <Menu onSelectImage={handleOpenLightbox} />

        {/* 3. GALLERY SECTION (Large food photography, modern bento grid) */}
        <Gallery onSelectImage={handleOpenLightbox} />

        {/* 4. LOCATION SECTION (Address, Embedded Google Maps, Contact button) */}
        <Location onOpenContact={() => setIsContactOpen(true)} />
      </main>

      {/* 5. FOOTER (Restaurant name, social links, contact info) */}
      <Footer />

      {/* Interactive Contact / Quick Channel Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* High-Resolution Image Lightbox Modal */}
      {lightboxData.isOpen && (
        <ImageLightbox
          image={lightboxData.image}
          title={lightboxData.title}
          onClose={handleCloseLightbox}
        />
      )}

    </div>
  );
}
