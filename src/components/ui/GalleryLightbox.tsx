"use client";

import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

interface GalleryImage {
  url: string;
  title: string;
}

interface GalleryLightboxProps {
  images: GalleryImage[];
  initialIndex: number | null;
  onClose: () => void;
}

export function GalleryLightbox({ images, initialIndex, onClose }: GalleryLightboxProps) {
  const [index, setIndex] = useState<number>(initialIndex ?? 0);

  useEffect(() => {
    if (initialIndex !== null) {
      setIndex(initialIndex);
    }
  }, [initialIndex]);

  const prev = useCallback(() => {
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  }, [images.length]);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (initialIndex === null) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [initialIndex, onClose, prev, next]);

  if (initialIndex === null) return null;

  const current = images[index];

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8 animate-fade-in select-none">
      {/* Top Header Controls */}
      <div className="flex items-center justify-between text-white z-10">
        <div className="flex items-center gap-3">
          <Maximize2 className="w-5 h-5 text-[#E2861F]" />
          <span className="font-mono text-sm font-bold text-white/80">
            Image {index + 1} of {images.length}
          </span>
        </div>

        <button
          onClick={onClose}
          className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#E2861F] text-white flex items-center justify-center transition-colors border border-white/20"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Display */}
      <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
        <button
          onClick={prev}
          className="absolute left-2 sm:left-6 z-20 w-12 h-12 rounded-full bg-black/60 hover:bg-[#E2861F] text-white flex items-center justify-center transition-colors border border-white/30"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <img
          src={current.url}
          alt={current.title}
          className="max-h-[80vh] max-w-full object-contain rounded-lg shadow-2xl transition-all duration-300"
        />

        <button
          onClick={next}
          className="absolute right-2 sm:right-6 z-20 w-12 h-12 rounded-full bg-black/60 hover:bg-[#E2861F] text-white flex items-center justify-center transition-colors border border-white/30"
          aria-label="Next Image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Caption & Thumbnail Navigation */}
      <div className="flex flex-col items-center gap-3 text-center z-10">
        <p className="font-display font-bold text-white text-base sm:text-lg max-w-2xl">
          {current.title}
        </p>

        <div className="flex items-center gap-2 overflow-x-auto max-w-full py-2">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`relative h-12 w-16 shrink-0 rounded overflow-hidden border-2 transition-all ${
                i === index ? "border-[#E2861F] scale-105" : "border-transparent opacity-50 hover:opacity-100"
              }`}
            >
              <img src={img.url} alt={img.title} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
