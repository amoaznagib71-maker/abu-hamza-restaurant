import React, { useState, useEffect } from 'react';
import { Flame, Menu, X, Phone, AlertCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Navbar({ onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '#hero' },
    { name: 'قائمة المشويات', href: '#menu' },
    { name: 'معرض الصور', href: '#gallery' },
    { name: 'موقعنا', href: '#location' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Demo Disclaimer Bar */}
      <div className="bg-charcoal-950/95 border-b border-ember-800/40 text-[11px] sm:text-xs py-1.5 px-4 text-center text-amber-200/90 flex items-center justify-center gap-2">
        <AlertCircle className="w-3.5 h-3.5 text-gold-400 shrink-0" />
        <span>
          <strong>نموذج موقع تجريبي:</strong> هذا الموقع هو تصميم ومقترح رقمي لمطعم <strong>مشويات أبو حمزة</strong> | جميع الأسعار والبيانات استرشادية وافتراضية [Demo / Placeholder]
        </span>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-charcoal-950/95 backdrop-blur-md border-b border-white/5 py-3.5 shadow-2xl'
            : 'bg-charcoal-950/60 backdrop-blur-sm py-4 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Restaurant Brand */}
            <a
              href="#hero"
              onClick={(e) => handleLinkClick(e, '#hero')}
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-full bg-charcoal-900 border border-gold-500/40 flex items-center justify-center group-hover:border-gold-500 transition-colors">
                <Flame className="w-5 h-5 text-gold-400 fill-gold-400/20 group-hover:text-ember-500 transition-colors" />
              </div>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-gold-400 transition-colors">
                {RESTAURANT_INFO.name}
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-sm font-semibold text-gray-300 hover:text-gold-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Contact Button */}
            <div className="hidden md:block">
              <button
                onClick={onOpenContact}
                className="px-5 py-2.5 rounded-full text-xs font-bold bg-gradient-to-r from-gold-500 to-amber-600 text-charcoal-950 hover:from-gold-400 hover:to-amber-500 transition-all shadow-md shadow-gold-500/20 hover:scale-105"
              >
                تواصل معنا
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-charcoal-900 border border-white/10 text-gray-300"
              aria-label="القائمة"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-charcoal-950/98 border-b border-white/10 px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="block text-base font-semibold text-gray-200 hover:text-gold-400"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-gold-500 to-amber-600 text-charcoal-950 shadow-md"
            >
              تواصل معنا
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
