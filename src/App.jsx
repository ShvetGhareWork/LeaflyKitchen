import React from "react";
import Onopen from "./pages/Onopen.jsx";
import Menu from "./pages/Menu.jsx";
import SeasonalDishes from "./pages/SeasonalDishes.jsx";
import InsideCafe from "./pages/InsideCafe.jsx";
import Delivery from "./pages/Delivery.jsx";
import Aboutus from "./pages/Aboutus.jsx";
import Advocacy from "./pages/Advocacy.jsx";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Onopen />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/seasonal-dishes" element={<SeasonalDishes />} />
        <Route path="/inside-cafe" element={<InsideCafe />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/advocacy" element={<Advocacy />} />
      </Routes>
    </>
  );
};

export default App;
