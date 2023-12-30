"use client";

import { Announcement } from "@prisma/client";

import { changeAnnouncementStatus } from "@/lib/announcement";

import { Switch } from "@nextui-org/switch";
import toast, { Toaster } from "react-hot-toast";

type Props = {
  announcement: Omit<Announcement, "name">;
};

function AnnouncementSwitcher({ announcement }: Props) {
  const handleValueChange = async (isSelected: boolean) => {
    try {
      await changeAnnouncementStatus(isSelected);
      toast.success("Статус успішно змінено");
    } catch (error) {
      toast.error("Помилка: " + error);
    }
  };

  return (
    <>
      <Switch
        isSelected={announcement.status}
        onValueChange={handleValueChange}
        color="success"
        size="lg"
      >
        Показувати Анонс на головній сторінці
      </Switch>

      <Toaster
        position="bottom-center"
        containerStyle={{
          bottom: "75px",
        }}
      />
    </>
  );
}

export default AnnouncementSwitcher;
