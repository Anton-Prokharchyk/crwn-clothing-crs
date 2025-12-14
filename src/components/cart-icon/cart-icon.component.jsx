import { useContext } from "react";

import { CartContext } from "../../contexts/cart/cart.context";

import {
  CartIconContainer,
  CartItemCount,
  ShoppingIcon,
} from "./cart-icon.styles.jsx";

export const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItemCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <CartItemCount>{cartItemCount}</CartItemCount>
    </CartIconContainer>
  );
};
