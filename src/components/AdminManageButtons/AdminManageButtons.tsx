"use client";

import { deleteProduct } from "@/lib/deleteProduct";
import { Button } from "@nextui-org/react";

function AdminManageButtons({ id }: { id: string }) {
  return (
    <div className="flex flex-row gap-2">
      <Button onClick={() => deleteProduct(id)} color="danger" size="sm">Видалити</Button>

      <Button color="secondary" size="sm">Редагувати</Button>
    </div>
  );
}

export default AdminManageButtons;
