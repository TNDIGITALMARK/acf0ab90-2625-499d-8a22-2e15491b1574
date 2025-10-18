"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  alt: string;
}

const slides: Slide[] = [
  {
    image: "/generated/hero-cabin-main-new.png",
    title: "Custom Log Cabins Built to Last Generations",
    subtitle: "From cozy weekend retreats to luxury mountain estates, we bring your vision to life with traditional craftsmanship and modern techniques",
    alt: "Luxury Log Cabin in Mountain Setting at Golden Hour"
  },
  {
    image: "/generated/hero-cabin-winter-new.png",
    title: "Year-Round Comfort & Timeless Beauty",
    subtitle: "Experience the warmth and elegance of handcrafted log homes designed for every season and built to withstand the test of time",
    alt: "Cozy Winter Log Cabin with Snow and Warm Lighting"
  },
  {
    image: "/generated/hero-cabin-lakeside-new.png",
    title: "Lakeside Living at Its Finest",
    subtitle: "Create unforgettable memories in a custom waterfront cabin where nature meets luxury and tranquility becomes your everyday",
    alt: "Stunning Lakeside Log Cabin at Sunrise with Mountain Reflection"
  },
  {
    image: "/generated/hero-cabin-autumn-new.png",
    title: "Rustic Charm Meets Modern Comfort",
    subtitle: "Embrace the beauty of all seasons in a thoughtfully designed cabin that blends authentic craftsmanship with contemporary amenities",
    alt: "Traditional Log Cabin in Vibrant Autumn Forest"
  },
  {
    image: "/generated/hero-cabin-sunset-estate.png",
    title: "Architectural Excellence & Luxury Living",
    subtitle: "Grand estate designs featuring multi-level layouts, stone accents, and breathtaking outdoor spaces where sophistication meets mountain living",
    alt: "Grand Log Cabin Estate at Sunset with Outdoor Fireplace"
  },
  {
    image: "/generated/hero-cabin-spring-family.png",
    title: "Where Family Memories Are Made",
    subtitle: "Build your family's forever retreat in a welcoming cabin surrounded by nature's beauty, designed for laughter, love, and lasting traditions",
    alt: "Family Log Cabin in Spring Meadow with Wildflowers"
  },
  {
    image: "/generated/hero-cabin-modern-luxury.png",
    title: "Modern Design Meets Timeless Tradition",
    subtitle: "Contemporary luxury cabins with floor-to-ceiling windows, sleek lines, and cutting-edge amenities that redefine mountain sophistication",
    alt: "Modern Luxury Log Cabin with Glass Windows and Infinity Hot Tub"
  },
  {
    image: "/generated/hero-cabin-alpine-summer.png",
    title: "Master Craftsmanship in Every Detail",
    subtitle: "Experience the artistry of hand-hewn timber and precision construction in stunning alpine settings that showcase our heritage of excellence",
    alt: "Handcrafted Log Cabin in Alpine Meadow with Mountain Vista"
  }
];

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsTransitioning(false), 700);
    }
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsTransitioning(false), 700);
    }
  }, [isTransitioning]);

  const goToSlide = useCallback((index: number) => {
    if (!isTransitioning && index !== currentSlide) {
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 700);
    }
  }, [currentSlide, isTransitioning]);

  const togglePlayPause = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      } else if (e.key === " " || e.key === "Spacebar") {
        e.preventDefault();
        togglePlayPause();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide, togglePlayPause]);

  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            className="object-cover scale-105 animate-[scale-in_1.5s_ease-out]"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
        </div>
      ))}

      {/* Animated overlay elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 z-10" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <h1
          key={`title-${currentSlide}`}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-[fade-in-down_0.8s_ease-out]"
        >
          {slides[currentSlide].title.split("<br />").map((line, i) => (
            <span key={i}>
              {line}
              {i < slides[currentSlide].title.split("<br />").length - 1 && <br />}
            </span>
          ))}
        </h1>
        <p
          key={`subtitle-${currentSlide}`}
          className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90 animate-[fade-in-up_0.8s_ease-out_0.2s_both]"
        >
          {slides[currentSlide].subtitle}
        </p>
        <div className="animate-[fade-in-up_0.8s_ease-out_0.4s_both]">
          <Link href="/about#contact" className="inline-block">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 h-auto
                relative overflow-hidden group
                transform transition-all duration-300 ease-out
                hover:scale-105 hover:shadow-2xl hover:shadow-primary/50
                active:scale-95
                animate-pulse-subtle
                before:absolute before:inset-0
                before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
                before:translate-x-[-200%] before:transition-transform before:duration-700
                hover:before:translate-x-[200%]
                after:absolute after:inset-0 after:rounded-md
                after:shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]
                border-2 border-white/10 hover:border-white/30"
            >
              <span className="relative z-10 inline-flex items-center gap-2 font-semibold tracking-wide">
                Book a Free Estimate
                <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </Button>
          </Link>
        </div>

        {/* Floating scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/70 rounded-full animate-bounce" />
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        {/* Previous/Next Buttons */}
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-auto
            w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-sm
            hover:bg-white/20 transition-all duration-300
            flex items-center justify-center text-white
            disabled:opacity-50 disabled:cursor-not-allowed
            border border-white/20 hover:border-white/40
            hover:scale-110 active:scale-95"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
        </button>

        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-auto
            w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-sm
            hover:bg-white/20 transition-all duration-300
            flex items-center justify-center text-white
            disabled:opacity-50 disabled:cursor-not-allowed
            border border-white/20 hover:border-white/40
            hover:scale-110 active:scale-95"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
        </button>

        {/* Play/Pause Button */}
        <button
          onClick={togglePlayPause}
          className="absolute top-4 right-4 pointer-events-auto
            w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm
            hover:bg-white/20 transition-all duration-300
            flex items-center justify-center text-white
            border border-white/20 hover:border-white/40
            hover:scale-110 active:scale-95"
          aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5 ml-0.5" />
          )}
        </button>

        {/* Navigation Dots */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 pointer-events-auto flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`transition-all duration-300 rounded-full
                ${index === currentSlide
                  ? "w-12 h-3 bg-white"
                  : "w-3 h-3 bg-white/40 hover:bg-white/60"
                }
                disabled:cursor-not-allowed
                hover:scale-110 active:scale-95`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentSlide ? "true" : "false"}
            />
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      {isPlaying && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-30 overflow-hidden">
          <div
            key={currentSlide}
            className="h-full bg-primary/80 animate-[progress-bar_5s_linear]"
          />
        </div>
      )}
    </section>
  );
}
