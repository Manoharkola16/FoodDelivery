import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import './App.css'
import { CartProvider } from "./components/CartContext";
import CartPage from "./components/CartPage";
import Categories from "./components/Categories";
import CategoryPage from "./components/CategoryPage";
import foods from './data/FoodsData'

function App() {
  return (
   <CartProvider>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<CartPage></CartPage>}></Route>
          <Route path="/categories" element={<Categories foods={foods} />} />
       <Route path="/category/:type" element={<CategoryPage foods={foods} />} />
      </Routes>
    </BrowserRouter>
   </CartProvider>
  );
}

export default App;