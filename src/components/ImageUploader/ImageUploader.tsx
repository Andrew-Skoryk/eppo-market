import { ChangeEvent, useState } from "react";
import { Image } from "@nextui-org/image";

type Props = {
  onFileSelect: (file: File) => void;
};

function ImageUploader({ onFileSelect }: Props) {
  const [imageSrc, setImageSrc] = useState("");

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(file);

      onFileSelect(file);
    }
  };

  return (
    <div className="flex flex-col items-center self-start space-y-3">
      {imageSrc && (
        <Image
          src={imageSrc}
          alt="Попередній перегляд зображення"
          width={400}
          height={200}
        />
      )}
      <label htmlFor="file-upload" className="cursor-pointer">
        <span className="p-2 text-blue-700 transition-colors bg-blue-100 rounded-md hover:text-blue-800 hover:bg-blue-200">
          Завантажити зображення
        </span>

        <input
          id="file-upload"
          type="file"
          onChange={handleImageChange}
          className="hidden"
        />
      </label>
    </div>
  );
}

export default ImageUploader;
