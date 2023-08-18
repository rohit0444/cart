import React, { useContext } from "react";
import {ShopContext} from "../context/Shopcontextprovider";


function Products({data}) {
    const { id, productName, price, productImage } = data;
    const { addToCart, cartItems } = useContext(ShopContext);

    const cartItemCount = cartItems[id];
  return (
    <div className="product">
        
        <img src={productImage} alt="abc"/>
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
        <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
      </div>
      
    </div>
  )
}

export default Products
