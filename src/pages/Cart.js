import React, { useContext } from "react";
import {ShopContext}  from "../context/Shopcontextprovider";
import Data  from "../Data";
import CartItem from "./Cartitem";
import { useNavigate } from "react-router-dom";
import './Cart.css';


function Cart() {
  const { cartItems, getTotalCartAmount} = useContext(ShopContext);
  const totalamount = getTotalCartAmount();
  

  const navigate = useNavigate();
  
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>

      <div className="cartItems">
        {Data.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
          else{
            return null;
          }
        })}
      </div>

      <div className="checkout">
          <p> Subtotal: $ {totalamount}</p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          
        </div>
           
           
    </div>
  );
};
      
   

export default Cart
