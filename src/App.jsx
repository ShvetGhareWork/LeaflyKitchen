import React from "react";
import Onopen from "./pages/Onopen";
import Menu from "./pages/Menu";
import SeasonalDishes from "./pages/SeasonalDishes";
import InsideCafe from "./pages/InsideCafe";
import Delivery from "./pages/Delivery";
import Aboutus from "./pages/Aboutus";
import Advocacy from "./pages/Advocacy";
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
