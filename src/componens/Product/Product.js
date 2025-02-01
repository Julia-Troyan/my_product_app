import React from "react";
import "./style_product.scss";

const Product = ({ imageUrl, shadowImageUrl, price, title, description }) => {
  


  return (
    
      <div className="cards__min">
        <div className="img-container">
          <img className="background-img" src={imageUrl} alt={title} />
          <div className="shadow">
            <img src={shadowImageUrl}/>
            <button>
              {/* <img src="" alt="" /> Add to Cart */}
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