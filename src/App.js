import "./styles.css";
import ProductListing from "./pages/ProductListing";
import { NavLink, Routes, Route } from "react-router-dom";

import Cart from "./pages/cart";
import Wishlist from "./pages/wishlist";
import About from "./pages/about";

export default function App() {
  return (
    <div className="App">
      <nav>
        |<NavLink to="/">HOME</NavLink>||
        <NavLink to="/cart">CART</NavLink>||
        <NavLink to="/wishlist">WISHLIST</NavLink>|
      </nav>
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/about/:id" element={<About />} />
      </Routes>
    </div>
  );
}
