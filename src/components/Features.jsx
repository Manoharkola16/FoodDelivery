import { useState } from "react";
import { useCart } from "./CartContext";

const Features = () => {


  const foods = [
    { name: "Fish Curry", price: 399, img: "/fish.webp" },
    { name: "Mutton Curry", price: 599, img: "/mutton.avif" },
    { name: "Chicken Curry", price: 299, img: "/chicken.webp" },
     { name: "Prawns Fry", price: 499, img: "/src/assets/prawns.webp" },
    { name: " Chicken Noodles", price: 349, img: "/src/assets/noodles.webp" },
    { name: "Chicken LollyPop", price: 299, img: "/src/assets/lollypop.webp" },
    { name: "Grilled Chicken", price: 549, img: "/src/assets/grill chicken.png" },
    { name: "White  Pasta", price: 299, img: "/src/assets/pasta.png" },
    { name: "Paneer Tikka", price: 249, img: "/src/assets/paneer.png" },
   { name: "Chease-Pizza", price: 199, img: "/src/assets/pizza.png" },
    { name: "Veg-Manchurian", price: 149, img: "/src/assets/manchuria.webp" },
    { name: "Chicken Burger", price: 249, img: "/src/assets/burger.webp" },
    { name: "OceanBlue-Moktail", price: 199, img: "/src/assets/ocean blue.webp" },
    { name: "Orange Flavour-Moktail", price: 299, img: "/src/assets/orange flavour.png" },
    { name: "Mixed Fruit-Moktail", price: 249, img: "/src/assets/mixed fruit.webp" },
    { name: "Green Apple-Moktail", price: 199, img: "/src/assets/green apple.png" },
    { name: "Red Berry-Moktail", price: 249, img: "/src/assets/red berry.png" },
    { name: "Topical-Moktail", price: 199, img: "/src/assets/topicol.png" },

  ];


  const [counts, setCounts] = useState(Array(foods.length).fill(0));

  // ✅ Cart functions
  const { addToCart, removeFromCart } = useCart();

  // ✅ Increase count
  const increase = (index, item) => {
    const updated = [...counts];
    updated[index] += 1;
    setCounts(updated);

    addToCart(item); // also update cart
  };

  // ✅ Decrease count
  const decrease = (index, item) => {
    const updated = [...counts];

    if (updated[index] > 0) {
      updated[index] -= 1;
      setCounts(updated);

      removeFromCart(item); // also update cart
    }
  };

  return (
    <section className="py-16 px-6 grid md:grid-cols-3 gap-8 text-center">

      {foods.map((item, index) => (
        <div key={index} className="p-6 shadow-md rounded-xl">

        
          <img
            src={item.img}
            alt={item.name}
            className="w-60 h-40 object-cover rounded-lg mb-4 mx-auto transform transition duration-300 hover:scale-110"
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
                onClick={() => decrease(index, item)}
                className="px-2 py-1 text-black rounded"
              >
                -
              </button>

              <span className="font-semibold">
                {counts[index]}
              </span>

              <button
                onClick={() => increase(index, item)}
                className="px-2 py-1  text-black rounded"
              >
                +
              </button>

            </div>
          </div>

        </div>
      ))}

    </section>
  );
};

export default Features;