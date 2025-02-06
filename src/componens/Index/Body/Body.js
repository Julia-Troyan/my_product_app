import React from "react";
import InfoContent from "../InfoContent/InfoContent";
import Product from "../Product/Product";
import products from "../Product/products";
import "./style_body.scss";

const Body = () => {
  return (
    <div>
      <section className="banner-section">
        <div className="banner-wrapper"></div>
        <div className="banner-text">
          <div className="banner-title">
            <div className="banner__title__wrap">
              <h1 className="banner__title1">THE BRAND</h1>
              <h2 className="banner__title2">
                OF LUXURIOUS <span>FASHION</span>
              </h2>
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
          {products.map((product) => (
            <Product
              key={product.id}
              imageUrl={product.imageUrl}
              shadowImageUrl={product.shadowImageUrl}
              price={product.price}
              title={product.title}
              description={product.description}
            />
          ))}
        </div>
      </section>
      <div className="knopka">
        <a href="#">
          <button className="knopka-text">Browse All Products</button>
        </a>
      </div>
      <div>
        <InfoContent />
      </div>
    </div>
  );
};

export default Body;
