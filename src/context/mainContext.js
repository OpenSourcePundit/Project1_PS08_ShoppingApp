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
  function removeFrom(item, page) {
    // console.log(CartData,"---",item)
    page === "cart"
      ? setCartData(CartData.filter((thos) => thos.id !== item.id))
      : setWishlistData(
          WishlistData.filter((selected) => selected.id !== item.id)
        );
  }

  return (
    <MainContext.Provider value={{ CartData, WishlistData, addTo, removeFrom }}>
      {children}
    </MainContext.Provider>
  );
}
