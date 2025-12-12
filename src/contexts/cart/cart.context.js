import { createContext } from "react";

export const CartDropdownContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
});
