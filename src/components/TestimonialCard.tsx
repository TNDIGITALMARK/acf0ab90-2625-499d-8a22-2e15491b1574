"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Quote, Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  location: string;
  rating?: number;
  delay?: number;
}

export default function TestimonialCard({
  quote,
  author,
  location,
  rating = 5,
  delay = 0,
}: TestimonialCardProps) {
  const { isVisible, ref } = useScrollAnimation(0.2);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`relative bg-card rounded-xl p-8 shadow-lg border border-border
        transition-all duration-700 ease-out hover:shadow-2xl hover:border-primary/30
        hover:-translate-y-2
        ${
          isVisible
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-12"
        }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Quote Icon */}
      <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
        <Quote className="h-6 w-6 text-primary-foreground" />
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star
            key={i}
            className="h-5 w-5 fill-primary text-primary animate-pulse"
            style={{ animationDelay: `${i * 100}ms` }}
          />
        ))}
      </div>

      {/* Quote Text */}
      <p className="text-foreground/90 italic leading-relaxed mb-6 text-lg">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Author */}
      <div className="border-t border-border pt-4">
        <p className="font-bold text-foreground">{author}</p>
        <p className="text-muted-foreground text-sm">{location}</p>
      </div>
    </div>
  );
}
