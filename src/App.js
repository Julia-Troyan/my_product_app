import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Face from './componens/Index/Face/Face';
import Basket from './componens/ShoppingCart/Basket/Basket';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Face />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </Router>
  );
}

export default App;
