import { useDispatch, useSelector } from "react-redux";

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
import {
  deleteItemFromCart,
  removeItemFromCart,
  addItemToCart,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selectot.js";

export const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const handleDeleteItem = () =>
    dispatch(deleteItemFromCart(cartItems, cartItem));
  const handleRemoveItem = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));
  const handleAddItem = () => dispatch(addItemToCart(cartItems, cartItem));
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
