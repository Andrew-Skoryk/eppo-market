// "use client";

// import { useCallback } from "react";
// import { useRouter } from "next/navigation";

// import { testProduct } from "@/types/testProduct";
// import {
//   Table,
//   TableHeader,
//   TableColumn,
//   TableBody,
//   TableRow,
//   TableCell,
// } from "@nextui-org/react";

// const columns = [
//   {
//     key: "imgSrc",
//     label: "ЗОБРАЖЕННЯ",
//   },
//   {
//     key: "article",
//     label: "АРТИКУЛ",
//   },
//   {
//     key: "price",
//     label: "ЦІНА",
//   },
//   {
//     key: "category",
//     label: "КАТЕГОРІЯ",
//   },
//   {
//     key: "subcategory",
//     label: "ПІДКАТЕГОРІЯ",
//   },
// ];

// type Props = {
//   products: testProduct[];
// };

// function AdminProductsTable({ products }: Props) {
//   const router = useRouter();

//   const handleAction = (key: React.Key) => {
//     router.push(`./products/${key}`);
//   };

//   const renderCell = useCallback(
//     (product: testProduct, columnKey: keyof testProduct) => {
//       const cellValue = product[columnKey];

//       switch (columnKey) {
//         case "imgSrc":
//           return "Зображення продукту";
//         default:
//           return cellValue;
//       }
//     },
//     [],
//   );

//   return (
//     <Table
//       aria-label="Таблиця товарів магазину"
//       isStriped
//       isHeaderSticky
//       selectionMode="single"
//       selectionBehavior="replace"
//       color="secondary"
//       onRowAction={handleAction}
//     >
//       <TableHeader columns={columns}>
//         {column => <TableColumn key={column.key}>{column.label}</TableColumn>}
//       </TableHeader>

//       <TableBody emptyContent={"Немає даних для відображення."}>
//         {products.map(product => (
//           <TableRow key={product.id}>
//             {columnKey => {
//               if (columnKey === "imgSrc") return "Зображення";

//               return (
//                 <TableCell>
//                   {renderCell((product, columnKey as keyof testProduct))}
//                 </TableCell>
//               );
//             }}
//           </TableRow>
//         ))}
//       </TableBody>
//     </Table>
//   );
// }
function AdminProductsTable() {
  return <div>under development</div>;
}

export default AdminProductsTable;
