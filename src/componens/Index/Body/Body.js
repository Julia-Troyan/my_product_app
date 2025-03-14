import React, { useState } from "react";
import { Link } from "react-router-dom";
import InfoContent from "../InfoContent/InfoContent";
import Product from "../Product/Product";
import products from "../Product/products";
import "./style_body.scss";
import bannerImage from "./img/banner.png";

const Body = ({ cartItems, setCartItems }) => {

  const [visibleCount, setVisibleCount] = useState(6); 
  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };
  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      if (!prevItems.some((item) => item.id === product.id)) {
        return [...prevItems, product];
      }
      return prevItems;
    });
  };
  return (
    <div>
      <section className="banner-section">
      <div className="banner-wrapper">
        <img src={bannerImage} alt="Banner" class="banner-image" />
      </div>
        <div className="banner-text">
          <div className="banner-title">
            <div className="banner__title__wrap">
              <h1 className="banner__title1">THE BRAND</h1>
              <h3 className="banner__title2">
                OF LUXURIOUS <span>FASHION</span>
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section className="category-section">
        <div className="container">
          <div className="category__wrapper">
            <div className="category-women">
              <div className="category-bg">
                <p className="category-text">30% OFF</p>
                <h3 className="category-title">FOR WOMEN</h3>
              </div>
            </div>

            <div className="category-men">
              <div className="category-bg">
                <p className="category-text">HOT DEAL</p>
                <h3 className="category-title">FOR MEN</h3>
              </div>
            </div>

            <div className="category-kids">
              <div className="category-bg">
                <p className="category-text">NEW ARRIVALS</p>
                <h3 className="category-title">FOR KIDS</h3>
              </div>
            </div>

            <div className="category-accesories">
              <div className="category-bg">
                <p className="category-text">LUXURIOUS & TRENDY</p>
                <h3 className="category-title">ACCESSORIES</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mainContent">
        <div className="mainContent__header">
          <h2 className="mainContent__header_h2">Featured Items</h2>
          <p className="mainContent__header_p">Shop for items based on what we featured in this week</p>
        </div>
        <div className="cards">
        {products.slice(0, visibleCount).map((product) => (
            <Product
              key={product.id}
              id={product.id}
              imageUrl={product.imageUrl}
              shadowImageUrl={product.shadowImageUrl}
              price={product.price}
              title={product.title}
              description={product.description}
              onAddToCart={() => handleAddToCart(product)}
            />
          ))}
        </div>
        
      </section>
            <div className="knopka">
        <Link to="/products">
          <button className="knopka-text">Browse All Products</button>
        </Link>
      </div>
         <div>
        <InfoContent />
      </div>
    </div>
  );
};

export default Body;
