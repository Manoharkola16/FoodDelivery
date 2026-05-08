import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
import chickenthandhoori from '../assets/chickentandhori.png'
import chocolatedessert from '../assets/chocolatedessert.jpg'
import sambarRice from '../assets/sambarRice.png'
import rayalaseemaprawns from '../assets/rayalaseemaprawns.webp'
import gunturChicken from '../assets/gunturchicken.webp'
import crabs from '../assets/crabs.png'
import FishFry from '../assets/tunaFish.jpg'
import restaurantpic from '../assets/restaurantpic.png'
import {
  ShoppingBag,
  TicketPercent,
  Bike,
  NotebookPen,
} from "lucide-react";
import { useState } from "react";

const CartPage = () => {
  const { cart, totalAmount, clearCart } = useCart();
  const navigate = useNavigate();

  const deliveryFee = 30;
  const gst = 20;

  const grandTotal = totalAmount + deliveryFee + gst;

  const handleOrder = () => {
    alert("🎉 Order Placed Successfully!");

    clearCart();
    navigate("/Home");
  };

  const [activeTab, setActiveTab] = useState("delivery");

  return (
    <>
    
    <div className="bg-gray-100 min-h-screen pb-32">

      {/* TOP SECTION */}
      <div className="bg-white p-5 shadow-sm flex justify-between">

        <div>
          <h1 className="text-2xl font-bold">
          My Kitchen
        </h1>

        <h3 className="text-gray-600 text-sm mt-1">
          Delivery in 25-30 mins
        </h3>

        <h3>
       📍location
        </h3>
        </div >

        <img src={restaurantpic} alt="" className="h-25 w-25  " />
      </div>

      {/* CART ITEMS */}
      <div className="p-4">

        <div className="bg-white rounded-2xl p-4 shadow-sm">

          <h2 className="text-xl font-bold mb-4">
            Your Order
          </h2>

          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center mb-5"
                >
                  <div>
                    <h3 className="font-semibold">
                      {item.name}
                    </h3>

                    <p className="text-gray-500 text-sm">
                      Qty: {item.qty}
                    </p>
                  </div>

                  <p className="font-bold">
                    ₹{item.price * item.qty}
                  </p>
                </div>
              ))}

              {/* ADD ITEMS */}
              <div className="flex gap-3 mt-6">

                <button
                  onClick={() => navigate("/Home")}
                  className="flex items-center gap-2 border px-4 py-3 rounded-xl w-full"
                >
                  <ShoppingBag size={18} />
                  Add Items
                </button>

                <button className="flex items-center gap-2 border px-4 py-3 rounded-xl w-full">
                  <NotebookPen size={18} />
                  Instructions
                </button>

              </div>
            </>
          )}
        </div>

          {/* SURPRISE DEALS */}
