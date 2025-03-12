import React from "react";
import { Route, Routes } from "react-router-dom";
import Onopen from "./pages/Onopen.jsx";
import Menu from "./pages/Menu.jsx";
import SeasonalDishes from "./pages/SeasonalDishes.jsx";
import InsideCafe from "./pages/InsideCafe.jsx";
import Delivery from "./pages/Delivery.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Advocacy from "./pages/Advocacy.jsx";
import Breakfast from "./pages/Breakfast.jsx";
import Lunch from "./pages/Lunch.jsx";
import Snacks from "./pages/Snacks.jsx";
import Drinks from "./pages/Drinks.jsx";
import Desserts from "./pages/Desserts.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Onopen />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/seasonal-dishes" element={<SeasonalDishes />} />
        <Route path="/inside-cafe" element={<InsideCafe />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/advocacy" element={<Advocacy />} />
        <Route path="/breakfast" element={<Breakfast />} />
        <Route path="/lunch" element={<Lunch />} />
        <Route path="/snacks" element={<Snacks />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/desserts" element={<Desserts />} />
      </Routes>
    </>
  );
};

export default App;
