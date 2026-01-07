import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteConfig = {
  name: "North Salinas Dental",
  description: "Creating beautiful and healthy smiles by combining advanced technology with patient comfort and care",
  doctor: "Dr. Ritu Bhardwaj DDS",
  address: {
    street: "620 E Alvin Dr E",
    city: "Salinas",
    state: "CA",
    zip: "93906",
    full: "620 E Alvin Dr E, Salinas, CA 93906",
    mapUrl: "https://maps.app.goo.gl/kK8myGLgssuPVk4H8",
  },
  phone: "831.449.8363",
  phoneFormatted: "(831) 449-8363",
  email: "hello@northsalinasdental.com",
  hours: {
    "Mon - Thur": "8:00 AM - 5:00 PM",
    "Fri - Sun": "Closed",
  },
  social: {
    facebook: "#",
    instagram: "#",
    yelp: "#",
  },
  appointments: {
    bookingUrl: "#appointment", // Update with actual booking URL
    phoneBooking: true,
  },
};
