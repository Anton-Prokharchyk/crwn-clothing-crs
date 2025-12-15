import { useEffect, useState } from "react";

import { CategoriesContext } from "./categories.context";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { selectCategoriesMap } from "../../store/categories/category.selectot";

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategories] = useState({});
  const value = { categoriesMap, setCategories };

  useEffect(() => {
    const getData = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategories(categoryMap);
    };
    getData();
  }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
