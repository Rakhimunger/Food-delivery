import React from "react";
import header_img from "../../assets/header_img.png";

const Header = () => {
  return (
    <div className="relative w-full h-[80vh]">
      {/* Fullscreen Image */}
      <img
        src={header_img}
        alt="Delicious Food"
        className="w-full h-full object-cover rounded-b-3xl"
      />

      {/* Text content centered on image */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] mb-4">
          Delicious Food, Delivered Fast with TOMATO
        </h1>
        <p className="text-white text-lg md:text-xl max-w-2xl mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
          Craving something tasty? TOMATO brings your favorite meals right to
          your doorstep — hot, fresh, and full of flavor. From classic comfort
          foods to spicy delights, we deliver happiness with every order.
        </p>
        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full text-lg transition-all duration-300 drop-shadow-md">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
