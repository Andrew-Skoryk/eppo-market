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
