import { Pagination } from "@nextui-org/pagination";
import ProductsList from "../ProductsList";

function GetProductsList({ params }: { params: string }) {

  return (
    <>
      <span className="font-semibold text-blue-700">{params}</span>
      <ProductsList />
      <Pagination
        total={10}
        initialPage={1}
        showControls
        variant="faded"
        size="lg"
        showShadow
      />
    </>
  );
}

export default GetProductsList;
