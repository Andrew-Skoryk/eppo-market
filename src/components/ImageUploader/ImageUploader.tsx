import { ChangeEvent, useState } from "react";
import { Image, Button } from "@nextui-org/react";
import { useMutation } from "react-query";
import axios from "axios";

function ImageUploader() {
  const [imageSrc, setImageSrc] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const mutation = useMutation((file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    return axios.post("/api/photo", formData);
  });

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(file);

      setSelectedFile(file);
    }
  };

  return (
    <div className="self-start space-y-3">
      {imageSrc && (
        <Image src={imageSrc} alt="Image preview" width={400} height={200} />
      )}
      <input type="file" onChange={handleImageChange} />
      <Button
        onClick={() => {
          if (selectedFile) {
            mutation.mutateAsync(selectedFile);
          }
        }}
      >
        Зберегти
      </Button>
    </div>
  );
}

export default ImageUploader;
