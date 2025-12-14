import { ProductCard } from "../product-card/product-card.component";

import {
  CategoryPreviewContainer,
  Preview,
  StyledTitleLink,
} from "./category-preview.styles.jsx";

export const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <StyledTitleLink to={title}>{title.toUpperCase()}</StyledTitleLink>
      </h2>
      <Preview>
        {products

          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};
