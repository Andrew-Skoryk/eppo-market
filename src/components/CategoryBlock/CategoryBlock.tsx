import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

type CategoryProps = {
  name: string;
  imgSrc: StaticImageData;
  link: string;
  imgPosition: string;
};

function CategoryBlock({ name, imgSrc, link, imgPosition }: CategoryProps) {
  return (
    <Link
      href={link}
      title={name}
      className="flex flex-col gap-3 p-3 text-center transition-colors duration-300 border rounded-md shadow-lg border-gray-3000 group hover:bg-gray-100"
    >
      <div className="relative w-full h-60 mb-42">
        <Image
          src={imgSrc}
          alt={name}
          loading="lazy"
          className={cn("object-cover w-full h-full rounded-md", imgPosition)}
        />
      </div>

      <h2 className="font-semibold transition-colors duration-300 group-hover:text-amber-600 group-active:text-amber-700">
        {name}
      </h2>
    </Link>
  );
}

export default CategoryBlock;
