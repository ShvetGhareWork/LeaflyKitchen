import React, { useState } from "react";
import path from "path";
import { useNavigate } from "react-router-dom";
import CardGrid from "./CardGrid.jsx";

const SeasonalMenu = () => {
  const navigate = useNavigate();
  const handleNavClick = () => {
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <div className="w-[700px] h-[470px] overflow-y-auto no-scrollbar">
        <div className="flex items-center justify-center">
          <h1 className="text-9xl MenuFontnew pb-5">
            <u>Seasonal Dishes</u>
          </h1>
        </div>

        <CardGrid />

        <div className="flex items-center justify-center">
          <button
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(path);
            }}
            className="w-1/4 rounded-md py-2 md:py-2 border font-medium border-gray-400 text-gray-700 bg-[#cdcfc0] transition duration-200 ease-in text-center"
          >
            Check Out Now!{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeasonalMenu;
