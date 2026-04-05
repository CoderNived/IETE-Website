import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * cn() — Merge Tailwind classes safely.
 * Prevents conflicting classes like "px-4 px-6" (px-6 wins).
 * Usage: cn("px-4", isActive && "bg-blue-500", className)
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * formatDate() — Convert ISO date string to readable format.
 * Usage: formatDate("2025-03-15") → "March 15, 2025"
 */
export function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * truncate() — Shorten text for card previews.
 * Usage: truncate("Long text...", 100) → "Long tex..."
 */
export function truncate(text, maxLength = 120) {
  if (!text) return "";
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "...";
}