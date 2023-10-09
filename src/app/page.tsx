import MinValueOrderComp from "../components/MinValueOrderComp";
import MainCategoriesBlock from "../components/MainCategoriesBlock"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <MinValueOrderComp />
      <MainCategoriesBlock />
    </div>
  );
}
