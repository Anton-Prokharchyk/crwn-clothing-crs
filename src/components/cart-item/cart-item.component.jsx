import {
  CartItemContainer,
  ItemDetails,
  Name,
  Price,
  StyledImg,
} from "./cart-item.styles.jsx";

export const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <CartItemContainer>
      <StyledImg src={imageUrl} alt={name} />
      <ItemDetails>
        <Name>{name}</Name>
        <Price>
          {quantity} x ${price}
        </Price>
      </ItemDetails>
    </CartItemContainer>
  );
};
