import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatNumber = (num: number) => {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    }
    return num.toString();
};

export const MAX_FILE_SIZE = 3000000;