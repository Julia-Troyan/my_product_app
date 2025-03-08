import React from 'react';
import products from '../../Index/Product/products';

const ProductList = ({ cartItems, setCartItems }) => {
  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <button onClick={() => handleAddToCart(product)}>Добавить в корзину</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
