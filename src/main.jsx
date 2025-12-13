import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import { UserProvider } from "./contexts/current-user/user.provider.jsx";
import { CategoriesProvider } from "./contexts/categories/categories.provider.jsx";
import { CartProvider } from "./contexts/cart/cart.provider.jsx";

import "./index.scss";
import "./reset.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>,
);
