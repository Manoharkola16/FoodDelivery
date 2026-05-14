import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import './App.css'
import { CartProvider } from "./components/CartContext";
import CartPage from "./components/CartPage";
import foods from './data/FoodsData'
import { useState } from "react";
import Account from "./components/Account";

function App() {
 
const [search, setSearch] = useState("");
  return (
   <CartProvider>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<CartPage></CartPage>}></Route>
         <Route path="/account" element={<Account />} />
      </Routes>
    </BrowserRouter>
   </CartProvider>
  );
}

export default App;