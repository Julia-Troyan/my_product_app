import React, { useState, memo } from "react";
import { motion } from "framer-motion";
import "./style_product.scss";
import BacIcon from "../Image/BacIcon";

const AddToCartButton = ({ addedToCart, onClick }) => (
  <button 
    className={`product__add ${addedToCart ? "clicked" : ""}`} 
    onClick={onClick}
  >
    <BacIcon /> {addedToCart ? "Added" : "Add to Cart"}
  </button>
);

const Product = React.memo(({ imageUrl, shadowImageUrl, price, title, description, onAddToCart, id }) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleAddToCart = () => {
    onAddToCart({ id, imageUrl, price, title, description });
    setAddedToCart(true);
    setShowMessage(true);

    setTimeout(() => setShowMessage(false), 2000);
  };

  return (
    <div className="cards__min">
      <div className="img-container">
        <img className="background-img" src={imageUrl} alt={title} />
        <div className="shadow">
          <img src={shadowImageUrl} alt={`${title} shadow`} />
          <AddToCartButton addedToCart={addedToCart} onClick={handleAddToCart} />
        </div>
      </div>
      <div className="text">
        <h2>{title}</h2>
        <p>{description}</p>
        <h4>{price}</h4>
      </div>
      {showMessage && (
        <motion.p 
          className="add-to-cart-message"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          aria-live="polite"
        >
          Товар добавлен в корзину!
        </motion.p>
      )}
    </div>
  );
});

export default Product;
