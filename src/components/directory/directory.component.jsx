import { DirectoryItem } from "../directory-item/directory-item.component";

import { DirectoryContainer } from "./directory.styles.jsx";

export const Directory = ({ categories }) => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};
