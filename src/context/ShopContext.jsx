import React, { useState, useEffect, createContext } from "react";
import products from "../data/food_categories.json";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [Data, SetData] = useState([]);

  // Load products once when component mounts
  useEffect(() => {
    SetData(products);
    // console.log("Products loaded:", products);
  }, []); // Empty dependency array ensures it runs only once

  const value = { products: Data, SetData };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
