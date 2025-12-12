import { useEffect, useState } from "react";

import { CartContext } from "./cart.context";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItemIndex = cartItems.findIndex(
    (item) => item.id === productToAdd.id,
  );
  if (existingCartItemIndex < 0) {
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  }
  return (cartItems[existingCartItemIndex].quantity += 1) && [...cartItems];
};

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    setCartItemCount(
      cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0),
    );
  }, [cartItems, setCartItemCount]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartItemCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
