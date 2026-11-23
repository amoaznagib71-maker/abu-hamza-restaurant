import React from 'react';
import { GALLERY_IMAGES } from '../data/restaurantData';

export default function Gallery({ onSelectImage }) {
  return (
    <section id="gallery" className="py-24 sm:py-32 bg-charcoal-900/40 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header - Minimal text, large typography */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-4">
            معرض <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-500">الصور</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-ember-600 to-amber-500 mx-auto rounded-full" />
        </div>

        {/* Modern Image Grid: Large Attractive Food Photography */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Main Large Bento Item */}
          <div
            onClick={() => onSelectImage(GALLERY_IMAGES[0].image, GALLERY_IMAGES[0].title)}
            className="md:col-span-2 md:row-span-2 relative h-96 md:h-[540px] rounded-3xl overflow-hidden cursor-pointer group card-luxury"
          >
            <img
              src={GALLERY_IMAGES[0].image}
              alt={GALLERY_IMAGES[0].title}
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            <div className="absolute bottom-6 right-6">
              <span className="text-xl sm:text-2xl font-black text-white group-hover:text-gold-400 transition-colors">
                {GALLERY_IMAGES[0].title}
              </span>
            </div>
          </div>

          {/* Secondary Bento Items */}
          {GALLERY_IMAGES.slice(1, 3).map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectImage(item.image, item.title)}
              className="relative h-64 md:h-[258px] rounded-3xl overflow-hidden cursor-pointer group card-luxury"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-5 right-5">
                <span className="text-lg font-bold text-white group-hover:text-gold-400 transition-colors">
                  {item.title}
                </span>
              </div>
            </div>
          ))}

          {/* Third Row Items */}
          {GALLERY_IMAGES.slice(3, 5).map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectImage(item.image, item.title)}
              className="relative h-64 md:h-[280px] rounded-3xl overflow-hidden cursor-pointer group card-luxury"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-5 right-5">
                <span className="text-lg font-bold text-white group-hover:text-gold-400 transition-colors">
                  {item.title}
                </span>
              </div>
            </div>
          ))}

          {/* Final Large Item */}
          <div
            onClick={() => onSelectImage(GALLERY_IMAGES[5].image, GALLERY_IMAGES[5].title)}
            className="relative h-64 md:h-[280px] rounded-3xl overflow-hidden cursor-pointer group card-luxury"
          >
            <img
              src={GALLERY_IMAGES[5].image}
              alt={GALLERY_IMAGES[5].title}
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            <div className="absolute bottom-5 right-5">
              <span className="text-lg font-bold text-white group-hover:text-gold-400 transition-colors">
                {GALLERY_IMAGES[5].title}
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
