import React from "react";
import "./style_product.scss";
import BacIcon from "../Image/BacIcon";

const Product = ({ imageUrl, shadowImageUrl, price, title, description }) => {
  


  return (
    
      <div className="cards__min">
        <div className="img-container">
          <img className="background-img" src={imageUrl} alt={title} />
          <div className="shadow">
            <img src={shadowImageUrl}/>
            <button className="product__add">
              <BacIcon />Add to Cart
            </button>
          </div>
        </div>
        <div className="text">
          <h2>{title}</h2>
          <p>{description}</p>
          <h4>{price}</h4>
        </div>

        

      </div>

  );
};

export default Product;