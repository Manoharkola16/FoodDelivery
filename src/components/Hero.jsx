import { useState } from "react";
import {
  MapPin,
  Search,
  ArrowRight,
  UtensilsCrossed,
  Bike,
  Star,
} from "lucide-react";

import food from '../assets/food.avif'
import food2 from '../assets/food2.webp'
import fastdelivery from '../assets/fastdelivery.avif'
import top5 from '../assets/top5.jpg'
import fastfood from '../assets/fastfood.png'
import overflow from '../assets/overflow.png'

const HeroBanner = () => {
  const [location, setLocation] = useState("");
  const [foodSearch, setFoodSearch] = useState("");
  const [results, setResults] = useState([]);

  // GET CURRENT LOCATION
  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        console.log(latitude, longitude);

        // TEMPORARY LOCATION
        setLocation("Your Current Location");

        alert("Location Confirmed Successfully");
      },
      () => {
        alert("Unable to fetch location");
      }
    );
  };

  return (
    <section className="bg-cyan-200 w-full min-h-screen pt-32 px-6 overflow-hidden relative bg-blend-hard-light"
    
    // style={{
    //   backgroundImage: `url(${food})`,
    // }}
    >

        {/* LEFT DECORATION */}
      <img
        src={fastfood}
        alt=""
        className="absolute  right-335 rotate-45 top-30 w-70   opacity-90"
      />

      {/* RIGHT DECORATION */}
      <img
        src={overflow}
        alt=""
        className="absolute  left-310  top-30 w-70   opacity-200"
      />

     

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADING */}
        <div className="text-center mb-10">

          <h1 className="text-3xl md:text-6xl font-bold italic text-black">
            Order Food &
            <br />
            Discover Best Restaurants
          </h1>

          <p className="text-gray-800 text-lg mt-5 italic">
            Fresh food delivered to your doorstep in minutes
          </p>
        </div>

        {/* SEARCH BAR */}
        <div className="flex flex-col lg:flex-row gap-4 justify-center items-center max-w-4xl mx-auto">

          {/* LOCATION */}
          <div className="bg-white flex items-center gap-3 px-5 py-5 rounded-2xl w-full lg:w-[350px] shadow-2xl">

            <MapPin
              className="text-orange-500 cursor-pointer"
              size={20}
              onClick={getCurrentLocation}
            />

            <input
              type="text"
              placeholder="Enter your delivery location"
              className="outline-none w-full text-lg"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />

            <button
              onClick={getCurrentLocation}
              className="text-orange-500 font-semibold text-sm"
            >
              📍
            </button>
          </div>
        </div>

        {/* SEARCH RESULTS */}
        {results.length > 0 && (
          <div className="bg-white mt-8 max-w-2xl mx-auto rounded-3xl p-6 shadow-2xl">

            <h2 className="text-2xl font-bold mb-4">
              Search Results
            </h2>

            <div className="grid grid-cols-2 gap-4">

              {results.map((food, index) => (
                <div
                  key={index}
                  className="bg-orange-100 p-4 rounded-2xl text-center font-semibold"
                >
                  {food}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CARDS SECTION */}
        <div className="grid md:grid-cols-3 gap-8 mt-20 pb-20">

          {/* FOOD DELIVERY */}
          <div className="bg-white rounded-[40px] p-8 relative overflow-hidden shadow-2xl hover:scale-105 transition duration-300">

            <h2 className="text-2xl font-bold text-gray-800">
              FOOD DELIVERY
            </h2>

            <p className="text-gray-500 text-xl mt-2">
              FROM RESTAURANTS
            </p>

            <div className="bg-orange-100 inline-50 text-orange-500 px-4 py-2 rounded-2xl mt-4 font-bold">
              UPTO 60% OFF
            </div>

            <img
              src={food2}
              alt=""
              className="w-25 h-25 object-cover rounded-full absolute bottom-5 right-10"
            />

            <button className="bg-orange-500 hover:bg-orange-600 text-white p-5 rounded-full mt-16">
              <ArrowRight size={30} />
            </button>
          </div>

          {/* FAST DELIVERY */}
          <div className="bg-white rounded-[40px] p-8 relative overflow-hidden shadow-2xl hover:scale-105 transition duration-300">

            <h2 className="text-2xl font-bold text-gray-800">
              FAST DELIVERY
            </h2>

            <p className="text-gray-500 text-xl mt-2">
              LIVE TRACKING
            </p>

            <div className="bg-orange-100 inline-50 text-orange-500 px-4 py-2 rounded-full mt-5 font-bold">
              30 MIN DELIVERY
            </div>

            <img
              src={fastdelivery}
              alt=""
              className="w-25 h-25 object-cover rounded-full absolute bottom-5 right-10"
            />

            <button className="bg-orange-500 hover:bg-orange-600 text-white p-5 rounded-full mt-16">
              <ArrowRight size={30} />
            </button>
          </div>

          {/* TOP RATED */}
          <div className="bg-white rounded-[40px] p-8 relative overflow-hidden shadow-2xl hover:scale-105 transition duration-300">

            <h2 className="text-2xl font-bold  text-gray-800">
              TOP RATED
            </h2>

            <p className="text-gray-500 text-xl mt-2">
              BEST RESTAURANTS
            </p>

            <div className="flex items-center gap-2 bg-orange-100 inline-50 text-orange-500 px-4 py-2 rounded-full mt-5 font-bold">
              <Star className="fill-orange-500" size={18} />
              4.9 Ratings
            </div>

            <img
              src={top5}
              alt=""
              className="w-25 h-25 object-cover rounded-full absolute bottom-5 right-10"
            />

            <button className="bg-orange-500 hover:bg-orange-600 text-white p-5 rounded-full mt-16">
              <ArrowRight size={30} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
