
import Product from './../../Index/Product/Product';
import Header from './../../Index/Header/Header';
import BreadCrumb from '../BreadCrumb/BreadCrumb';
import FilterIcon from '../../Index/Image/FilterIcon';
import TrendingIcon from '../../Index/Image/TrendingIcon';
import './style_prodAll.scss';
import products from '../../Index/Product/products';
import InfoContent from '../../Index/InfoContent/InfoContent';
import EmailContent from './../../Index/EmailContent/EmailContent';
import Footer from '../../Index/Footer/Footer'; 


const ProductAll = () => {
  return(
    <div>
      <div><Header /></div>
      <div><BreadCrumb /></div>
    <div className="filter-sort center">
    <details className="filter">
      <summary className="filter__summary"><span className="filter__heading">FILTER <FilterIcon /></span>
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
        <summary className="sort__summary"><span className="sort__heading" >TRENDING NOW</span><TrendingIcon />
        </summary>
      </details>
      <details className="sort__details">
        <summary className="sort__summary"><span className="sort__heading" >SIZE</span><TrendingIcon />
        </summary>
        <div className="sort__box">
          <div className="sort__check">
            <input id="sort__check1" type="checkbox"/>
            <label for="sort__check1">XS</label>
          </div>
          <div className="sort__check">
            <input id="sort__check2" type="checkbox"/>
            <label for="sort__check2">S</label>
          </div>
          <div className="sort__check">
            <input id="sort__check3" type="checkbox"/>
            <label for="sort__check3">M</label>
          </div>
          <div className="sort__check">
            <input id="sort__check4" type="checkbox"/>
            <label for="sort__check4">L</label>
          </div>
        </div>
        </details>
      <details className="sort__details">
        <summary className="sort__summary"><span className="sort__heading" >PRICE</span><TrendingIcon />
        </summary>
        <div className="sort__box">
          <div className="sort__check">
            <input id="sort__check1" type="checkbox"/>
            <label for="sort__check1">0-999</label>
          </div>
          <div className="sort__check">
            <input id="sort__check2" type="checkbox"/>
            <label for="sort__check2">1.000-1.999</label>
          </div>
          <div className="sort__check">
            <input id="sort__check3" type="checkbox"/>
            <label for="sort__check3">2.000-2.999</label>
          </div>
          <div className="sort__check">
            <input id="sort__check4" type="checkbox"/>
            <label for="sort__check4">3.000-3.999</label>
          </div>
        </div>
      </details>
      </div>
    </div>
    <section className="mainContent">
    <div className="cardAll">
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
    <div class="slaider">
  <div class="number-counter">
    <div class="number-counter__slider">
      <span class="number-counter__svg"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.99512 2L2.99512 7L7.99512 12L6.99512 14L-0.00488281 7L6.99512 0L7.99512 2Z" fill="black"/>
        </svg>
        </span><p class="number-counter__p">1</p>
        <p class="number-counter__p">2</p>
        <p class="number-counter__p">3</p>
        <p class="number-counter__p">4</p>
        <p class="number-counter__p">5</p>
        <p class="number-counter__p">6....20</p><span class="number-counter__svg"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-0.00500488 12L4.995 7L-0.00500488 2L0.994995 0L7.995 7L0.994995 14L-0.00500488 12Z" fill="black"/>
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