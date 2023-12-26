import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// export function getMoneyFormat(input: number) {
//   return new Intl.NumberFormat('uk-UA', {
//     style: 'currency',
//     currency: 'UAH',
//     maximumFractionDigits: 0,
//     currencyDisplay: "symbol",
//   }).format(input);
// }

// функція щоб не було помилки на стороні сервера
export function getMoneyFormat(input: number) {
  const formatted = new Intl.NumberFormat('uk-UA', {
    style: 'currency',
    currency: 'UAH',
    maximumFractionDigits: 0,
  }).format(input);

  if (formatted.endsWith('₴')) {
    return formatted.replace('₴', 'грн').trim();
  }

  return formatted;
}

export function formatDate(date: Date) {
  const formattedDate = date.toLocaleDateString("uk-UA", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Europe/Kiev",
  });
  
  return formattedDate;
}
