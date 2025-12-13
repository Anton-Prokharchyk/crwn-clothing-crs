import { Route, Routes } from "react-router-dom";

import { Header } from "./components/header/header.component";
import { Auth } from "./routes/auth/auth.component";
import { Shop } from "./routes/shop/shop.component";
import { Checkout } from "./routes/checkout/checkout.component";
import { Home } from "./routes/home/home.component";

import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/contact" element={<h1>contact</h1>} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
