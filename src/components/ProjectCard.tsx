import Image from "next/image";
import { Card } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  size: string;
  description: string;
  image: string;
  className?: string;
}

export default function ProjectCard({
  title,
  size,
  description,
  image,
  className = "",
}: ProjectCardProps) {
  return (
    <Card className={`group overflow-hidden border-0 shadow-lg ${className}`}>
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl font-bold mb-1">{title}</h3>
          <p className="text-sm text-white/90 mb-2">{size}</p>
          <p className="text-sm text-white/80 line-clamp-2">{description}</p>
        </div>
      </div>
    </Card>
  );
}
