import { useState } from "react";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
import { Home, Grid, ShoppingCart, User,Search } from "lucide-react";
import restaurantpic from '../assets/restaurantpic.png'

const Navbar = ({ search, setSearch }) => {
  const { cart, totalAmount, totalItems } = useCart();
  const [open , setOpen] = useState()
  const navigate= useNavigate()

  return (
    <nav className="fixed w-full px-4 sm:px-6 py-4 bg-gray-900 text-white flex flex-wrap justify-between items-center z-50">

      {/* LEFT SIDE */}
      <div className="flex items-center gap-4">
        <h1 className="text-lg sm:text-xl font-bold">My Kitchen</h1>
      <img src={restaurantpic} alt="" className="h-10 w-15 flex justify-center" />
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4 sm:gap-6 mt-3 sm:mt-0 relative">

         {/* SEARCH BAR */}
        <div className="flex items-center bg-white rounded-lg px-2 py-1">
          
          <Search size={18} className="text-gray-500" />

          <input
            type="text"
            placeholder="Search food..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="outline-none px-2 text-black w-32 sm:w-48"
          />
        </div>

              <div onClick={() => navigate("/home")} className="flex flex-col items-center cursor-pointer">
            <Home size={22} />
             <span className="text-xs">Home</span>
      </div>
       
       <div onClick={() => navigate("/account")} className="flex flex-col items-center cursor-pointer">
        <User size={22} />
        <span className="text-xs">Profile</span>
      </div>

        {/* CART */}
        <div className="relative">
          <div
            onClick={() => setOpen(!open)}
            className="cursor-pointer relative"
          >
           <ShoppingCart size={22} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-1 rounded-full">
              {totalItems}
            </span>
          </div>

          {/* DROPDOWN */}
          {open && (
            <div className="absolute right-0 mt-3 w-60 bg-white text-black rounded-lg shadow-lg p-4 z-50">
              {cart.length === 0 ? (
                <p>Cart is empty</p>
              ) : (
                <>
                  {cart.map((item, i) => (
                    <div key={i} className="flex justify-between text-sm mb-1">
                      <span>{item.name} x {item.qty}</span>
                      <span>₹{item.price * item.qty}</span>
                    </div>
                  ))}

                  <hr className="my-2" />

                  <div className="flex justify-between font-bold">
                    <span>Total:</span>
                    <span>₹{totalAmount}</span>
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        {/* TOTAL */}
        <div className="font-bold text-green-400 text-sm sm:text-base">
          ₹ {totalAmount}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;