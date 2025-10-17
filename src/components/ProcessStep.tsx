"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { LucideIcon } from "lucide-react";

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

export default function ProcessStep({
  number,
  title,
  description,
  icon: Icon,
  delay = 0,
}: ProcessStepProps) {
  const { isVisible, ref } = useScrollAnimation(0.3);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`relative transition-all duration-700 ease-out
        ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-12"
        }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex flex-col items-center text-center">
        {/* Step Number Badge */}
        <div
          className="relative w-20 h-20 mb-6 rounded-full bg-primary/10
          flex items-center justify-center
          group hover:bg-primary/20 transition-all duration-300
          hover:scale-110 hover:rotate-6"
        >
          <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping opacity-75" />
          <Icon className="h-10 w-10 text-primary relative z-10 group-hover:scale-110 transition-transform" />
          <div
            className="absolute -top-2 -right-2 w-8 h-8 rounded-full
            bg-primary text-primary-foreground flex items-center justify-center
            font-bold text-sm shadow-lg"
          >
            {number}
          </div>
        </div>

        {/* Content */}
        <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>

        {/* Connector Line */}
        {number < 5 && (
          <div
            className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5
            bg-gradient-to-r from-primary/50 to-transparent"
          />
        )}
      </div>
    </div>
  );
}
