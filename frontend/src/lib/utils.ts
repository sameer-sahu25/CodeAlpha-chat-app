import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getSafeAvatarUrl(url?: string) {
  if (!url) return undefined;
  // If it's the broken iran.liara.run service, return undefined to trigger fallback
  if (url.includes("avatar.iran.liara.run")) return undefined;
  return url;
}
