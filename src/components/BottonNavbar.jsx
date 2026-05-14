// import { useNavigate } from "react-router-dom";
// import { useCart } from "./CartContext";
// import { Home, Grid, ShoppingCart, User } from "lucide-react";

// const BottomNavbar = () => {
//   const navigate = useNavigate();
//   const { totalItems } = useCart();

//   return (
//     <div className="fixed bottom-0 left-0 w-full bg-gray-500 text-black-50 shadow-md border-t flex justify-around items-center py-3 z-50">

//       {/* Home */}
//       <div onClick={() => navigate("/")} className="flex flex-col items-center cursor-pointer">
//         <Home size={22} />
//         <span className="text-xs">Home</span>
//       </div>

//       {/* Categories */}
//       <div onClick={() => navigate("/categories")} className="flex flex-col items-center cursor-pointer">
//         <Grid size={22} />
//         <span className="text-xs">Categories</span>
//       </div>

//       {/* Cart */}
//       <div onClick={() => navigate("/cart")} className="flex flex-col items-center cursor-pointer relative">
//         <ShoppingCart size={22} />
//         <span className="text-xs">Cart</span>

//         {/* Cart count badge */}
//         {totalItems > 0 && (
//           <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
//             {totalItems}
//           </span>
//         )}
//       </div>

//       {/* Account */}
//       <div onClick={() => navigate("/account")} className="flex flex-col items-center cursor-pointer">
//         <User size={22} />
//         <span className="text-xs">Account</span>
//       </div>

//     </div>
//   );
// };

// export default BottomNavbar;