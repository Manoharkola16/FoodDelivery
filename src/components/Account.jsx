import {
  User,
  Mail,
  Phone,
  MapPin,
  LogOut,
  ShoppingBag,
  Info,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

const Account = () => {

const navigate= useNavigate();

  return (

    <div className="min-h-screen bg-gray-100 p-6">

      {/* PROFILE CARD */}
      <div className="bg-white rounded-3xl shadow-md p-6">

        <div className="flex flex-col items-center">

          {/* PROFILE IMAGE */}
          <img
            src="https://i.pravatar.cc/150"
            alt=""
            className="w-28 h-28 rounded-full object-cover border-4 border-orange-400"
          />

          <h1 className="text-2xl font-bold mt-4">
            Manohar
          </h1>

          <p className="text-gray-500">
            Food Lover 🍔
          </p>

        </div>

        {/* USER INFO */}
        <div className="mt-8 space-y-4">

          <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl">

            <Mail className="text-orange-500" />

            <p>
              manohar@gmail.com
            </p>

          </div>

          <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl">

            <Phone className="text-orange-500" />

            <p>
              +91 9381764040
            </p>

          </div>

          <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl">

            <MapPin className="text-orange-500" />

            <p>
              Hyderabad, India
            </p>

          </div>

        </div>
      </div>

      {/* ABOUT US */}
      <div className="bg-white rounded-3xl shadow-md p-6 mt-6">

        <div className="flex items-center gap-3 mb-4">

          <Info className="text-orange-500" />

          <h2 className="text-xl font-bold">
            About Us
          </h2>

        </div>

        <p className="text-gray-600 leading-7">

          Welcome to <span className="font-bold text-orange-500">
            TelanganaRuchulu
          </span> 🍽️

          <br /><br />

          We deliver delicious food directly to your doorstep with fast delivery and amazing offers.

          Our mission is to make food ordering simple, fast, and enjoyable for everyone.

        </p>
      </div>

      {/* ACTION BUTTONS */}
      <div className="mt-6 space-y-4">

        <button
          className="
          w-full bg-orange-500 text-white py-4 rounded-2xl flex items-center justify-center gap-3 hover:bg-orange-600 transition "
        >

          <ShoppingBag />

          Order History

        </button>

        <button
          className="  w-full  bg-red-500  text-white  py-4  rounded-2xl  flex  items-center  justify-center  gap-3  hover:bg-red-600  transition  ">

          <LogOut />

          Logout

        </button>

      </div>

      <button
         onClick={() => navigate("/home")}    className="      w-full  bg-black  text-white   py-4 rounded-2xl  mt-4 hover:bg-gray-800transition" >
     ← Back To Home

          </button>

      {/* APP VERSION */}
      <p className="text-center text-gray-400 mt-8">

        TelanganaRuchulu v1.0.0

      </p>

    </div>
  );
};

export default Account;