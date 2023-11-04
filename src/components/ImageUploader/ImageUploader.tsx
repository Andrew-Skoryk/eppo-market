import { ChangeEvent, useState } from "react";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { useMutation } from "react-query";
import axios from "axios";

const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  },
});

function ImageUploader() {
  const [imagePublicId, setImagePublicId] = useState(null);
  const [error, setError] = useState("");

  const mutation = useMutation((file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    return axios.post("/api/photo", formData);
  });

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      try {
        const response = await mutation.mutateAsync(file);

        setImagePublicId(response.data.public_id);
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
      {imagePublicId && <AdvancedImage cldImg={cld.image(imagePublicId)} />}
      <input type="file" onChange={handleImageChange} />
    </div>
  );
}

export default ImageUploader;
