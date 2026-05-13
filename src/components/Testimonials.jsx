import dailyoffer from "../assets/dailyoffer.jpg";
import bchicken from "../assets/bchicken.jpg";
import toprated from "../assets/toprated.jpg";
import budgetmeals from "../assets/budgetmeals.jpg";

const Testimonials = () => {
  return (
    <section className="py-10 px-4 bg-gray-100">

      <div className="grid md:grid-cols-2 rounded-3xl overflow-hidden shadow-xl">

        {/* LEFT SIDE */}
        <div className="bg-orange-400 flex flex-col justify-center p-8 md:p-12 text-white">
            
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Up to
            <br />
            35% OFF
          </h2>

          <p className="text-2xl mt-4 font-semibold">
            on first order
          </p>

          <p className="text-lg mt-2">
            *Only on App
          </p>

          <button className="mt-8 bg-white text-purple-700 font-bold text-xl px-6 py-4 rounded-2xl w-fit hover:scale-110 transition">
            Order Now
          </button>

        </div>

        {/* RIGHT SIDE */}
        <div className="relative bg-gradient-to-r from-pink-700 to-purple-900 p-6 md:p-10 px-6">

          {/* BLUR EFFECT */}
          <div className="absolute inset-0 backdrop-blur-sm bg-black/10"></div>

          {/* CONTENT */}
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6">

            {/* CARD 1 */}
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-3 text-center text-white border  transform transition duration-300 hover:scale-110  border-white/20">

              <img
                src={bchicken}
                alt=""
                className="h-40 w-full object-cover rounded-xl"
              />

              <h3 className="mt-3 font-bold text-lg">
                Trending Now
              </h3>

            </div>

            {/* CARD 2 */}
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-3 text-center text-white border  transform transition duration-300 hover:scale-110 border-white/20">

              <img
                src={budgetmeals}
                alt=""
                className="h-40 w-full object-cover rounded-xl"
              />

              <h3 className="mt-3 font-bold text-lg">
                Budget Meals
              </h3>

            </div>

            {/* CARD 3 */}
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-3 text-center text-white border  transform transition duration-300 hover:scale-110 border-white/20">

              <img
                src={toprated}
                alt=""
                className="h-40 w-full object-cover rounded-xl"
              />

              <h3 className="mt-3 font-bold text-lg">
                Top Rated
              </h3>

            </div>

            {/* CARD 4 */}
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-3 text-center text-white border  transform transition duration-300 hover:scale-110 border-white/20">

              <img
                src={dailyoffer}
                alt=""
                className="h-40 w-full object-cover rounded-xl"
              />

              <h3 className="mt-3 font-bold text-lg">
                Daily Offers
              </h3>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Testimonials;