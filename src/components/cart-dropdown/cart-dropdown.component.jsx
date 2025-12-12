import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../button/button.component";
import { CartItem } from "../cart-item/cart-item.component";
import { CartContext } from "../../contexts/cart/cart.context";

import "./cart-dropdown.styles.scss";

export const CartDropdown = () => {
  const navigation = useNavigate();
  const { cartItems } = useContext(CartContext);
  const goToCheckoutHandler = () => {
    navigation("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckoutHandler} type="button">
        GO TO CHECKOUT
      </Button>
    </div>
  );
};
