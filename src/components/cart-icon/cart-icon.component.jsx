import { useContext } from "react";

import ShoppingIcon from "../../assets/shopping-bag.svg?react";
import { CartContext } from "../../contexts/cart/cart.context";

import "./cart-icon.styles.scss";

export const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItemCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <div onClick={toggleIsCartOpen} className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItemCount}</span>
    </div>
  );
};
