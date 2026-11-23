import React from 'react';
import { X } from 'lucide-react';

export default function ImageLightbox({ image, title, onClose }) {
  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/92 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full bg-charcoal-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 left-4 z-20 p-2.5 rounded-full bg-charcoal-950/80 text-white hover:bg-ember-600 transition-colors"
          aria-label="إغلاق الصورة"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="max-h-[75vh] bg-black flex items-center justify-center">
          <img
            src={image}
            alt={title || "مشويات أبو حمزة"}
            className="max-h-[75vh] w-auto max-w-full object-contain"
          />
        </div>

        {title && (
          <div className="p-5 bg-charcoal-950 text-right border-t border-white/5">
            <h3 className="text-xl font-black text-white">{title}</h3>
          </div>
        )}
      </div>
    </div>
  );
}
