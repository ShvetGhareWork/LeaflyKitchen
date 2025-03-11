import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";
import "../App.css";
import { motion } from "framer-motion";
import MenuSectionDetails from "../components/MenuSectionDetails";
const Advocacy = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const [bgImage, setBgImage] = useState("bg-image-7");
  const navigate = useNavigate();

  const navLinks = [
    { text: "Menu", path: "/menu", bg: "bg-image-2" },
    { text: "Seasonal Dishes", path: "/seasonal-dishes", bg: "bg-image-3" },
    { text: "Inside the Cafe", path: "/inside-cafe", bg: "bg-image-4" },
    { text: "Delivery FAQ", path: "/delivery", bg: "bg-image-5" },
    { text: "About Us", path: "/aboutus", bg: "bg-image-6" },
    { text: "Our Advocacy", path: "/advocacy", bg: "bg-image-7" },
  ];

  const advocacyPoints = [
    {
      title: "🌿 Sustainability Matters",
      desc: "We prioritize locally-sourced, organic ingredients to reduce our carbon footprint. Our café runs on renewable energy, and we aim for zero food waste.",
    },
    {
      title: "🍽️ Feeding the Community",
      desc: "Every month, we donate free plant-based meals to underprivileged communities. We partner with local farms & NGOs to support ethical food practices.",
    },
    {
      title: "🐮 Compassion for Animals",
      desc: "No animals harmed, ever. Our menu is 100% cruelty-free. We collaborate with animal welfare organizations to promote a plant-based lifestyle.",
    },
    {
      title: "💚 Join the Movement!",
      desc: "Attend our sustainability workshops & cooking classes. Be a part of our community clean-ups & food drives.",
    },
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
          <div className="max-w-3xl mx-auto">
            {/* Image Slider */}
            <div className="relative w-[700px] h-[450px] overflow-y-scroll no-scrollbar rounded-lg shadow-lg">
              {/* Advocacy Content Section */}
              <div className="max-w-3xl mx-auto">
                {/* Hero Section */}
                <section className="relative w-full h-[400px]">
                  <img
                    src="/advocacy.png"
                    alt="Sustainability"
                    className="absolute inset-0 w-full h-full object-cover brightness-75"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                    <motion.h1
                      className="text-4xl font-bold"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      🌎 Our Advocacy
                    </motion.h1>
                    <motion.p
                      className="text-lg mt-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    >
                      Food with a Purpose – Supporting a Better World
                    </motion.p>
                  </div>
                </section>

                {/* Advocacy Points */}
                <section className="bg-transparent py-16 px-6 text-center">
                  {advocacyPoints.map((item, index) => (
                    <motion.div
                      key={index}
                      className="bg-gray-200 p-6 rounded-lg shadow-lg mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="text-2xl font-semibold">{item.title}</h3>
                      <p className="mt-2 text-gray-700">{item.desc}</p>
                    </motion.div>
                  ))}
                </section>

                {/* Follow Us Section */}
                <section className="text-center py-8">
                  <motion.h2
                    className="text-3xl font-semibold"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    📢 Follow Us
                  </motion.h2>
                  <p className="mt-4 text-gray-700">
                    Stay updated on our sustainability efforts & community
                    initiatives!
                  </p>
                  <div className="flex justify-center gap-4 mt-4">
                    <Facebook className="w-6 h-6 text-gray-700 cursor-pointer hover:text-black transition" />
                    <Instagram className="w-6 h-6 text-gray-700 cursor-pointer hover:text-black transition" />
                    <Twitter className="w-6 h-6 text-gray-700 cursor-pointer hover:text-black transition" />
                  </div>
                </section>
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

export default Advocacy;
