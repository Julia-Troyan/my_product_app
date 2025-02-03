import React from "react";
import CarIcon from "../Image/CarIcon";
import Icon from "../Image/Icon";
import SalesIcon from "../Image/SalesIcon";
import "./style_info.scss";

const InfoContent = () => {
  return (
    <section className="infoContent">
      <div className="info-card">
        <CarIcon />
        <h2>Free Delivery</h2>
        <p>Worldwide delivery on all. Authoritatively morph next-generation innovation with extensive models.</p>
      </div>
      <div className="info-card">
        <SalesIcon />
        <h2>Sales & discounts</h2>
        <p>Worldwide delivery on all. Authoritatively morph next-generation innovation with extensive models.</p>
      </div>
      <div className="info-card">
        <Icon />
        <h2>Quality assurance</h2>
        <p>Worldwide delivery on all. Authoritatively morph next-generation innovation with extensive models.</p>
      </div>
    </section>
  );
};

export default InfoContent;
