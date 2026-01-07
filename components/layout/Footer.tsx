import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/utils";

const quickLinks = [
  { href: "/services#cosmetic", label: "Cosmetic Dentistry" },
  { href: "/services#general", label: "General Care" },
  { href: "/services#implants", label: "Dental Implants" },
  { href: "/team", label: "Our Team" },
];

const hours = [
  { day: "Mon - Thu", time: "8:00 AM - 6:00 PM" },
  { day: "Fri - Sun", time: "Closed" },
  {/*{ day: "Saturday", time: "9:00 AM - 2:00 PM" },
  { day: "Sunday", time: "Closed" },*/}
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-700 text-white">
      <div className="container-wide py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sage-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://maps.app.goo.gl/kK8myGLgssuPVk4H8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sage-200 hover:text-white transition-colors"
                >
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.city}, {siteConfig.address.state}{" "}
                    {siteConfig.address.zip}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\./g, "")}`}
                  className="flex items-center gap-3 text-sage-200 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>{siteConfig.phone}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-lg text-white mb-4">Hours</h4>
            <ul className="space-y-2">
              {hours.map((item) => (
                <li
                  key={item.day}
                  className="flex justify-between text-sage-200"
                >
                  <span>{item.day}</span>
                  <span>{item.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-sage-600">
        <div className="container-wide py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-sage-300">
            <p>
              © {currentYear} North Salinas Dental. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
