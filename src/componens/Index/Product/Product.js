import React, { useState } from "react";
import "./style_product.scss";
import BacIcon from "../Image/BacIcon";

const Product = ({ imageUrl, shadowImageUrl, price, title, description, onAddToCart }) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(); 
    setAddedToCart(true);
    setShowMessage(true);

    // Скрыть сообщение через 2 секунды
    setTimeout(() => setShowMessage(false), 2000);
  };


  return (
    
      <div className="cards__min">
        <div className="img-container">
          <img className="background-img" src={imageUrl} alt={title} />
          <div className="shadow">
            <img src={shadowImageUrl}/>
            <button
            className={`product__add ${addedToCart ? "clicked" : ""}`}
            onClick={handleAddToCart}
          >
            <BacIcon /> {addedToCart ? "Added" : "Add to Cart"}
          </button>
          </div>
        </div>
        <div className="text">
          <h2>{title}</h2>
          <p>{description}</p>
          <h4>{price}</h4>
        </div>
      
        {showMessage && <p className="add-to-cart-message">Товар добавлен в корзину!</p>}
      </div>

  );
};

export default Product;