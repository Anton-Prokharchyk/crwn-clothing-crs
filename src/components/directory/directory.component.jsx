import { CategoryItem } from "../category-item/category-item.component";

import "./directory.styles.scss";

export const Directory = ({ data }) => {
  return (
    <>
      <section className="categories max-width-container">
        <h1>Categories</h1>
        <div className="categories-container">
          {data.map((e) => {
            return <CategoryItem id={e.id} img={e.img} category={e.category} />;
          })}
        </div>
      </section>
    </>
  );
};
