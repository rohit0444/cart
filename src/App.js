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
        <Router basename={window.location.pathname || ''}>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Shop />} />
           
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </Router>
        </ShopContext>
      
    </div>
  );
}



export default App;
