import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../button/button.component";
import { CartItem } from "../cart-item/cart-item.component";
import { CartContext } from "../../contexts/cart/cart.context";

import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles.jsx";

export const CartDropdown = () => {
  const navigation = useNavigate();
  const { cartItems } = useContext(CartContext);
  const goToCheckoutHandler = () => {
    navigation("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler} type="button">
        GO TO CHECKOUT
      </Button>
    </CartDropdownContainer>
  );
};
