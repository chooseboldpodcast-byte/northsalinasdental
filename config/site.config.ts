/**
 * Site Configuration
 *
 * This is the main configuration file for your dental practice website.
 * Update the values below to customize the site for your practice.
 */

export const siteConfig = {
  //============================================================================
  // PRACTICE INFORMATION
  //============================================================================

  /** Your practice name - appears in header, footer, and throughout the site */
  practiceName: "North Salinas Dental",

  /** Short tagline for your practice */
  tagline: "Your Trusted Family Dentist",

  /** Longer description for SEO and meta tags */
  description: "Creating beautiful and healthy smiles by combining advanced technology with patient comfort and care",

  //============================================================================
  // CONTACT INFORMATION
  //============================================================================

  /** Main phone number */
  phone: "831.449.8363",

  /** Formatted phone number for display */
  phoneFormatted: "(831) 449-8363",

  /** Main email address */
  email: "hello@northsalinasdental.com",

  /** Practice address */
  address: {
    street: "620 E Alvin Dr E",
    city: "Salinas",
    state: "CA",
    zip: "93906",
    /** Google Maps URL for directions */
    mapUrl: "https://maps.app.goo.gl/kK8myGLgssuPVk4H8",
  },

  //============================================================================
  // BUSINESS HOURS
  //============================================================================

  /**
   * Business hours - displayed in footer and contact page
   * Format: "Day(s)": "Hours" or "Closed"
   */
  hours: {
    "Monday": "8:00 AM - 5:00 PM",
    "Tuesday": "8:00 AM - 5:00 PM",
    "Wednesday": "8:00 AM - 5:00 PM",
    "Thursday": "8:00 AM - 5:00 PM",
    "Friday": "Closed",
    "Saturday": "Closed",
    "Sunday": "Closed",
  },

  /** Condensed hours for footer display */
  hoursShort: {
    "Mon - Thu": "8:00 AM - 5:00 PM",
    "Fri - Sun": "Closed",
  },

  //============================================================================
  // SOCIAL MEDIA
  //============================================================================

  /**
   * Social media links - leave empty string "" to hide
   */
  social: {
    facebook: "",
    instagram: "",
    yelp: "",
    google: "",
    twitter: "",
    linkedin: "",
    youtube: "",
  },

  //============================================================================
  // FEATURE TOGGLES
  //============================================================================

  /**
   * Enable or disable site features
   * Set to false to completely disable a feature
   */
  features: {
    /** Enable Spanish language toggle */
    enableSpanish: true,

    /** Show scrolling news ticker below navigation */
    enableNewsTicker: true,

    /** Enable appointment request modal */
    enableAppointmentModal: true,

    /** Show specials/promotions section on homepage */
    enableSpecials: true,

    /** Enable blog section (future feature) */
    enableBlog: false,
  },

  //============================================================================
  // NAVIGATION
  //============================================================================

  /**
   * Show or hide navigation items
   * Set to false to hide a page from navigation
   */
  navigation: {
    showHome: true,
    showServices: true,
    showTeam: true,
    showNewPatients: true,      // Dropdown: Forms + Financial Info
    showNewPatientForms: true,
    showFinancialInfo: true,
    showInsurance: false,       // Hidden until page is ready
    showSpecials: true,
    showReviews: true,          // Patient reviews/testimonials
    showBlog: true,             // Blog/articles section
    showContact: true,
  },

  //============================================================================
  // SERVICES OFFERED
  //============================================================================

  /**
   * Toggle which services to display on the services page
   * Set to false to hide a service section
   */
  services: {
    cleaning: true,
    familyDentistry: true,
    cosmetic: true,
    veneers: true,
    sameDayCrowns: true,
    invisalign: true,
    orthodontics: true,
    implants: true,
    extraction: true,
    sedation: true,
    emergencyDentistry: true,
    rootCanal: false,
    dentures: false,
    teethWhitening: true,
  },

  //============================================================================
  // APPOINTMENT SETTINGS
  //============================================================================

  appointments: {
    /** External booking URL (if using online scheduling service) */
    bookingUrl: "",

    /** Enable phone-based booking */
    phoneBooking: true,

    /** Enable form-based appointment requests */
    formBooking: true,
  },

  //============================================================================
  // EMAIL CONFIGURATION (EmailJS)
  //============================================================================

  /**
   * EmailJS configuration for contact form
   * Sign up at https://www.emailjs.com/
   *
   * These can also be set as environment variables:
   * NEXT_PUBLIC_EMAILJS_SERVICE_ID
   * NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
   * NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
   */
  emailjs: {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
    /** Email address to receive form submissions */
    recipientEmail: "hello@northsalinasdental.com",
  },

  //============================================================================
  // SEO & META
  //============================================================================

  seo: {
    /** Default page title suffix */
    titleSuffix: "| North Salinas Dental",

    /** Open Graph image for social sharing */
    ogImage: "/images/og-image.jpg",

    /** Twitter handle (without @) */
    twitterHandle: "",
  },

  //============================================================================
  // LEGAL PAGES
  //============================================================================

  legal: {
    /** Show privacy policy link in footer */
    showPrivacyPolicy: true,

    /** Show terms of service link in footer */
    showTermsOfService: true,

    /** Year the practice was established (for copyright) */
    establishedYear: 2024,
  },
};

// Type export for TypeScript support
export type SiteConfig = typeof siteConfig;
