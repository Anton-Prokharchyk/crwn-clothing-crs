import { useContext } from "react";

import { CategoriesContext } from "../../contexts/categories/categories.context";
import { CategoryPreview } from "../../components/category-preview/category-preview.component";

export const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <>
      <h2>Shop Page</h2>
      {Object.keys(categoriesMap).map((title) => {
        return (
          <CategoryPreview
            key={title}
            title={title}
            products={categoriesMap[title]}
          />
        );
      })}
    </>
  );
};