<div className="bg-white rounded-3xl p-4 mt-4 shadow-sm">

  {/* TOP */}
  <div className="flex justify-between items-center mb-4">

    <h2 className="text-pink-500 font-extrabold tracking-wide text-lg">
      COMPLETE YOUR MEAL ✨
    </h2>

  </div>

  {/* DEAL ITEMS */}
  <div className="flex gap-4 overflow-x-auto scrollbar-hide">

    {/* ITEM 1 */}
    <div className="min-w-[140px] relative">

      <img
        src={chickenthandhoori}
        alt=""
        className="w-25 h-25 object-cover rounded-2xl"
      />

      <button className="absolute top-2 right-2 bg-white shadow-md w-9 h-9 rounded-xl text-green-600 text-2xl font-bold">
        +
      </button>

      <h3 className="font-semibold mt-2 text-sm">
        Chicken Tandoori
      </h3>

      <p className="text-pink-500 text-sm font-bold">
        Price Drop
      </p>

      <div className="flex gap-2 items-center">
        <span className="line-through text-gray-400">
          ₹200
        </span>

        <span className="font-bold">
          ₹150
        </span>
      </div>

    </div>

  {/* Item 2 */}
    <div className="min-w-[140px] relative">

      <img
        src={rayalaseemaprawns}
        alt=""
        className="w-25 h-25 object-cover rounded-2xl"
      />

      <button className="absolute top-2 right-2 bg-white shadow-md w-9 h-9 rounded-xl text-green-600 text-2xl font-bold">
        +
      </button>

      <h3 className="font-semibold mt-2 text-sm">
        Rayala seema prawns
      </h3>

      <p className="text-pink-500 text-sm font-bold">
        Price Drop
      </p>

      <div className="flex gap-2 items-center">
        <span className="line-through text-gray-400">
          ₹290
        </span>

        <span className="font-bold">
          ₹190
        </span>
      </div>

    </div>

    {/* item3 */}

    <div className="min-w-[140px] relative">

      <img
        src={gunturChicken}
        alt=""
        className="w-25 h-25 object-cover rounded-2xl"
      />

      <button className="absolute top-2 right-2 bg-white shadow-md w-9 h-9 rounded-xl text-green-600 text-2xl font-bold">
        +
      </button>

      <h3 className="font-semibold mt-2 text-sm">
        Guntur Chicken
      </h3>

      <p className="text-pink-500 text-sm font-bold">
        Price Drop
      </p>

      <div className="flex gap-2 items-center">
        <span className="line-through text-gray-400">
          ₹290
        </span>

        <span className="font-bold">
          ₹200
        </span>
      </div>

    </div>

    {/* item 4 */}

    <div className="min-w-[140px] relative">

      <img
        src={crabs}
        alt=""
        className="w-25 h-25 object-cover rounded-2xl"
      />

      <button className="absolute top-2 right-2 bg-white shadow-md w-9 h-9 rounded-xl text-green-600 text-2xl font-bold">
        +
      </button>

      <h3 className="font-semibold mt-2 text-sm">
        Crabs Fry
      </h3>

      <p className="text-pink-500 text-sm font-bold">
        Price Drop
      </p>

      <div className="flex gap-2 items-center">
        <span className="line-through text-gray-400">
          ₹199
        </span>

        <span className="font-bold">
          ₹140
        </span>
      </div>

    </div>


{/* item5 */}
    <div className="min-w-[140px] relative">

      <img
        src={FishFry}
        alt=""
        className="w-25 h-25 object-cover rounded-2xl"
      />

      <button className="absolute top-2 right-2 bg-white shadow-md w-9 h-9 rounded-xl text-green-600 text-2xl font-bold">
        +
      </button>

      <h3 className="font-semibold mt-2 text-sm">
        Fish Fry
      </h3>

      <p className="text-pink-500 text-sm font-bold">
        Price Drop
      </p>

      <div className="flex gap-2 items-center">
        <span className="line-through text-gray-400">
          ₹290
        </span>

        <span className="font-bold">
          ₹190
        </span>
      </div>

    </div>

    {/* ITEM 6*/}
    <div className="min-w-[140px] relative">

      <img
        src={chocolatedessert}
        alt=""
        className="w-25 h-25 object-cover rounded-2xl"
      />

      <button className="absolute top-2 right-2 bg-white shadow-md w-9 h-9 rounded-xl text-green-600 text-2xl font-bold">
        +
      </button>

      <h3 className="font-semibold mt-2 text-sm">
        Chocolate Dessert
      </h3>

      <p className="text-pink-500 text-sm font-bold">
        Price Drop
      </p>

      <div className="flex gap-2 items-center">
        <span className="line-through text-gray-400">
          ₹350
        </span>

        <span className="font-bold">
          ₹299
        </span>
      </div>

    </div>

    {/* ITEM 4 */}
    <div className="min-w-[140px] relative">

      <img
        src={sambarRice}
        alt=""
        className="w-25 h-25 object-cover rounded-2xl"
      />

      <button className="absolute top-2 right-2 bg-white shadow-md w-9 h-9 rounded-xl text-green-600 text-2xl font-bold">
        +
      </button>

      <h3 className="font-semibold mt-2 text-sm">
        Sambar Rice
      </h3>

      <p className="text-pink-500 text-sm font-bold">
        Price Drop
      </p>

      <div className="flex gap-2 items-center">
        <span className="line-through text-gray-400">
          ₹199
        </span>

        <span className="font-bold">
          ₹149
        </span>
      </div>

    </div>

  </div>
</div>

        {/* COUPON SECTION */}
        <div className="bg-white rounded-2xl p-4 mt-4 shadow-sm">

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">

              <TicketPercent className="text-orange-500" />

              <div>
                <h3 className="font-semibold">
                  Apply Coupon
                </h3>

                <p className="text-sm text-gray-500">
                  Save more on your order
                </p>
              </div>
            </div>

            <button className="text-green-600 font-bold">
              Apply
            </button>
          </div>
        </div>

        {/* BILL DETAILS */}
        <div className="bg-amber-200 rounded-2xl p-4 mt-4 shadow-sm">

          {/* DELIVERY / TIP / INSTRUCTIONS */}
