import { StaticImageData } from "next/image";

export interface testProduct {
  id: string,
  imgSrc: StaticImageData,
  price: number,
  category: string,
  subcategory: string,
  article: string,
}