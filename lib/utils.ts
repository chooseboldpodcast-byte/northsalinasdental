import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function for combining Tailwind CSS classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Re-export siteConfig from the new config location
 * This maintains backward compatibility with existing imports
 *
 * @deprecated Import directly from '@/config' instead
 * Example: import { siteConfig } from '@/config';
 */
export { siteConfig } from '@/config/site.config';
