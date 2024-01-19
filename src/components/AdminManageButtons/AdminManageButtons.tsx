"use client";

import { Product } from "@prisma/client";
import { deleteProduct } from "@/lib/deleteProduct";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import CreateProductForm from "../CreateProductForm";
import toast, { Toaster } from "react-hot-toast";

function AdminManageButtons({ product }: { product: Product }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleDelete = async (id: string) => {
    try {
      await deleteProduct(id);
      toast.success("Товар видалено!");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Невідома помилка");
    }
  };

  return (
    <div className="flex flex-row gap-2">
      <Button onClick={() => handleDelete(product.id)} color="danger" size="sm">
        Видалити
      </Button>

      <Button onClick={onOpen} color="secondary" size="sm">
        Редагувати
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl">
        <ModalContent>
          <ModalHeader className="self-center text-2xl">{`Редагувати Товар ${product.article}`}</ModalHeader>
          <ModalBody>
            <CreateProductForm initialProduct={product} />
          </ModalBody>
        </ModalContent>
      </Modal>

      <Toaster
        position="bottom-center"
        containerStyle={{
          bottom: "75px",
        }}
      />
    </div>
  );
}

export default AdminManageButtons;
