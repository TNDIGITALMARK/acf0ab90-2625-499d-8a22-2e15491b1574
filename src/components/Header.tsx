"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/generated/logo.png"
              alt="Heritage Log Builders"
              width={50}
              height={50}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/portfolio"
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="/about"
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="/about#contact"
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Phone Number & Theme Toggle */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 text-primary font-semibold">
              <Phone className="h-5 w-5" />
              <span className="text-lg">555-CABINS-1</span>
            </div>
            <ThemeToggle />
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </Button>
          </div>

          {/* Desktop Theme Toggle (for medium screens without phone) */}
          <div className="hidden md:flex lg:hidden">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-foreground hover:text-primary font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/portfolio"
                className="text-foreground hover:text-primary font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="/about"
                className="text-foreground hover:text-primary font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/about#contact"
                className="text-foreground hover:text-primary font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex items-center gap-2 text-primary font-semibold pt-2 border-t border-border">
                <Phone className="h-5 w-5" />
                <span>555-CABINS-1</span>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
