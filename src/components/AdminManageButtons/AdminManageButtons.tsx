"use client";

import { deleteProduct } from "@/lib/deleteProduct";
import { Button } from "@nextui-org/react";

function AdminManageButtons({ id }: { id: string }) {
  return (
    <div className="flex flex-row gap-4">
      <Button onClick={() => deleteProduct(id)}>Видалити</Button>

      <Button>Редагувати</Button>
    </div>
  );
}

export default AdminManageButtons;
