import { useDispatch, useSelector } from "react-redux";

import {
  CartIconContainer,
  CartItemCount,
  ShoppingIcon,
} from "./cart-icon.styles.jsx";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selectot.js";
import { setIsCartOpen } from "../../store/cart/cart.action.js";

export const CartIcon = () => {
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartItemCount = useSelector(selectCartCount);
  const dispatch = useDispatch();

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <CartItemCount>{cartItemCount}</CartItemCount>
    </CartIconContainer>
  );
};
