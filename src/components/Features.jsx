  import { useCart } from "./CartContext";
import foods from "../data/FoodsData";
import categories from '../data/CategoriesFood'
// import  '../../public/food.avif'


const Features = () => {

  const { cart, addToCart, removeFromCart } = useCart();

  return (
    
      <>
      {/* CATEGORIES */}
<div className="px-6 py-6 bg-white sticky top-16 z-40 relative ">

  <div className=" flex gap-6 overflow-x-auto scrollbar-hide whitespace-nowrap relative  ">

    {categories.map((item, index) => (
      <div
        key={index}
        className="flex flex-col items-center cursor-pointer min-w-[100px]"
      >

        {/* IMAGE */}
        <div className="w-24 h-24 rounded-full bg-pink-100 overflow-hidden shadow-md hover:scale-105 transition">

          <img
            src={item.img}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* NAME */}
        <p className="mt-3 text-sm font-medium text-gray-700">
          {item.name}
        </p>

      </div>
    ))}

  </div>
</div>


    <section className="py-10 px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center backdrop-blur-2xl">


      {foods.map((item, index) => {

        // Find item in cart
        const cartItem = cart.find(
          (cartItem) => cartItem.name === item.name
        );

        return (
          <div key={index} className="p-4 sm:p-6 shadow-md rounded-xl ">

            <img
              src={item.img}
              alt={item.name}
              className="w-40 h-45 relative left-25 object-cover rounded-lg mb-4 transform transition duration-300 hover:scale-110"
            />

            <h2 className="text-xl font-semibold">{item.name}</h2>

            <p className="text-sm">
              Delicious and freshly prepared dish just for you.
            </p>

            <div className="flex justify-between items-center mt-4">

              <span className="text-lg font-bold text-green-600">
                ₹ {item.price}
              </span>

              <div className="flex items-center gap-3">

                <button
                  onClick={() => removeFromCart(item)}
                  className="px-2 py-1 text-black rounded"
                >
                  -
                </button>

                <span className="font-semibold">
                  {cartItem?.qty || 0}
                </span>

                <button
                  onClick={() => addToCart(item)}
                  className="px-2 py-1 text-black rounded"
                >
                  +
                </button>

              </div>

            </div>

          </div>
        );
      })}

    </section>
    </>
  );
};

export default Features;