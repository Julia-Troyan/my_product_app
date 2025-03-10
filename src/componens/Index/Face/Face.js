import { useState } from "react";
import Header from "../Header/Header";
import Body from "../Body/Body";
import EmailContent from "../EmailContent/EmailContent";
import Footer from "../Footer/Footer";



const Face = ({ cartItems, setCartItems }) => {
  
return (
<div>
  <div><Header /></div>
  <div><Body cartItems={cartItems} setCartItems={setCartItems} /></div>
  <div><EmailContent /></div>
  <div><Footer /></div>

</div>
);
};
export default Face;