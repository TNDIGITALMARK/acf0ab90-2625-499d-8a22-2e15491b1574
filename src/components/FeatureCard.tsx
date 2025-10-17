"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  delay = 0,
}: FeatureCardProps) {
  const { isVisible, ref } = useScrollAnimation(0.3);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`group relative bg-card rounded-xl p-8 shadow-md border border-border
        transition-all duration-700 ease-out
        hover:shadow-2xl hover:border-primary/50 hover:-translate-y-3
        ${
          isVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-12 scale-95"
        }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Animated Background Gradient */}
      <div
        className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 via-transparent to-accent/5
        opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />

      {/* Icon Container with Animation */}
      <div className="relative mb-6">
        <div
          className="inline-flex items-center justify-center w-16 h-16 rounded-full
          bg-primary/10 group-hover:bg-primary/20 transition-all duration-500
          group-hover:scale-110 group-hover:rotate-12"
        >
          <Icon className="h-8 w-8 text-primary group-hover:scale-125 transition-transform duration-500" />
        </div>

        {/* Pulse Effect */}
        <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping opacity-0 group-hover:opacity-75" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>

      {/* Decorative Corner Element */}
      <div
        className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent
        rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
    </div>
  );
}
