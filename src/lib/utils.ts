import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format a number with Indian-style comma separators.
 * e.g., 6000000 → "60,00,000"
 */
export function formatIndianNumber(num: number): string {
  const str = num.toString();
  const lastThree = str.slice(-3);
  const rest = str.slice(0, -3);
  if (rest === "") return lastThree;
  const formatted = rest.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
  return formatted + "," + lastThree;
}
