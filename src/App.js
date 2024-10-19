import React, { useState } from "react";
import { BrowserRouter , Routes , Route, Link } from "react-router-dom";
//import Home from "./components/home";
//import Search from "./components/search";
import './App.css'

import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Pproducts from "./components/Pproducts";






function App() {
  const [cart , setcart] = useState([]);

  return <BrowserRouter>

  <header>
    <Link to={'/cart'} className="s">Cart</Link>
  </header>

  <Routes>
    <Route path="/" element = {<Pproducts cart={cart} setcart={setcart}/>}/>
    <Route path="/product/:id" element = {<ProductDetails setcart={setcart}/>}/>
    <Route path="/cart" element = {<Cart cart={cart}/>}/>


  </Routes>

  
  
  
  </BrowserRouter>
   
  
}

export default App;
