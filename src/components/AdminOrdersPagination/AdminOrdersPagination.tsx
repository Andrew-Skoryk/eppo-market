"use client";

import { useRouter } from "next/navigation";
import { Pagination } from "@nextui-org/react";

type Props = {
  totalPages: number;
  currentPage: number;
};

function AdminOrdersPagination({ totalPages, currentPage }: Props) {
  const rounter = useRouter();

  const handlePageChange = (newPage: number) => {
    rounter.push(`orders?page=${newPage}`);
  };

  return (
    <Pagination
      total={totalPages}
      initialPage={currentPage}
      onChange={handlePageChange}
      showControls
      variant="faded"
      size="lg"
      showShadow
    />
  );
}

export default AdminOrdersPagination;
