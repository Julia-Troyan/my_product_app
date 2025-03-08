import React, { useState, useEffect } from 'react';
import Header from "../../Index/Header/Header";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import "./style_basket.scss";
import Vector from "../../Index/Image/Vector";
import Footer from './../../Index/Footer/Footer';
import EmailContent from './../../Index/EmailContent/EmailContent';
import products from '../../Index/Product/products';

const ITEMS_PER_PAGE = 2;

const Basket = ({ cartItems, setCartItems }) => {
  const [quantities, setQuantities] = useState({});
  const [grandTotal, setGrandTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfFirstItem = (currentPage - 1) * ITEMS_PER_PAGE;
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const currentItems = cartItems.slice(indexOfFirstItem, indexOfLastItem); 
  useEffect(() => {
    const initialQuantities = {};
    cartItems.forEach((item) => {
      initialQuantities[item.id] = 1;
    });
    setQuantities(initialQuantities);
  }, [cartItems]);
  
   useEffect(() => {
    let total = 0;
    cartItems.forEach((item) => {
      const price = parseFloat(item.price.replace('$', ''));
      total += price * (quantities[item.id] || 1); 
    });
    setGrandTotal(total);
  }, [cartItems, quantities]);
 
  const handleRemoveFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleQuantityChange = (productId, newQuantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: newQuantity,
    }));
  };
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

  return (
    <div className="basket-container">
      <div className="basket-container__content">
        <div>
          <Header />
        </div>
        <div>
          <BreadCrumb />
        </div>
      </div>
      <div className="product-box center">
        <div className="product-box_prod">
          <div className='product-box_prod_carts'>
            {cartItems && cartItems.length > 0 ? (
              cartItems.map((product, index) => (
                <div className="product-card" key={`${product.id}-${index}`}>
                  <div className="product-card__image">
                    <img className="product-card__image_foto"src={product.imageUrl} alt={product.title} />
                  </div>
                  <div className="product-card__info">
                    <div className="product-card__info_head">
                    <h2 className="product-card__title">{product.title}</h2>
                    <button
                      className="product-card__remove"
                      onClick={() => handleRemoveFromCart(product.id)}
                    >
                      <Vector />
                    </button>
                    </div>
                    <div className="product-card__info_desc">
                    <p className="product-card__price">Price:<span className="product-card__price_discount">{product.price}</span></p>
                    <p className="product-card__price">Color: <span>Red</span></p>
                    <p className="product-card__price">Size: <span>Xl</span></p>
                    <div className="product-card__quantity">
                      <label>Quantity:	</label>
                      <input className="product-card__quantity_input"
                        type="number"
                        min="1"
                        value={quantities[product.id] || 1}
                        onChange={(e) =>
                          handleQuantityChange(product.id, parseInt(e.target.value))
                        }/>
                    </div>
                    </div>
                    
                  </div>
                </div>
              ))
            ) : (
              <p className="empty-cart-message">Корзина пуста</p>
            )}
          </div>
          

          <div className='product-box_prod_btns'>
            <button onClick={handleNextPage} className='product-box_prod_btns_btn'>CLEAR SHOPPING CART</button>
          <button onClick={handleNextPage} className='product-box_prod_btns_btn'>CONTINUE SHOPPING</button>
            <button onClick={handleClearCart} className='clear-cart-btn'>
              Очистить корзину
            </button>
          </div>
        </div>
        <div className="product-box_score">
          <div className='product-box_score_adres'>
            <h1 className='product-box_score_adres_title'>SHIPPING ADRESS</h1>
            <input className='product-box_score_adres_input' placeholder='Bangladesh' />
            <input className='product-box_score_adres_input' placeholder='State' />
            <input className='product-box_score_adres_input' placeholder='Postcode / Zip' />
            <button className='product-box_score_adres_btn'>
              GET A QUOTE
            </button>
          </div>
          <div className='product-box_score_priceList'>
            <div className='product-box_score_priceList_titles'>
              <h2 className='product-box_score_priceList_titles_h2'>SUB TOTAL<span>${grandTotal.toFixed(2)}</span></h2>
              <h1 className='product-box_score_priceList_titles_h1'>GRAND TOTAL<span className='product-box_score_priceList_titles_h1_span'>${grandTotal.toFixed(2)}</span></h1>
            </div>
            <div className='product-box_score_priceList_btnBox'>
              <button onClick={handlePrevPage} className='product-box_score_priceList_border'></button>
              <button onClick={() => setCurrentPage(1)} className='product-box_score_priceList_bot'>PROCEED TO CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
      <div><EmailContent /></div>
      <div> <Footer /></div>
    </div>
  );
};

export default Basket;