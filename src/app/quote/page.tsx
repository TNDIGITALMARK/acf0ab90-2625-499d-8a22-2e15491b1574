"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle2, Home, DollarSign, Calendar, MapPin } from "lucide-react";

export default function QuotePage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    projectType: "",
    squareFootage: "",
    budget: "",
    timeline: "",
    location: "",
    description: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Quote Request Submitted!",
      description: "We'll review your information and contact you within 24 hours.",
    });

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      projectType: "",
      squareFootage: "",
      budget: "",
      timeline: "",
      location: "",
      description: "",
    });

    setIsSubmitting(false);
  };

  const isFormValid = () => {
    return (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.phone &&
      formData.projectType &&
      formData.location
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(var(--primary-rgb,124,58,237),0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(var(--accent-rgb,234,179,8),0.1),transparent_50%)]" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Get Your Custom Quote
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Tell us about your dream cabin project, and we'll provide a detailed quote tailored to your vision and budget
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
              <div className="flex flex-col items-center text-center p-4 bg-background/50 backdrop-blur-sm rounded-lg border border-border">
                <CheckCircle2 className="h-8 w-8 text-primary mb-2" />
                <p className="text-sm font-medium text-foreground">Free Consultation</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-background/50 backdrop-blur-sm rounded-lg border border-border">
                <Calendar className="h-8 w-8 text-primary mb-2" />
                <p className="text-sm font-medium text-foreground">24hr Response</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-background/50 backdrop-blur-sm rounded-lg border border-border">
                <DollarSign className="h-8 w-8 text-primary mb-2" />
                <p className="text-sm font-medium text-foreground">Transparent Pricing</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-background/50 backdrop-blur-sm rounded-lg border border-border">
                <Home className="h-8 w-8 text-primary mb-2" />
                <p className="text-sm font-medium text-foreground">Custom Designs</p>
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="border-2 shadow-xl">
                <CardHeader className="space-y-1 pb-8">
                  <CardTitle className="text-2xl md:text-3xl">Project Information</CardTitle>
                  <CardDescription className="text-base">
                    Please fill out the form below with as much detail as possible. All fields marked with * are required.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                        Contact Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">
                            First Name <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="firstName"
                            placeholder="John"
                            value={formData.firstName}
                            onChange={(e) => handleChange("firstName", e.target.value)}
                            required
                            className="h-11"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">
                            Last Name <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="lastName"
                            placeholder="Smith"
                            value={formData.lastName}
                            onChange={(e) => handleChange("lastName", e.target.value)}
                            required
                            className="h-11"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="email">
                            Email <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john.smith@example.com"
                            value={formData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            required
                            className="h-11"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">
                            Phone Number <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="(555) 123-4567"
                            value={formData.phone}
                            onChange={(e) => handleChange("phone", e.target.value)}
                            required
                            className="h-11"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                        Project Details
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="projectType">
                            Project Type <span className="text-destructive">*</span>
                          </Label>
                          <Select
                            value={formData.projectType}
                            onValueChange={(value) => handleChange("projectType", value)}
                            required
                          >
                            <SelectTrigger id="projectType" className="h-11">
                              <SelectValue placeholder="Select project type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="new-build">New Build</SelectItem>
                              <SelectItem value="renovation">Renovation</SelectItem>
                              <SelectItem value="addition">Addition</SelectItem>
                              <SelectItem value="restoration">Restoration</SelectItem>
                              <SelectItem value="commercial">Commercial Project</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="squareFootage">
                            Desired Square Footage
                          </Label>
                          <Input
                            id="squareFootage"
                            type="text"
                            placeholder="e.g., 2500 sq ft"
                            value={formData.squareFootage}
                            onChange={(e) => handleChange("squareFootage", e.target.value)}
                            className="h-11"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="budget">
                            Estimated Budget Range
                          </Label>
                          <Select
                            value={formData.budget}
                            onValueChange={(value) => handleChange("budget", value)}
                          >
                            <SelectTrigger id="budget" className="h-11">
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="under-200k">Under $200,000</SelectItem>
                              <SelectItem value="200k-400k">$200,000 - $400,000</SelectItem>
                              <SelectItem value="400k-600k">$400,000 - $600,000</SelectItem>
                              <SelectItem value="600k-800k">$600,000 - $800,000</SelectItem>
                              <SelectItem value="over-800k">Over $800,000</SelectItem>
                              <SelectItem value="flexible">Flexible / To be discussed</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="timeline">
                            Desired Timeline
                          </Label>
                          <Select
                            value={formData.timeline}
                            onValueChange={(value) => handleChange("timeline", value)}
                          >
                            <SelectTrigger id="timeline" className="h-11">
                              <SelectValue placeholder="Select timeline" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="asap">As soon as possible</SelectItem>
                              <SelectItem value="3-6months">3-6 months</SelectItem>
                              <SelectItem value="6-12months">6-12 months</SelectItem>
                              <SelectItem value="1year+">1+ year</SelectItem>
                              <SelectItem value="flexible">Flexible</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="location">
                          Project Location <span className="text-destructive">*</span>
                        </Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="location"
                            placeholder="City, State or Region"
                            value={formData.location}
                            onChange={(e) => handleChange("location", e.target.value)}
                            required
                            className="h-11 pl-10"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="description">
                          Project Description
                        </Label>
                        <Textarea
                          id="description"
                          placeholder="Tell us about your vision... Include details like number of bedrooms, special features you'd like, architectural style preferences, or any other important information."
                          value={formData.description}
                          onChange={(e) => handleChange("description", e.target.value)}
                          className="min-h-[150px] resize-y"
                        />
                        <p className="text-sm text-muted-foreground">
                          The more details you provide, the more accurate your quote will be.
                        </p>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-6 border-t border-border">
                      <Button
                        type="submit"
                        size="lg"
                        disabled={!isFormValid() || isSubmitting}
                        className="w-full md:w-auto md:min-w-[200px] h-12 text-base font-semibold
                          transform transition-all duration-300 hover:scale-105 disabled:hover:scale-100
                          disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Submitting...
                          </span>
                        ) : (
                          "Request Your Quote"
                        )}
                      </Button>
                      <p className="text-sm text-muted-foreground mt-4">
                        By submitting this form, you agree to be contacted by Heritage Log Builders regarding your project.
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What Happens Next Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
              What Happens Next?
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Our streamlined quote process ensures you get accurate pricing quickly
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary text-2xl font-bold mb-2">
                  1
                </div>
                <h3 className="text-xl font-semibold text-foreground">We Review Your Request</h3>
                <p className="text-muted-foreground">
                  Our team carefully reviews your project details and requirements within 24 hours
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary text-2xl font-bold mb-2">
                  2
                </div>
                <h3 className="text-xl font-semibold text-foreground">Schedule Consultation</h3>
                <p className="text-muted-foreground">
                  We'll contact you to schedule a free consultation to discuss your vision in detail
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary text-2xl font-bold mb-2">
                  3
                </div>
                <h3 className="text-xl font-semibold text-foreground">Receive Your Quote</h3>
                <p className="text-muted-foreground">
                  Get a detailed, transparent quote with no hidden costs or obligations
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