<div className="bg-white rounded-3xl p-4 mt-4 shadow-sm">

  {/* TABS */}
  <div className="bg-gray-100 rounded-full flex justify-between p-1">

    <button
      onClick={() => setActiveTab("delivery")}
      className={`flex-1 py-3 rounded-full font-semibold transition ${
        activeTab === "delivery"
          ? "bg-black text-white"
          : "text-black"
      }`}
    >
      Delivery Type
    </button>

    <button
      onClick={() => setActiveTab("tip")}
      className={`flex-1 py-3 rounded-full font-semibold transition ${
        activeTab === "tip"
          ? "bg-black text-white"
          : "text-black"
      }`}
    >
      Tip
    </button>

    <button
      onClick={() => setActiveTab("instructions")}
      className={`flex-1 py-3 rounded-full font-semibold transition ${
        activeTab === "instructions"
          ? "bg-black text-white"
          : "text-black"
      }`}
    >
      Instructions
    </button>

  </div>

  {/* DELIVERY TAB */}
  {activeTab === "delivery" && (
    <div className="mt-5 space-y-4">

      <div className="border rounded-2xl p-4 flex justify-between items-center">

        <div>
          <h3 className="font-bold text-orange-500">
            Standard
          </h3>

          <p className="text-sm text-gray-500">
            Fast delivery
          </p>
        </div>

        <p className="font-bold">
          35-45 mins
        </p>
      </div>

      <div className="border rounded-2xl p-4 flex justify-between items-center">

        <div>
          <h3 className="font-bold">
            Eco Saver
          </h3>

          <p className="text-sm text-gray-500">
            Save environment
          </p>
        </div>

        <p className="font-bold">
          40-50 mins
        </p>
      </div>

    </div>
  )}

  {/* TIP TAB */}
  {activeTab === "tip" && (
    <div className="mt-5">

      <p className="text-gray-600 mb-5">
        Thank your delivery partner with a tip ❤️
      </p>

      <div className="grid grid-cols-4 gap-3">

        <button className="border rounded-xl py-4 font-bold">
          ₹20
        </button>

        <button className="border-2 border-orange-500 rounded-xl py-4 font-bold text-orange-500">
          ₹30
        </button>

        <button className="border rounded-xl py-4 font-bold">
          ₹50
        </button>

        <button className="border rounded-xl py-4 font-bold">
          Other
        </button>

      </div>

    </div>
  )}

  {/* INSTRUCTIONS TAB */}
  {activeTab === "instructions" && (
    <div className="mt-5 overflow-x-auto">

      <div className="flex gap-4 min-w-max">

        <div className="border rounded-2xl p-4 w-32 text-center">
          <p className="text-3xl mb-2">📞</p>
          <p>Avoid Calling</p>
        </div>

        <div className="border rounded-2xl p-4 w-32 text-center">
          <p className="text-3xl mb-2">🚪</p>
          <p>Leave at Door</p>
        </div>

        <div className="border rounded-2xl p-4 w-32 text-center">
          <p className="text-3xl mb-2">🔕</p>
          <p>Don't Ring Bell</p>
        </div>

        <div className="border rounded-2xl p-4 w-32 text-center">
          <p className="text-3xl mb-2">🥄</p>
          <p>Extra Spoons</p>
        </div>

      </div>

    </div>
  )}

</div>
        </div>
      {/* BOTTOM PAYMENT BAR */}
      {cart.length > 0 && (
        <div className="fixed bottom-0 left-0 w-full bg-white shadow-2xl border-1 p-1">

          <div className="max-w-2xl mx-auto flex justify-between items-center">

            <div>
              <p className="text-sm text-black-500">
                PAY USING
              </p>

              <h3 className="font-bold flex items-center gap-2">
                <Bike size={25} />
                Cash / UPI
              </h3>
            </div>

            <button
              onClick={handleOrder}
              className="bg-green-500 text-white px-8 py-3 rounded-2xl  text-lg hover:bg-green-800"
            >
              Pay ₹{grandTotal}
            </button>

          </div>
        </div>
      )}
    </div>
    </div>
    
    
    </>
    
  );
};

export default CartPage;