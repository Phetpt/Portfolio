import { twMerge } from 'tailwind-merge';

export function cn(...values: (string | undefined | null | false)[]) {
  return twMerge(...values);
}