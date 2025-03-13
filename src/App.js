import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import './App.css';
import Face from './componens/Index/Face/Face';
import Basket from './componens/ShoppingCart/Basket/Basket';
import ProductAll from "./componens/ShoppingCart/ProductAll/ProductAll";
import Registration from "./componens/Index/Registration/Registration";
import Body from "./componens/Index/Body/Body";
import ProductInformation from "./componens/ShoppingCart/ProductInformation/ProductInformation"
function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/body" element={<Body cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/" element={<Face cartItems={cartItems} setCartItems={setCartItems}/>} />
        <Route path="/basket" element={<Basket cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/products" element={<ProductAll cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/auth" element={<Registration />} />
        <Route path="/prodInfo" element={<ProductInformation />} />
      </Routes>
    </Router>
  );
}

export default App;
