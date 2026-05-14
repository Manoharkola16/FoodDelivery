import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
import chickenthandhoori from "../assets/chickentandhori.png";
import chocolatedessert from "../assets/chocolatedessert.jpg";
import sambarRice from "../assets/sambar-rice.png";
import rayalaseemaprawns from "../assets/rayalaseemaprawns.webp";
import gunturChicken from "../assets/gunturchicken.webp";
import crabs from "../assets/crabs.png";
import FishFry from "../assets/tuna-fish.jpg";
import restaurantpic from "../assets/restaurantpic.png";

import {
  ShoppingBag,
  TicketPercent,
  Bike,
  NotebookPen,
} from "lucide-react";

import { useState } from "react";

const CartPage = () => {
  const {
    cart,
    totalAmount,
    clearCart,
    addToCart,
    increaseQty,
    decreaseQty,
  } = useCart();


   const [coupon, setCoupon] = useState("");
   const [discount, setDiscount] = useState(0);
   const [couponMessage, setCouponMessage] = useState("");

   const [deliveryAddress, setDeliveryAddress] =
  useState("");

const [houseNo, setHouseNo] =
  useState("");

const [landmark, setLandmark] =
  useState("");

const [addressType, setAddressType] =
  useState("Home");


   const [selectedDelivery, setSelectedDelivery] =
  useState("Standard");

const [tipAmount, setTipAmount] =
  useState(0);

const [selectedInstruction, setSelectedInstruction] =
  useState("");

  const navigate = useNavigate();

  const [activeTab, setActiveTab] =
    useState("delivery");

  const deliveryFee = 30;
  const gst = 20;

 const grandTotal =
  totalAmount +
  deliveryFee +
  gst +
  tipAmount -
  discount;

  const handleOrder = () => {
    alert("🎉 Order Placed Successfully!");

    clearCart();

    navigate("/Home");
  };

const applyCoupon = () => {

  if (coupon === "FLAT100") {
    setDiscount(100);
    setCouponMessage("✅ FLAT100 Applied");
  }

  else if (coupon === "SAVE50") {
    setDiscount(50);
    setCouponMessage("✅ SAVE50 Applied");
  }

  else if (coupon === "FREEDEL") {
    setDiscount(deliveryFee);
    setCouponMessage("✅ Free Delivery Applied");
  }

  else {
    setDiscount(0);
    setCouponMessage("❌ Invalid Coupon");
  }
};

  // COMPLETE MEAL ITEMS
  const mealItems = [
    {
      name: "Chicken Tandoori",
      price: 150,
      oldPrice: 200,
      img: chickenthandhoori,
    },
    {
      name: "Rayala seema prawns",
      price: 190,
      oldPrice: 290,
      img: rayalaseemaprawns,
    },
    {
      name: "Guntur Chicken",
      price: 200,
      oldPrice: 290,
      img: gunturChicken,
    },
    {
      name: "Crabs Fry",
      price: 140,
      oldPrice: 199,
      img: crabs,
    },
    {
      name: "Fish Fry",
      price: 190,
      oldPrice: 290,
      img: FishFry,
    },
    {
      name: "Chocolate Dessert",
      price: 299,
      oldPrice: 350,
      img: chocolatedessert,
    },
    {
      name: "Sambar Rice",
      price: 149,
      oldPrice: 199,
      img: sambarRice,
    },
  ];

  return (
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
        </div>
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
                  className="flex justify-between items-center mb-5 border-b pb-3"
                >
                  <div>
                    <h3 className="font-semibold">
                      {item.name}
                    </h3>

                    <p className="text-gray-500 text-sm">
                      ₹{item.price} each
                    </p>
                  </div>

                  <div className="flex items-center gap-3">

                    <button
                      onClick={() =>
                        decreaseQty(item.name)
                      }
                      className=" text-black w-8 h-8 rounded-full text-xl"
                    >
                      -
                    </button>

                    <span className="font-bold">
                      {item.qty}
                    </span>

                    <button
                      onClick={() =>
                        increaseQty(item.name)
                      }
                      className=" text-black w-8 h-8 rounded-full text-xl"
                    >
                      +
                    </button>

                    <p className="font-bold w-16 text-right">
                      ₹
                      {item.price * item.qty}
                    </p>
                  </div>
                </div>
              ))}

              {/* ADD ITEMS */}
              <div className="flex gap-3 mt-6">

                <button
                  onClick={() =>
                    navigate("/Home")
                  }
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

        {/* COMPLETE YOUR MEAL */}
        <div className="bg-white rounded-3xl p-4 mt-4 shadow-sm">

          <h2 className="text-pink-500 font-extrabold tracking-wide text-lg mb-4">
            COMPLETE YOUR MEAL ✨
          </h2>

          <div className="flex gap-4 overflow-x-auto scrollbar-hide">

            {mealItems.map((item, index) => (

              <div
                key={index}
                className="min-w-[140px] relative"
              >

                <img
                  src={item.img}
                  alt=""
                  className="w-25 h-25 object-cover rounded-2xl"
                />

                <button
                  onClick={() =>
                    addToCart(item)
                  }
                  className="absolute top-2 right-2 bg-white shadow-md w-9 h-9 rounded-xl text-green-600 text-2xl font-bold"
                >
                  +
                </button>

                <h3 className="font-semibold mt-2 text-sm">
                  {item.name}
                </h3>

                <p className="text-pink-500 text-sm font-bold">
                  Price Drop
                </p>

                <div className="flex gap-2 items-center">

                  <span className="line-through text-gray-400">
                    ₹{item.oldPrice}
                  </span>

                  <span className="font-bold">
                    ₹{item.price}
                  </span>

                </div>
              </div>
            ))}
          </div>
        </div>

      {/* COUPON SECTION */}
