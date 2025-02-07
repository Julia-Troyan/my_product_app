import React, { useState } from "react";
import Product from "../../Index/Product/Product";
import Basket from "../Basket/Basket";
import products from "../../Index/Product/products";

const Shop = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  
  return (
    <div>
      <h1>Products</h1>
      <div className="products-list">
        {products.map((product) => (
          <Product key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
      <Basket cartItems={cartItems} />
    </div>
  );
};

export default Shop;
