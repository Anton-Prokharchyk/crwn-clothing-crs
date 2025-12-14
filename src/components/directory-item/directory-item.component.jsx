import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from "./directory-item.styles.jsx";

export const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  return (
    <DirectoryItemContainer to={route}>
      <BackgroundImage imgUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};
