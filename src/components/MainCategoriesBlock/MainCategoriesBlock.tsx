import CategoryBlock from "../CategoryBlock/";
import Headings from "../UI/Headings";
import { categories } from "../../configs/categories";

const MainCategoriesBlock: React.FC = () => {
  return (
    <div className="p-6">
      <Headings level={1}>
        Головні категорії
      </Headings>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
        {categories.map(category => (
          <CategoryBlock key={category.name} {...category} />
        ))}
      </div>
    </div>
  );
};

export default MainCategoriesBlock;
