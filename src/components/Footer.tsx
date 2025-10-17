import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <Image
              src="/generated/logo.png"
              alt="Heritage Log Builders"
              width={180}
              height={60}
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm text-primary-foreground/80">
              Crafting Custom Cabins Since 1995
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Home
              </Link>
              <Link
                href="/portfolio"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="/about"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                About
              </Link>
              <Link
                href="/about#contact"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/80">
              <p>1247 Mountain View Road</p>
              <p>Pine Valley State 12345</p>
              <p className="mt-2">
                <strong className="text-primary-foreground">Phone:</strong>{" "}
                555-CABINS-1
              </p>
              <p>
                <strong className="text-primary-foreground">Email:</strong>{" "}
                info@heritagelogbuilders.com
              </p>
              <p className="mt-2">
                Monday - Friday: 8 AM - 6 PM<br />
                Saturday: By Appointment
              </p>
            </div>

            {/* Social Media */}
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="hover:text-primary-foreground/60 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:text-primary-foreground/60 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:text-primary-foreground/60 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>
            &copy; {new Date().getFullYear()} Heritage Log Builders. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
