import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Award, Leaf } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const featuredProjects = [
    {
      title: "Mountain Vista Retreat",
      size: "3,200 sq ft",
      description:
        "Luxury cabin with stone fireplace and wrap-around deck",
      image: "/generated/project-1-mountain-vista.png",
    },
    {
      title: "Lakeside Family Lodge",
      size: "2,800 sq ft",
      description: "Traditional log home with modern kitchen integration",
      image: "/generated/project-2-lakeside-lodge.png",
    },
    {
      title: "Rustic Executive Retreat",
      size: "4,100 sq ft",
      description: "Corporate retreat with conference facilities",
      image: "/generated/project-3-executive-retreat.png",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[600px] md:h-[700px] flex items-center justify-center">
          <Image
            src="/generated/hero-cabin-main.png"
            alt="Luxury Log Cabin"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />

          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Custom Log Cabins Built to<br />Last Generations
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
              From cozy weekend retreats to luxury mountain estates, we bring
              your vision to life with traditional craftsmanship and modern
              techniques
            </p>
            <Link href="/about#contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 h-auto"
              >
                Schedule Your Free Consultation
              </Button>
            </Link>
          </div>
        </section>

        {/* Our Work Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              OUR WORK
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>

            <div className="text-center">
              <Link href="/portfolio">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  View Full Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
              SERVICES
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Our comprehensive services ensure your dream cabin becomes a reality
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Custom Design</h3>
                <p className="text-muted-foreground">
                  Personalized plans tailored to your vision and property
                </p>
              </div>

              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Quality Craftsmanship</h3>
                <p className="text-muted-foreground">
                  Expert builders with decades of log construction experience
                </p>
              </div>

              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Sustainable Building</h3>
                <p className="text-muted-foreground">
                  Eco-friendly materials and energy-efficient construction
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Build Your Dream?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Let's discuss your vision and create a custom cabin that will be
              cherished for generations
            </p>
            <Link href="/about#contact">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6 h-auto"
              >
                Get A Free Consultation
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}