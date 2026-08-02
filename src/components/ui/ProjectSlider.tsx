"use client";

import { useState } from "react";
import { projects, sectorLabels } from "@/lib/data/projects";
import { ChevronLeft, ChevronRight, MapPin, Maximize2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProjectSlider() {
  const featuredProjects = projects.slice(0, 8);
  const [startIndex, setStartIndex] = useState(0);

  const prevSlide = () => {
    setStartIndex((prev) => (prev === 0 ? featuredProjects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % featuredProjects.length);
  };

  return (
    <div className="relative w-full">
      {/* Navigation Controls Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <span className="font-mono text-[#E2861F] text-xs uppercase font-bold tracking-widest block mb-1">
            Selected Landmark Executions
          </span>
          <h3 className="font-display font-black text-[#003B66] text-2xl sm:text-3xl uppercase">
            Major Completed Facilities
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full bg-white border border-[#A6C9E8] text-[#005691] hover:bg-[#005691] hover:text-white flex items-center justify-center transition-all shadow-md"
            aria-label="Previous Project"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full bg-white border border-[#A6C9E8] text-[#005691] hover:bg-[#005691] hover:text-white flex items-center justify-center transition-all shadow-md"
            aria-label="Next Project"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Featured Project Showcase Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#0A2540] border-2 border-[#E2861F]/60 rounded-xl overflow-hidden shadow-2xl p-6 sm:p-8">
        
        {/* Project Image Viewport */}
        <div className="lg:col-span-7 relative h-72 sm:h-96 w-full rounded-lg overflow-hidden group">
          <img
            src={featuredProjects[startIndex].image}
            alt={featuredProjects[startIndex].client}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-transparent to-transparent opacity-80" />
          
          <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#E2861F]/50">
            <span className="text-[#E2861F] text-xs font-mono font-bold uppercase tracking-wider">
              {sectorLabels[featuredProjects[startIndex].sector]}
            </span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-mono">
            <div className="flex items-center gap-1.5 bg-black/60 px-3 py-1.5 rounded-md">
              <MapPin className="w-4 h-4 text-[#E2861F]" />
              <span>{featuredProjects[startIndex].location}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-black/60 px-3 py-1.5 rounded-md">
              <Maximize2 className="w-4 h-4 text-[#E2861F]" />
              <span className="font-bold text-[#E2861F]">
                {featuredProjects[startIndex].area}
              </span>
            </div>
          </div>
        </div>

        {/* Project Meta Info */}
        <div className="lg:col-span-5 flex flex-col justify-between text-white">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E2861F] animate-pulse" />
              <span className="text-white/70 text-xs font-mono uppercase tracking-widest font-semibold">
                Project 0{startIndex + 1} of 0{featuredProjects.length}
              </span>
            </div>

            <h4 className="font-display font-black text-2xl sm:text-3xl uppercase text-white mb-4 leading-tight">
              {featuredProjects[startIndex].client}
            </h4>

            <p className="text-white/80 text-sm leading-relaxed mb-6 font-normal">
              Full-scope FM/VNA laser screed flooring and surface densification delivered to international TR34 standards. Engineered for maximum abrasion resistance and heavy machinery loads.
            </p>

            <div className="space-y-2.5 border-t border-white/10 pt-4 text-xs font-mono">
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-white/60">Location:</span>
                <span className="font-bold text-white">{featuredProjects[startIndex].location}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-white/60">Covered Area:</span>
                <span className="font-bold text-[#E2861F]">{featuredProjects[startIndex].area}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-white/60">Industry Sector:</span>
                <span className="font-bold text-white capitalize">{sectorLabels[featuredProjects[startIndex].sector]}</span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 text-[#E2861F] hover:text-white font-display font-bold uppercase text-xs tracking-wider transition-colors group"
            >
              <span>EXPLORE ALL PROJECTS</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Pagination Thumbnails */}
            <div className="flex gap-1.5">
              {featuredProjects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setStartIndex(i)}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    i === startIndex ? "w-6 bg-[#E2861F]" : "w-2 bg-white/30 hover:bg-white/60"
                  )}
                  aria-label={`Select project ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
