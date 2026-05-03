import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cart, totalAmount, clearCart } = useCart();
  const navigate = useNavigate();

  const handleOrder = () => {
    alert("🎉 Order Placed Successfully!");

    clearCart();     
    navigate("/Home");      

  };

  return (
    <div className="p-4 sm:p-6 max-w-2xl mx-auto pb-24">

      <h2 className="text-2xl font-bold mb-4">Your Order</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className="flex justify-between mb-3">
              <p>{item.name} x {item.qty}</p>
              <p>₹{item.price * item.qty}</p>
            </div>
          ))}

          <hr className="my-4" />

          <h3 className="text-xl font-bold mb-4">
            Total: ₹{totalAmount}
          </h3>

          {/* 🔥 PLACE ORDER BUTTON */}
          <button
            onClick={handleOrder}
            className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700"
          >
            Place Order
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;