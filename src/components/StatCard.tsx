"use client";

import { useCountUp } from "@/hooks/useCountUp";

interface StatCardProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
}

export default function StatCard({
  value,
  suffix = "",
  prefix = "",
  label,
  duration = 2000,
}: StatCardProps) {
  const { count, ref } = useCountUp(value, duration);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="text-center p-8 bg-card rounded-lg shadow-lg border border-border
        transform transition-all duration-500 hover:scale-105 hover:shadow-xl
        hover:border-primary/50"
    >
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-muted-foreground text-lg font-medium">{label}</div>
    </div>
  );
}
