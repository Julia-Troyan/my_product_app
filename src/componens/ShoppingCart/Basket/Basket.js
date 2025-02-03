import Header from "../../Index/Header/Header";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import "./style_basket.scss";




const Basket = () => {
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
   
     
    </div>
   );
};
export default Basket;