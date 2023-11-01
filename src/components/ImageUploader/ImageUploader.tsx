"use client";

import { ChangeEvent, useState } from "react";
import { Image } from "@nextui-org/image";
import { useMutation } from "react-query";
import axios from "axios";

function ImageUploader() {
  const [image, setImage] = useState<string | null>(null);
  const [error, setError] = useState("");

  const mutation = useMutation((file: File) => {
    const formData = new FormData();
    formData.append("data", file);
    return axios.post("/api/uploader", formData);
  });

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);

      try {
        const response = await mutation.mutateAsync(file);
        console.log("Image uploaded:", response.data.url);
        setError("");
      } catch (error) {
        setError(
          "Помилка завантаження зображення. Будь ласка, спробуйте ще раз.",
        );
      }
    }
  };

  return (
    <div className="self-start space-y-3">
      {error && <p className="text-red-500">{error}</p>}
      {image && (
        <Image
          src={image}
          alt="Uploaded preview"
          width={200}
          height={200}
          radius="md"
          placeholder="blur"
        />
      )}
      <input type="file" onChange={handleImageChange} />
    </div>
  );
}

export default ImageUploader;
