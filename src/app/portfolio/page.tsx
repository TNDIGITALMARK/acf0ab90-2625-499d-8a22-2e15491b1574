import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";

export const metadata = {
  title: "Portfolio - Heritage Log Builders",
  description:
    "Explore our portfolio of custom log cabins and luxury mountain retreats. See our craftsmanship in action.",
};

export default function Portfolio() {
  const projects = [
    {
      title: "Mountain Vista Retreat",
      size: "3,200 sq ft",
      description:
        "Luxury cabin with stone fireplace and wrap-around deck. Features cathedral ceilings, chef's kitchen, and panoramic mountain views.",
      image: "/generated/project-1-mountain-vista.png",
    },
    {
      title: "Lakeside Family Lodge",
      size: "2,800 sq ft",
      description:
        "Traditional log home with modern kitchen integration. Perfect blend of rustic charm and contemporary convenience with lake access.",
      image: "/generated/project-2-lakeside-lodge.png",
    },
    {
      title: "Rustic Executive Retreat",
      size: "4,100 sq ft",
      description:
        "Corporate retreat with conference facilities. Combines professional meeting spaces with the warmth of log construction.",
      image: "/generated/project-3-executive-retreat.png",
    },
    {
      title: "Cozy Creek Cottage",
      size: "1,800 sq ft",
      description:
        "Romantic getaway cabin with hot tub deck. Intimate design perfect for couples seeking a peaceful retreat by the creek.",
      image: "/generated/project-4-cozy-cottage.png",
    },
    {
      title: "Alpine Adventure Base",
      size: "2,400 sq ft",
      description:
        "Ski lodge style cabin with equipment storage. Designed for outdoor enthusiasts with direct access to mountain trails.",
      image: "/generated/project-5-alpine-base.png",
    },
  ];

  const testimonials = [
    {
      name: "Sarah and Mike Thompson",
      quote:
        "The attention to detail exceeded our expectations and the cabin has become our family sanctuary",
      project: "Mountain Vista Retreat",
    },
    {
      name: "Mountain Ridge Resort",
      quote:
        "Heritage Log Builders delivered our guest cabins on time and within budget with exceptional quality",
      project: "Multiple Resort Cabins",
    },
    {
      name: "Jennifer Walsh",
      quote:
        "From design to completion the process was smooth and the results are absolutely stunning",
      project: "Lakeside Family Lodge",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Page Header */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-primary-foreground/90">
              Discover the beauty and craftsmanship of our completed projects.
              Each cabin tells a unique story of quality and attention to detail.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
              What Our Clients Say
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Don't just take our word for it - hear from the families who now
              call our cabins home
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-card p-8 rounded-lg shadow-lg border border-border"
                >
                  <div className="mb-4">
                    <svg
                      className="w-10 h-10 text-primary/30"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-foreground mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-bold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.project}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Let's bring your cabin vision to life. Contact us for a free
              consultation.
            </p>
            <a href="/about#contact">
              <button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-lg px-8 py-4 rounded-md transition-colors">
                Get A Free Consultation
              </button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
