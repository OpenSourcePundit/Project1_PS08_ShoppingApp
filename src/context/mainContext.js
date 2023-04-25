import { createContext, useState } from "react";

export const MainContext = createContext();

export function ContentWrapper({ children }) {
  const [CartData, setCartData] = useState([]);
  const [WishlistData, setWishlistData] = useState([]);

  function addTo(item, page) {
    page === "cart"
      ? setCartData((CartData) => [...CartData, item])
      : setWishlistData((WishlistData) => [...WishlistData, item]);
  }
  function removeFrom(item, page) {}

  return (
    <MainContext.Provider value={{ CartData, WishlistData, addTo, removeFrom }}>
      {children}
    </MainContext.Provider>
  );
}
