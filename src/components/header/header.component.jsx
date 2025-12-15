import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { signOutUser } from "../../utils/firebase/firebase.utils";
import { CartIcon } from "../cart-icon/cart-icon.component";
import { CartDropdown } from "../cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart/cart.context";

import {
  LogoContainerLink,
  NavigationLink,
  NavigationList,
  StyledHeader,
  StyledLogo,
} from "./header.styles.jsx";
import { selectCurrentUser } from "../../store/user/user.selectot.js";

export const Header = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { isCartOpen } = useContext(CartContext);

  const handleSignOut = async () => {
    await signOutUser();
  };
  return (
    <>
      <StyledHeader>
        <LogoContainerLink to="/">
          <StyledLogo />
        </LogoContainerLink>
        <nav className="nav-container">
          <NavigationList>
            <li className="nav-list__item">
              <NavigationLink to="/shop">shop</NavigationLink>
            </li>
            <li className="nav-list__item">
              <NavigationLink to="/contact">contact</NavigationLink>
            </li>
            <li className="nav-list__item">
              {currentUser ? (
                <NavigationLink as={"span"} onClick={handleSignOut}>
                  sign out
                </NavigationLink>
              ) : (
                <NavigationLink to="/auth">sign in</NavigationLink>
              )}
            </li>
            <li className="nav-list__item">
              <NavigationLink>
                <CartIcon />
              </NavigationLink>
            </li>
          </NavigationList>
        </nav>
        {isCartOpen && <CartDropdown />}
      </StyledHeader>
      <Outlet />
    </>
  );
};
