import { Link, NavLink, Outlet } from "react-router-dom";

import Logo from "../../assets/react.svg?react";

import "./header.styles.scss";
import { UserContext } from "../../contexts/user.context";
import { useContext } from "react";

export const Header = () => {
  const { currentUser } = useContext(UserContext);
  console.log("cvurrentUser", currentUser);
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
              <NavLink className="nav-list__item__link" to="/auth">
                sign in
              </NavLink>
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
