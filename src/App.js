import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";

import Cart from "./pages/Cart";
import  ShopContext  from "./context/Shopcontextprovider";

function App() {
  return (
    <div className="App">
       <ShopContext>
        <Router basename={'/http://rohit0444.github.io/cart'}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
           
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
        </ShopContext>
      
    </div>
  );
}



export default App;
