import CategoryBlock from "../CategoryBlock/";
import { categories } from "./categories";

const MainCategoriesBlock: React.FC = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Головні категорії</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map(category => (
          <CategoryBlock key={category.name} {...category} />
        ))}
      </div>
    </div>
  );
};

export default MainCategoriesBlock;
