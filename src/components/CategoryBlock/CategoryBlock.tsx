import Link from "next/link";
import Image, { StaticImageData } from "next/image";

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
      className="flex flex-col p-3 text-center transition-colors duration-300 border rounded-md shadow-lg border-gray-3000 group hover:bg-gray-100"
    >
      <div className="relative w-full mb-4 pb-full">
        <Image
          src={imgSrc}
          alt={name}
          layout="fill"
          objectFit="cover"
          objectPosition={imgPosition}
          className="rounded-md"
        />
      </div>

      <h3 className="font-semibold transition-colors duration-300 group-hover:text-amber-600 group-active:text-amber-700">
        {name}
      </h3>
    </Link>
  );
}

export default CategoryBlock;
