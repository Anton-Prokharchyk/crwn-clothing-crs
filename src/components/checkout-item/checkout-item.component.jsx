import { useContext } from "react";
import { CartContext } from "../../contexts/cart/cart.context";
import {
  Arrow,
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Price,
  Quantity,
  RemoveButton,
  StyledImage,
  Value,
} from "./checkout-item.styles.jsx";

export const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { deleteItemFromCart, removeItemFromCart, addItemToCart } =
    useContext(CartContext);
  const handleDeleteItem = () => deleteItemFromCart(cartItem);
  const handleRemoveItem = () => removeItemFromCart(cartItem);
  const handleAddItem = () => addItemToCart(cartItem);
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <StyledImage src={imageUrl} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Price>${price}</Price>
      <Quantity>
        <Arrow onClick={handleRemoveItem}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={handleAddItem}>&#10095;</Arrow>
      </Quantity>
      <RemoveButton onClick={handleDeleteItem}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};
