import React from 'react'
import Data from "../Data";
import Products from "./Products";
import './Shop.css'

function Shop() {
  return (
    <div className="shop">
    <div className="shopTitle">
      <h1>CAR-SHOP</h1>
    </div>

    <div className="products">
      {Data.map((product) => (
        <Products data={product} />
      ))}
    </div>
  </div>
  )
}

export default Shop
