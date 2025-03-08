import React, { useState } from 'react';
import Product from '../../Index/Product/Product';
import Header from './../../Index/Header/Header';
import BreadCrumb from '../BreadCrumb/BreadCrumb';
import FilterIcon from '../../Index/Image/FilterIcon';
import TrendingIcon from '../../Index/Image/TrendingIcon';
import './style_prodAll.scss';
import products from '../../Index/Product/products';
import InfoContent from '../../Index/InfoContent/InfoContent';
import EmailContent from './../../Index/EmailContent/EmailContent';
import Footer from '../../Index/Footer/Footer';
import Basket from '../Basket/Basket';

const ITEMS_PER_PAGE = 9;

const ProductAll = ({ cartItems, setCartItems }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfFirstItem = (currentPage - 1) * ITEMS_PER_PAGE;
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    if (indexOfLastItem < products.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      if (!prevItems.some((item) => item.id === product.id)) {
        return [...prevItems, product];
      }
      return prevItems;
    });
  };

  return(
    <div>
      <div><Header /></div>
      <div><BreadCrumb /></div>
    <div className="filter-sort center">
    <details className="filter">
    <summary className="filter__summary">
        <span className="filter__heading">FILTER <FilterIcon /></span>
    </summary>
    <div className="filter__content">
        <details open className="filter__item">
            <summary className="filter__head">CATEGORY</summary>
            <div className="filter__link-box">
                <a href="#" className="filter__link">Accessories</a>
                <a href="#" className="filter__link">Bags</a>
                <a href="#" className="filter__link">Denim</a>
                <a href="#" className="filter__link">Hoodies & Sweatshirts</a>
                <a href="#" className="filter__link">Jackets & Coats</a>
                <a href="#" className="filter__link">Polos</a>
                <a href="#" className="filter__link">Shirts</a>
                <a href="#" className="filter__link">Shoes</a>
                <a href="#" className="filter__link">Sweaters & Knits</a>
                <a href="#" className="filter__link">T-Shirts</a>
                <a href="#" className="filter__link">Tanks</a>
            </div>
        </details>
        <details className="filter__item">
            <summary className="filter__head">BRAND</summary>
            <div className="filter__link-box">
                <a href="#" className="filter__link">Accessories</a>
                <a href="#" className="filter__link">Bags</a>
                <a href="#" className="filter__link">Denim</a>
                <a href="#" className="filter__link">Hoodies & Sweatshirts</a>
                <a href="#" className="filter__link">Jackets & Coats</a>
                <a href="#" className="filter__link">Polos</a>
                <a href="#" className="filter__link">Shirts</a>
                <a href="#" className="filter__link">Shoes</a>
                <a href="#" className="filter__link">Sweaters & Knits</a>
                <a href="#" className="filter__link">T-Shirts</a>
                <a href="#" className="filter__link">Tanks</a>
            </div>
        </details>
        <details className="filter__item">
            <summary className="filter__head">DESIGNER</summary>
            <div className="filter__link-box">
                <a href="#" className="filter__link">Accessories</a>
                <a href="#" className="filter__link">Bags</a>
                <a href="#" className="filter__link">Denim</a>
                <a href="#" className="filter__link">Hoodies & Sweatshirts</a>
                <a href="#" className="filter__link">Jackets & Coats</a>
                <a href="#" className="filter__link">Polos</a>
                <a href="#" className="filter__link">Shirts</a>
                <a href="#" className="filter__link">Shoes</a>
                <a href="#" className="filter__link">Sweaters & Knits</a>
                <a href="#" className="filter__link">T-Shirts</a>
                <a href="#" className="filter__link">Tanks</a>
            </div>
        </details>
    </div>
</details>
    <div className="sort">
      <details className="sort__details">
        <summary className="sort__details_summary"><span className="sort__details_heading" >TRENDING NOW</span><TrendingIcon />
        </summary>
      </details>
      <details className="sort__details">
        <summary className="sort__details_summary"><span className="sort__details_heading" >SIZE</span><TrendingIcon />
        </summary>
        <div className="sort__details_box">
          <div className="sort__details_check">
            <input id="sort__check1" type="checkbox"/>
            <label for="sort__check1">XS</label>
          </div>
          <div className="sort__details_check">
            <input id="sort__check2" type="checkbox"/>
            <label for="sort__check2">  S<span className='opasity'>g</span></label>
          </div>
          <div className="sort__details_check">
            <input id="sort__check3" type="checkbox"/>
            <label for="sort__check3">  M<span className='opasity'>g</span></label>
          </div>
          <div className="sort__details_check">
            <input id="sort__check4" type="checkbox"/>
            <label for="sort__check4">  L<span className='opasity'>g</span></label>
          </div>
        </div>
        </details>
      <details className="sort__details">
        <summary className="sort__details_summary"><span className="sort__details_heading" >PRICE</span><TrendingIcon />
        </summary>
        
      </details>
      </div>
    </div>
    <section className="mainContent">
    <div className="cardAll">
    {currentProducts.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              imageUrl={product.imageUrl}
              shadowImageUrl={product.shadowImageUrl}
              price={product.price}
              title={product.title}
              description={product.description}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
    </section>
  <div class="slaider">
  <div className="number-counter">
        <div className="number-counter__slider">
          <span className="number-counter__svg" onClick={handlePrevPage}>
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.99512 2L2.99512 7L7.99512 12L6.99512 14L-0.00488281 7L6.99512 0L7.99512 2Z" fill="black" />
            </svg>
          </span>
          <p className="number-counter__p">Страница {currentPage}</p>
          <span className="number-counter__svg" onClick={handleNextPage}>
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M-0.00500488 12L4.995 7L-0.00500488 2L0.994995 0L7.995 7L0.994995 14L-0.00500488 12Z" fill="black" />
            </svg>
          </span>
        </div>
      </div>
 </div>
 <div>
  <InfoContent />
 </div>
 <div>
  <EmailContent />
 </div>
 <div>
  <Footer />
 </div>
 </div>
  );

};
export default ProductAll;