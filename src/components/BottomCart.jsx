import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";

const BottomCart = () => {
  const { totalItems, totalAmount } = useCart();
  const navigate = useNavigate();

  if (totalItems === 0) return null;

  return (
    <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 w-[95%] sm:w-[400px] bg-amber-200 text-black p-4 rounded-2xl flex justify-between items-center shadow-lg">
      
      <div className="text-sm sm:text-base">
        <p className="font-bold">{totalItems} Items</p>
        <p>₹{totalAmount}</p>
      </div>

      <button
        className="bg-white text-green-600 px-4 py-2 rounded sm:px-4 text-sm sm:text-base"
        onClick={() => navigate("/cart")}
      >
        View Cart →
      </button>

    </div>
  );
};

export default BottomCart;