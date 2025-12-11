import { useContext } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import Logo from "../../assets/react.svg?react";

import "./header.styles.scss";
export const Header = () => {
  const { currentUser } = useContext(UserContext);

  const handleSignOut = async () => {
    await signOutUser();
  };
  return (
    <>
      <header className="header max-width-container">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <nav className="nav-container">
          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink className="nav-list__item__link" to="/shop">
                shop
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink className="nav-list__item__link" to="/contact">
                contact
              </NavLink>
            </li>
            <li className="nav-list__item">
              {currentUser ? (
                <span onClick={handleSignOut} className="nav-list__item__link">
                  sign out
                </span>
              ) : (
                <NavLink className="nav-list__item__link" to="/auth">
                  sign in
                </NavLink>
              )}
            </li>
            <li className="nav-list__item">
              <NavLink className="nav-list__item__link" to="/shop-cart">
                shop card icon
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};