<div className="bg-white rounded-2xl p-4 mt-4 shadow-sm">

  <div className="flex gap-3">

    <input
      type="text"
      placeholder="Enter Coupon Code"
      value={coupon}
      onChange={(e) =>
        setCoupon(e.target.value.toUpperCase())
      }
      className="border w-full p-3 rounded-xl outline-none"
    />

    <button
      onClick={applyCoupon}
      className="bg-green-500 text-white px-5 rounded-xl hover:bg-green-700"
    >
      Apply
    </button>

  </div>

  {/* MESSAGE */}
  {couponMessage && (
    <p className="mt-3 font-semibold text-sm">
      {couponMessage}
    </p>
  )}

  {/* AVAILABLE COUPONS */}
  <div className="mt-4 text-sm text-gray-600">

    <p className="font-bold mb-2">
      Available Coupons
    </p>

    <div className="flex flex-wrap gap-2">

      <span className="bg-gray-100 px-3 py-2 rounded-lg">
        FLAT100
      </span>

      <span className="bg-gray-100 px-3 py-2 rounded-lg">
        SAVE50
      </span>

      <span className="bg-gray-100 px-3 py-2 rounded-lg">
        FREEDEL
      </span>

    </div>
  </div>

</div>

        {/* DELIVERY / TIP / INSTRUCTIONS */}
        <div className="bg-white rounded-3xl p-4 mt-4 shadow-sm">

          <div className="bg-gray-100 rounded-full flex justify-between p-1">

            <button
              onClick={() =>
                setActiveTab("delivery")
              }
              className={`flex-1 py-3 rounded-full font-semibold ${
                activeTab === "delivery"
                  ? "bg-black text-white"
                  : ""
              }`}
            >
              Delivery
            </button>

            <button
              onClick={() =>
                setActiveTab("tip")
              }
              className={`flex-1 py-3 rounded-full font-semibold ${
                activeTab === "tip"
                  ? "bg-black text-white"
                  : ""
              }`}
            >
              Tip
            </button>

            <button
              onClick={() =>
                setActiveTab("instructions")
              }
              className={`flex-1 py-3 rounded-full font-semibold ${
                activeTab ===
                "instructions"
                  ? "bg-black text-white"
                  : ""
              }`}
            >
              Instructions
            </button>
          </div>

        {/* DELIVERY TAB */}
{activeTab === "delivery" && (
  <div className="mt-5 space-y-4">

    {/* STANDARD */}
    <div
      onClick={() =>
        setSelectedDelivery("Standard")
      }
      className={`border rounded-2xl p-4 flex justify-between items-center cursor-pointer transition ${
        selectedDelivery === "Standard"
          ? "border-orange-500 bg-orange-50"
          : ""
      }`}
    >

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

    {/* ECO SAVER */}
    <div
      onClick={() =>
        setSelectedDelivery("Eco Saver")
      }
      className={`border rounded-2xl p-4 flex justify-between items-center cursor-pointer transition ${
        selectedDelivery === "Eco Saver"
          ? "border-green-500 bg-green-50"
          : ""
      }`}
    >

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
      Thank your delivery partner ❤️
    </p>

    <div className="grid grid-cols-4 gap-3">

      {[20, 30, 50, 100].map((tip) => (

        <button
          key={tip}
          onClick={() =>
            setTipAmount(tip)
          }
          className={`rounded-xl py-4 font-bold border transition ${
            tipAmount === tip
              ? "border-orange-500 text-orange-500 border-2"
              : ""
          }`}
        >
          ₹{tip}
        </button>
      ))}

    </div>

    {/* REMOVE TIP */}
    {tipAmount > 0 && (
      <button
        onClick={() => setTipAmount(0)}
        className="mt-4 text-red-500 font-semibold"
      >
        Remove Tip
      </button>
    )}

  </div>
)}

         {/* INSTRUCTIONS TAB */}
{activeTab === "instructions" && (

  <div className="mt-5 overflow-x-auto">

    <div className="flex gap-4 min-w-max">

      {[
        {
          emoji: "📞",
          text: "Avoid Calling",
        },
        {
          emoji: "🚪",
          text: "Leave at Door",
        },
        {
          emoji: "🔕",
          text: "Don't Ring Bell",
        },
        {
          emoji: "🥄",
          text: "Extra Spoons",
        },
      ].map((item, index) => (

        <div
          key={index}
          onClick={() =>
            setSelectedInstruction(item.text)
          }
          className={`border rounded-2xl p-4 w-32 text-center cursor-pointer transition ${
            selectedInstruction === item.text
              ? "border-orange-500 bg-orange-50"
              : ""
          }`}
        >

          <p className="text-3xl mb-2">
            {item.emoji}
          </p>

          <p>{item.text}</p>

        </div>
      ))}

    </div>

    {/* SELECTED MESSAGE */}
    {selectedInstruction && (
      <p className="mt-4 text-green-600 font-semibold">
        Selected:
        {" "}
        {selectedInstruction}
      </p>
    )}

  </div>
)}
        </div>
      </div>



        {/* BILL DETAILS */}
