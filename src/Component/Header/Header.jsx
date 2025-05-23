import React from "react";
import header_img from "../../assets/header_img.png";

const Header = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden ">
      {/* Background Image */}
      <img
        src={header_img}
        alt="HeaderImage"
        className="absolute w-full h-[96] "
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-700 drop-shadow-md mb-4">
          Delicious Food, Delivered Fast with TOMATO
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white max-w-2xl mx-auto mb-6 drop-shadow">
          Craving something tasty? TOMATO brings your favorite meals right to
          your doorstep — hot, fresh, and full of flavor. From classic comfort
          foods to spicy delights, we deliver happiness with every order.
        </p>
        <button className="bg-red-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition-all duration-300">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
