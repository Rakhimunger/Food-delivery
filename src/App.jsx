import React from "react";
import Navbar from "./Component/Navbar";
import Header from "./Component/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import Placeorder from "./Pages/Placeorder/Placeorder";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/placeorder" element={<Placeorder />} />
      </Routes>
    </div>
  );
};

export default App;
