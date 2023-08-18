import React from 'react'
import Data from "../Data";
import { createContext, useState } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < Data.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };
  

function Shopcontextprovider(props) {

    const [cartItems, setCartItems] = useState(getDefaultCart());

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
          if (cartItems[item] > 0) {
            let itemInfo = Data.find((product) => product.id === Number(item));
            totalAmount += cartItems[item] * itemInfo.price;
          }
        }
        return totalAmount;
      };

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
      };

      const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
      };
    
     
    
      
      
      const contextValue = {
        cartItems,
        addToCart,
       
        removeFromCart,
        getTotalCartAmount,
       
      };
    

  return (
    
        <ShopContext.Provider value={contextValue}>
          {props.children}
        </ShopContext.Provider>
      );
  
}

export default Shopcontextprovider
