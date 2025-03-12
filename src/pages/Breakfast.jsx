import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";
import "../App.css";
import { ShopContext } from "../context/ShopContext.jsx";

const Breakfast = () => {
  const [mounted, setMounted] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [bgImage, setBgImage] = useState("bg-image-22");
  const navigate = useNavigate();
  const { products } = useContext(ShopContext);

  const navLinks = [
    { text: "Breakfast", path: "/breakfast", bg: "bg-image-22" },
    { text: "Lunch & Dinner", path: "/lunch", bg: "bg-image-33" },
    { text: "Snacks & Snaps", path: "/snacks", bg: "bg-image-44" },
    { text: "Desserts", path: "/desserts", bg: "bg-image-55" },
    { text: "Drinks", path: "/drinks", bg: "bg-image-66" },
    { text: "Menu", path: "/menu", bg: "bg-image-2" },
  ];

  useEffect(() => {
    // Trigger mount animation
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleNavClick = (path, bg) => {
    setFadeOut(true);
    setTimeout(() => {
      setBgImage(bg);
      setFadeOut(false);
      navigate(path);
    }, 500);
  };

  const breakfastItems = Array.isArray(products?.breakfast)
    ? products.breakfast
    : [];

  const renderProductCard = (product, index) => (
    <div
      key={index}
      className={`border-[#423f32] border-2 w-[280px] rounded-lg p-5 bg-[#423f32] shadow-lg hover:shadow-xl transition-transform transform hover:scale-100 duration-500 ${
        mounted
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-8 scale-95"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {product.image && (
        <img
          src={product.image}
          className="rounded-lg w-[240px] h-[240px] mb-3"
          alt={product.name}
        />
      )}
      <h3 className="text-2xl text-[#9ca081] font-semibold mb-2">
        {product.name}
      </h3>
      <p className="text-sm text-[#cdcfc0] mb-4">{product.description}</p>
      <h4 className="text-lg text-[#9ca081] font-medium mb-2">
        Health Benefits:
      </h4>
      <ul className="list-disc pl-5 space-y-1 text-[#cdcfc0] text-sm">
        {Object.entries(product.healthBenefits || {}).map(
          ([key, benefit], i) => (
            <li key={i}>
              <strong>{key}:</strong> {benefit}
            </li>
          )
        )}
      </ul>
    </div>
  );

  return (
    <div
      className={`flex w-full items-center justify-center min-h-screen p-4 ${bgImage}`}
    >
      <div
        className={`content-container transition-opacity duration-500 ${
          fadeOut ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 pt-16 w-full max-w-6xl">
          {/* Detail Cards Section */}
          <div className="flex flex-col items-center md:items-start flex-1">
            <div className="w-[900px] h-[470px] overflow-y-auto no-scrollbar">
              <div className="mb-12 scroll-mt-20">
                {breakfastItems.length === 0 ? (
                  <p className="text-white">No breakfast items available.</p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {breakfastItems.map(renderProductCard)}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="bg-white OnopenFont border-[#423f32] p-6 md:p-6 rounded-md shadow-xl flex flex-col gap-4 md:gap-5 w-full md:w-72 flex-1 items-center">
            {navLinks.map(({ text, path, bg }) => (
              <button
                key={text}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(path, bg);
                }}
                className="w-full py-2 md:py-2 border font-medium border-gray-400 rounded-sm text-gray-700 hover:bg-[#cdcfc0] transition duration-200 ease-in text-center"
              >
                {text}
              </button>
            ))}

            {/* Social Media Icons */}
            <div className="flex justify-center gap-4 md:gap-4 pt-3 md:pt-4">
              <Facebook className="w-5 md:w-6 h-5 md:h-6 text-gray-700 cursor-pointer hover:text-black transition" />
              <Instagram className="w-5 md:w-6 h-5 md:h-6 text-gray-700 cursor-pointer hover:text-black transition" />
              <Twitter className="w-5 md:w-6 h-5 md:h-6 text-gray-700 cursor-pointer hover:text-black transition" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breakfast;
