import React from "react";
import "./style_info.scss";


const InfoContent = () => {
  return (
    <section className ="infoContent">
    <div className ="info-card">
      <img src="./img/footer/Forma 1 (3).svg" alt="1"></img>
      <h2>Free Delivery</h2>
      <p>Worldwide delivery on all. Authoritatively morph next-generation innovation with extensive models.</p>
    </div>
    <div className ="info-card">
      <img src="./img/footer/Forma 1 (4).svg" alt="2"></img>
      <h2>Sales & discounts</h2>
      <p>Worldwide delivery on all. Authoritatively morph next-generation innovation with extensive models.</p>
    </div>
    <div className ="info-card">
      <img src="./img/footer/Forma 1 (5).svg" alt="3"></img>
      <h2>Quality assurance</h2>
      <p>Worldwide delivery on all. Authoritatively morph next-generation innovation with extensive models.</p>
    </div>
  </section>
  );
};
export default InfoContent;