import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";

const Categories = ({ foods }) => {
  const [selected, setSelected] = useState("All");

  const navigate = useNavigate();

  const categoryList = [
    "All",
    "Veg",
    "Non-Veg",
    "Drinks",
    "Desserts",
    "Milkshakes",
    "Sandwitches",
    "Burger",
  ];

  const { cart, addToCart, removeFromCart } = useCart();

  const filteredFoods =
    selected === "All"
      ? foods
      : foods.filter((item) => item.category === selected);

  return (
    <div className="flex flex-col md:flex-row min-h-screen">

      {/* LEFT SIDE */}
      <div className="w-full h-full md:w-1/4 bg-gray-100 p-4 overflow-x-auto md:overflow-y-auto flex md:block gap-2 md:sticky md:top-0 h-fit sticky top-1 z-40">

        {categoryList.map((cat) => (
          <div
            key={cat}
            onClick={() => setSelected(cat)}
            className={`p-3 mb-2 rounded cursor-pointer whitespace-nowrap ${
              selected === cat
                ? "bg-blue-500 text-white"
                : "bg-white"
            }`}
          >
            {cat}
          </div>
        ))}

        {/* BACK BUTTON */}
        <div className="p-2">
          <button
            onClick={() => navigate("/Home")}
            className="bg-gray-900 text-white px-4 py-2 rounded"
          >
            ← Back
          </button>
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-3/4 p-4 overflow-y-auto">

        <h2 className="text-2xl font-bold mb-6">
          {selected} Items
        </h2>

        {/* FOOD GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">

          {filteredFoods.map((item, index) => (

            <div
              key={index}
              className="shadow-md p-4 rounded-xl text-center bg-white"
            >

              {/* IMAGE */}
              <img
                src={item.img}
                alt={item.name}
                className="h-40 w-50 relative left-20 object-cover rounded-lg transform transition duration-450  hover:scale-110"
              />

              {/* NAME */}
              <h3 className="mt-3 text-lg font-semibold">
                {item.name}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm text-gray-500 mt-1">
                Delicious and freshly prepared dish just for you.
              </p>

              {/* PRICE + BUTTONS */}
              <div className="flex justify-between items-center mt-5">

                {/* PRICE */}
                <span className="text-green-600 font-bold text-lg">
                  ₹ {item.price}
                </span>

                {/* ADD REMOVE */}
                <div className="flex items-center gap-3">

                  <button
                    onClick={() => removeFromCart(item)}
                    className="px-3 py-1  rounded"
                  >
                    -
                  </button>

                  <span className="font-semibold text-lg">
                    {
                      cart.find(
                        (cartItem) =>
                          cartItem.name === item.name
                      )?.qty || 0
                    }
                  </span>

                  <button
                    onClick={() => addToCart(item)}
                    className="px-3 py-1 rounded"
                  >
                    +
                  </button>

                </div>

              </div>

            </div>
          ))}
        </div>

        {/* CART BOX */}
        {cart.length > 0 && (

          <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-amber-200 w-[90%] sm:w-[400px] rounded-2xl shadow-lg px-5 py-3 flex justify-between items-center z-50">

            <div>
              <h2 className="font-bold text-xl">
                {cart.reduce(
                  (acc, item) => acc + item.qty,
                  0
                )}{" "}
                Items
              </h2>

              <p className="text-lg font-semibold">
                ₹{" "}
                {cart.reduce(
                  (acc, item) =>
                    acc + item.price * item.qty,
                  0
                )}
              </p>
            </div>

            <button
              onClick={() => navigate("/cart")}
              className="bg-white px-6 py-3 rounded-lg text-green-700 font-semibold"
            >
              View Cart →
            </button>

          </div>
        )}

      </div>
    </div>
  );
};

export default Categories;