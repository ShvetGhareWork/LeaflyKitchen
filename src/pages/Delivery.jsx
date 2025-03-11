import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";
import "../App.css";
import FAQs from "../components/FAQs.jsx";

const Delivery = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const [bgImage, setBgImage] = useState("bg-image-5");
  const navigate = useNavigate();

  const navLinks = [
    { text: "Menu", path: "/menu", bg: "bg-image-2" },
    { text: "Seasonal Dishes", path: "/seasonal-dishes", bg: "bg-image-3" },
    { text: "Inside the Cafe", path: "/inside-cafe", bg: "bg-image-4" },
    { text: "Delivery FAQ", path: "/delivery", bg: "bg-image-5" },
    { text: "About Us", path: "/aboutus", bg: "bg-image-6" },
    { text: "Our Advocacy", path: "/advocacy", bg: "bg-image-7" },
  ];

  const handleNavClick = (path, bg) => {
    setFadeOut(true);
    setTimeout(() => {
      setBgImage(bg);
      setFadeOut(false);
      navigate(path);
    }, 500);
  };

  return (
    <div
      className={`flex w-full items-center justify-center min-h-screen p-4 ${bgImage}`}
    >
      <div
        className={`content-container transition-opacity duration-500 ${
          fadeOut ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 pt-16 w-full max-w-5xl">
          {/* Detail Cards Section */}
          <FAQs />
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

export default Delivery;
