"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Award,
  Leaf,
  Home,
  Pencil,
  Hammer,
  Truck,
  Key,
  Shield,
  Clock,
  Users,
  TreePine,
  Zap,
  Heart
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import StatCard from "@/components/StatCard";
import ProcessStep from "@/components/ProcessStep";
import TestimonialCard from "@/components/TestimonialCard";
import FeatureCard from "@/components/FeatureCard";

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
        <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
          <Image
            src="/generated/hero-cabin-main.png"
            alt="Luxury Log Cabin"
            fill
            className="object-cover scale-105 animate-[scale-in_1.5s_ease-out]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />

          {/* Animated overlay elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight
              animate-[fade-in-down_0.8s_ease-out]">
              Custom Log Cabins Built to<br />Last Generations
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90
              animate-[fade-in-up_0.8s_ease-out_0.2s_both]">
              From cozy weekend retreats to luxury mountain estates, we bring
              your vision to life with traditional craftsmanship and modern
              techniques
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
                    <span className="group-hover:animate-bounce-subtle">📅</span>
                    Schedule Your Free Consultation
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
        </section>

        {/* Statistics Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
              Our Legacy in Numbers
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Nearly three decades of excellence in log cabin construction
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <StatCard value={29} suffix="+" label="Years Experience" duration={2000} />
              <StatCard value={450} suffix="+" label="Cabins Built" duration={2500} />
              <StatCard value={98} suffix="%" label="Client Satisfaction" duration={1800} />
              <StatCard value={15} suffix="+" label="Awards Won" duration={1500} />
            </div>
          </div>
        </section>

        {/* Our Work Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
              Featured Projects
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Explore our finest custom log cabin creations
            </p>

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
                  className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105"
                >
                  View Full Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="py-16 md:py-24 bg-muted/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
              Our Building Process
            </h2>
            <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
              From initial consultation to handing you the keys, we guide you through every step
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 max-w-7xl mx-auto">
              <ProcessStep
                number={1}
                title="Consultation"
                description="We discuss your vision, budget, and timeline to create a custom plan"
                icon={Users}
                delay={0}
              />
              <ProcessStep
                number={2}
                title="Design"
                description="Our architects craft detailed plans tailored to your property and needs"
                icon={Pencil}
                delay={100}
              />
              <ProcessStep
                number={3}
                title="Permits"
                description="We handle all necessary permits and regulatory requirements"
                icon={CheckCircle2}
                delay={200}
              />
              <ProcessStep
                number={4}
                title="Construction"
                description="Expert craftsmen bring your cabin to life with precision and care"
                icon={Hammer}
                delay={300}
              />
              <ProcessStep
                number={5}
                title="Handover"
                description="Final inspection and welcoming you to your dream cabin"
                icon={Key}
                delay={400}
              />
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
              Why Choose Heritage Log Builders
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Decades of expertise combined with unwavering commitment to excellence
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <FeatureCard
                icon={Award}
                title="Master Craftsmanship"
                description="Our builders bring decades of traditional log construction expertise to every project, ensuring timeless quality"
                delay={0}
              />
              <FeatureCard
                icon={TreePine}
                title="Sustainable Materials"
                description="We source premium, eco-friendly timber from sustainable forests, combining beauty with environmental responsibility"
                delay={100}
              />
              <FeatureCard
                icon={Shield}
                title="Lifetime Warranty"
                description="Confidence in our work means comprehensive warranty coverage that protects your investment for generations"
                delay={200}
              />
              <FeatureCard
                icon={Clock}
                title="On-Time Delivery"
                description="Meticulous project management ensures we complete your cabin on schedule without compromising quality"
                delay={0}
              />
              <FeatureCard
                icon={Zap}
                title="Energy Efficient"
                description="Modern insulation techniques and design principles create cabins that are both cozy and energy-smart"
                delay={100}
              />
              <FeatureCard
                icon={Heart}
                title="Customer First"
                description="Your vision drives everything we do. We partner with you from concept to completion and beyond"
                delay={200}
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
              What Our Clients Say
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Don&rsquo;t just take our word for it - hear from our satisfied cabin owners
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <TestimonialCard
                quote="Heritage Log Builders transformed our mountain property into a stunning family retreat. The attention to detail and craftsmanship exceeded all our expectations."
                author="Sarah & Michael Thompson"
                location="Aspen, Colorado"
                delay={0}
              />
              <TestimonialCard
                quote="From day one, the team was professional, communicative, and passionate about our project. Our cabin is now the centerpiece of countless family memories."
                author="David Chen"
                location="Lake Tahoe, California"
                delay={100}
              />
              <TestimonialCard
                quote="We've owned many properties, but nothing compares to the quality and character of our Heritage log cabin. It's truly a work of art that will last generations."
                author="Elizabeth Morrison"
                location="Gatlinburg, Tennessee"
                delay={200}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block mb-6 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
                <p className="text-sm font-semibold text-primary-foreground">
                  Limited Slots Available for 2025
                </p>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-primary-foreground leading-tight">
                Ready to Build Your<br />Dream Cabin?
              </h2>

              <p className="text-xl md:text-2xl mb-10 text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
                Let&rsquo;s discuss your vision and create a custom log cabin that will be
                cherished for generations
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/about#contact">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="text-lg px-10 py-7 h-auto font-semibold
                      transform transition-all duration-300 hover:scale-110 hover:shadow-2xl
                      group relative overflow-hidden"
                  >
                    <span className="relative z-10 inline-flex items-center gap-2">
                      Get A Free Consultation
                      <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </span>
                  </Button>
                </Link>

                <Link href="/portfolio">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-10 py-7 h-auto font-semibold
                      bg-transparent border-2 border-white/30 text-primary-foreground
                      hover:bg-white/10 hover:border-white/50
                      transform transition-all duration-300 hover:scale-105"
                  >
                    View Our Work
                  </Button>
                </Link>
              </div>

              <div className="mt-12 flex flex-wrap justify-center gap-8 text-primary-foreground/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>Custom Designs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>Lifetime Warranty</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}