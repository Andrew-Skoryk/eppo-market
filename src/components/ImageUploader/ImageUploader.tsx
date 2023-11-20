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
    <div className="self-start space-y-3">
      {imageSrc && (
        <Image src={imageSrc} alt="Image preview" width={400} height={200} />
      )}
      <input type="file" onChange={handleImageChange} />
    </div>
  );
}

export default ImageUploader;
