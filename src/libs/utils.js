import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

const longDate = new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
});

// "2026-08-01" → "1 Ağustos 2026"
export function formatDate(isoDate) {
    return longDate.format(new Date(`${isoDate}T00:00:00Z`));
}
