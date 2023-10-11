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
      className="group p-3 border border-gray-300 rounded-md hover:bg-gray-100 flex flex-col text-center duration-300 transition-colors"
    >
      <div className="w-full relative pb-full mb-4">
        <Image
          src={imgSrc}
          alt={name}
          layout="fill"
          objectFit="cover"
          objectPosition={imgPosition}
          className="rounded-md"
        />
      </div>

      <h3 className="font-semibold group-hover:text-amber-600 transition-colors duration-300 group-active:text-amber-700">
        {name}
      </h3>
    </Link>
  );
}

export default CategoryBlock;
