import Header from "../../Index/Header/Header";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import "./style_basket.scss";
import Vector from "../../Index/Image/Vector";
import products from "../../Index/Product/products";
import InfoContent from "../../Index/InfoContent/InfoContent";
import Footer from './../../Index/Footer/Footer';
import EmailContent from './../../Index/EmailContent/EmailContent';


const Basket = ({ imageUrl, shadowImageUrl, price, title, description }) => {
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
       <div className="products">
        <div className="product">
        <div>{imageUrl}</div>
          <div className="product__content">
            <div className="product__link">
              <a href="#">
                <h1>MANGO  PEOPLE<br/>T-SHIRT</h1>
               </a>
               <button className="product__cross"><Vector /></button>
            </div>
            <div className="product__price">
              <p>
                Price:<span className="product__discount"> $300</span>
              </p>
              <p>
                Color: Red
              </p>
              <p>
                Size: Xl
              </p>
              <p>
                Quantity:	 <input className="product__count" type="number" value=""/>
              </p>
            </div>
          </div>
        </div>
        <div className="product">
          <div>{imageUrl}</div>
          <div className="product__content">
            <div className="product__link">
             <a href="#"><h1>MANGO PEOPLE<br/>T-SHIRT</h1>
              
            </a>
              <button className="product__cross"><Vector /></button>
            </div>
            <div class="product__price">
              <p>
                Price:<span className="product__discount"> $300</span>
              </p>
              <p>
                Color: Red
              </p>
              <p>
                Size: Xl
              </p>
              <p>
                Quantity:	 <input className="product__count" type="number" value=""/>
                </p>
            </div>
          </div>
        </div>

        <div className="product__buttons">
          <button className="product__but">CLEAR SHOPPING CART</button>
          <button className="product__but">CONTINUE SHOPPING</button>
        </div>
       </div>
       <section className="adress">
        <div className="adress__content">
          <div className="adress__head">
            <h2>
            SHIPPING ADRESS
          </h2>
          </div>
           
          <div className="adress__input">
          <form action="id" className="adress__form">
            <input type="text" placeholder="Bangladesh" className="adress__text"/>
          </form>
          <form action="id" className="adress__form">
            <input type="text" placeholder="State" className="adress__text"/>
          </form>
          <form action="id" className="adress__form">
            <input type="number" placeholder="Postcode / Zip" className="adress__text"/>
          </form>
          <button className="adress__button">GET A QUOTE</button>
        </div>
      </div>
        <section className="adress__total">
          <div className="adress__all">
            <div className="adress__sub">
              <div className="adress__span1"><h4>SUB TOTAL<span className="adress__span">$900</span></h4></div>
              <div className="adress__span2"><h3>GRAND TOTAL<span className="adress__span3">$900</span></h3></div>
            </div>
            <button className="adress__checkout">PROCEED TO CHECKOUT</button>
          </div>

        </section>
      
       </section>

      </div>
      <div><EmailContent /></div>
      <div> <Footer /></div>
    </div>
    
   );
};
export default Basket;