import "./category-item.styles.scss";

export const CategoryItem = ({ id, category, img }) => {
  return (
    <div key={id} className="category-container">
      <img className="category-container__image" src={img} />
      <div className="category-container__body">
        <h2>{category}</h2>
        <p>Show Now</p>
      </div>
    </div>
  );
};
