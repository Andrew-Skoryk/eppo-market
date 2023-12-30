"use client";

import { useState } from "react";
import axios from "axios";

import { saveAnnouncement } from "@/lib/announcement";

import toast, { Toaster } from "react-hot-toast";
import ImageUploader from "@/components/ImageUploader";
import { Button } from "@nextui-org/react";

function CreateAnnouncementForm() {
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!image) {
      toast.error("Виберіть зображення");
      return;
    }

    const formData = new FormData();
    formData.append("file", image);

    try {
      const uploadResponse = await axios.post("/api/announcement", formData);
      await saveAnnouncement(uploadResponse.data.url);

      toast.success("Зображення успішно додано");
    } catch (error) {
      toast.error("Помилка: " + error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 items-center">
      <ImageUploader onFileSelect={setImage} />

      <Button
        type="submit"
        className="text-base font-semibold transition-all duration-300 rounded-md outline-none w-fit bg-amber-400 hover:bg-amber-500 text-lime-800 disabled:pointer-events-none disabled:opacity-50"
      >
        Зберегти
      </Button>

      <Toaster
        position="bottom-center"
        containerStyle={{
          bottom: "75px",
        }}
      />
    </form>
  );
}

export default CreateAnnouncementForm;