<div className="bg-white rounded-2xl p-4 mt-4 shadow-sm">

  <h2 className="font-bold text-lg mb-4">
    Bill Details
  </h2>

  <div className="space-y-3">

    <div className="flex justify-between">
      <p>Item Total</p>
      <p>₹{totalAmount}</p>
    </div>

    <div className="flex justify-between">
      <p>Delivery Fee</p>
      <p>₹{deliveryFee}</p>
    </div>

    <div className="flex justify-between">
      <p>GST & Charges</p>
      <p>₹{gst}</p>
    </div>

    <div className="flex justify-between text-green-600 font-bold">
      <p>Coupon Discount</p>
      <p>- ₹{discount}</p>
    </div>

    <hr />

    <div className="flex justify-between font-bold text-lg">
      <p>To Pay</p>
      <p>₹{grandTotal}</p>
    </div>

      <div className="flex justify-between">
  <p>Delivery Type</p>
  <p>{selectedDelivery}</p>
</div>

<div className="flex justify-between">
  <p>Delivery Tip</p>
  <p>₹{tipAmount}</p>
</div>


  </div>
</div>

        
            {/* DELIVERY ADDRESS */}
<div className="bg-white rounded-3xl p-5 mt-4 shadow-sm">

  <div className="flex items-center justify-between mb-5">

    <div>
      <h2 className="text-xl font-bold">
        Delivery Address
      </h2>

      <p className="text-gray-500 text-sm">
        Enter your delivery details
      </p>
    </div>

    <div className="bg-orange-100 text-orange-500 px-4 py-2 rounded-full font-semibold">
      📍 Deliver Here
    </div>
  </div>

  {/* ADDRESS INPUT */}
  <div className="space-y-4">

    {/* FULL ADDRESS */}
    <textarea
      placeholder="Enter full delivery address"
      value={deliveryAddress}
      onChange={(e) =>
        setDeliveryAddress(e.target.value)
      }
      className="w-full border rounded-2xl p-4 outline-none resize-none h-28"
    />

    {/* HOUSE & LANDMARK */}
    <div className="grid md:grid-cols-2 gap-4">

      <input
        type="text"
        placeholder="House / Flat No"
        value={houseNo}
        onChange={(e) =>
          setHouseNo(e.target.value)
        }
        className="border rounded-2xl p-4 outline-none"
      />

      <input
        type="text"
        placeholder="Landmark"
        value={landmark}
        onChange={(e) =>
          setLandmark(e.target.value)
        }
        className="border rounded-2xl p-4 outline-none"
      />
    </div>

    {/* ADDRESS TYPE */}
    <div className="flex gap-3">

      {["Home", "Work", "Other"].map((type) => (

        <button
          key={type}
          onClick={() =>
            setAddressType(type)
          }
          className={`px-5 py-3 rounded-2xl font-semibold transition ${
            addressType === type
              ? "bg-orange-500 text-white"
              : "bg-gray-100"
          }`}
        >
          {type}
        </button>
      ))}
    </div>

    {/* SELECTED ADDRESS PREVIEW */}
    {deliveryAddress && (
      <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4 mt-3">

        <h3 className="font-bold text-orange-500 mb-2">
          Delivery To:
        </h3>

        <p className="text-gray-700">
          {deliveryAddress}
        </p>

        {houseNo && (
          <p className="text-gray-600 mt-1">
            House No: {houseNo}
          </p>
        )}

        {landmark && (
          <p className="text-gray-600 mt-1">
            Landmark: {landmark}
          </p>
        )}

        <p className="mt-2 font-semibold">
          Address Type: {addressType}
        </p>
      </div>
    )}
  </div>
</div>

      {/* BOTTOM PAYMENT BAR */}
      {cart.length > 0 && (
        <div className="fixed bottom-0 left-0 w-full bg-white shadow-2xl border p-3">

          <div className="max-w-2xl mx-auto flex justify-between items-center">

            <div>
              <p className="text-sm">
                PAY USING
              </p>

              <h3 className="font-bold flex items-center gap-2">
                <Bike size={25} />
                Cash / UPI
              </h3>
            </div>

            <button
              onClick={handleOrder}
              className="bg-green-500 text-white px-8 py-3 rounded-2xl text-lg hover:bg-green-700"
            >
              Pay ₹{grandTotal}
            </button>

          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;