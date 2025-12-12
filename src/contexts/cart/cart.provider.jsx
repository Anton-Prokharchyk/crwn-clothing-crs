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

const removeCartItem = (cartItems, productToRemove) => {
  return cartItems.filter((item) => {
    if (item.id !== productToRemove.id) {
      return item;
    }
    return item.quantity === 1 ? false : (item.quantity -= 1);
  });
};

const deleteCartItem = (cartItems, productToRemove) => {
  return cartItems.filter((item) => item.id !== productToRemove.id);
};

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    setCartItemCount(
      cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0),
    );
  }, [cartItems, setCartItemCount]);

  useEffect(() => {
    setCartTotal(
      cartItems.reduce(
        (total, item) => (total += item.price * item.quantity),
        0,
      ),
    );
  }, [cartItems, setCartTotal]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const deleteItemFromCart = (productToRemove) => {
    setCartItems(deleteCartItem(cartItems, productToRemove));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartItemCount,
    removeItemFromCart,
    deleteItemFromCart,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
