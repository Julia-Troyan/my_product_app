import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import './App.css';
import Face from './componens/Index/Face/Face';
import Basket from './componens/ShoppingCart/Basket/Basket';
import ProductAll from "./componens/ShoppingCart/ProductAll/ProductAll";
import Registration from "./componens/Index/Registration/Registration";

function App() {
  const [cartItems, setCartItems] = useState([]); // ✅ Добавляем состояние корзины

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Face />} />
        <Route path="/basket" element={<Basket cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/products" element={<ProductAll cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/auth" element={<Registration />} />
      </Routes>
    </Router>
  );
}

export default App;
