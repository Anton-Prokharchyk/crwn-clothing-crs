import { useCallback, useEffect, useReducer, useState } from "react";

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

export const CART_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  REMOVE_CART_ITEMS: "REMOVE_CART_ITEMS",
  DELETE_CART_ITEMS: "DELETE_CART_ITEMS",
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
  SET_CART_ITEM_COUNT: "SET_CART_ITEM_COUNT",
  SET_CART_TOTAL: "SET_CART_TOTAL",
};

const INITIAL_CART_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartItemCount: 0,
  cartTotal: 0,
};

const CartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return { ...state, ...payload };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return { ...state, isCartOpen: payload };
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};

export const CartProvider = ({ children }) => {
  console.log("cart provider render");
  const [{ cartItems, isCartOpen, cartItemCount, cartTotal }, dispatch] =
    useReducer(CartReducer, INITIAL_CART_STATE);

  const updateCartItemCount = (newCartItems) => {
    const newCartItemCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0,
    );
    const newCartTotal = cartItems.reduce(
      (total, item) => (total += item.price * item.quantity),
      0,
    );
    dispatch({
      type: CART_ACTION_TYPES.SET_CART_ITEMS,
      payload: {
        cartItems: newCartItems,
        cartItemCount: newCartItemCount,
        cartTotal: newCartTotal,
      },
    });
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemCount(newCartItems);
  };

  const removeItemFromCart = (productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    updateCartItemCount(newCartItems);
  };

  const deleteItemFromCart = (productToDelete) => {
    const newCartItems = deleteCartItem(cartItems, productToDelete);
    updateCartItemCount(newCartItems);
  };

  const setIsCartOpen = (isOpen) => {
    dispatch({ type: CART_ACTION_TYPES.SET_IS_CART_OPEN, payload: isOpen });
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
