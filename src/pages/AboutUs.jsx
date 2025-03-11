import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";
import "../App.css";
import MenuSectionDetails from "../components/MenuSectionDetails";
import { motion } from "framer-motion";
const Aboutus = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const [bgImage, setBgImage] = useState("bg-image-6");
  const navigate = useNavigate();

  const navLinks = [
    { text: "Menu", path: "/menu", bg: "bg-image-2" },
    { text: "Seasonal Dishes", path: "/seasonal-dishes", bg: "bg-image-3" },
    { text: "Inside the Cafe", path: "/inside-cafe", bg: "bg-image-4" },
    { text: "Delivery FAQ", path: "/delivery", bg: "bg-image-5" },
    { text: "About Us", path: "/aboutus", bg: "bg-image-6" },
    { text: "Our Advocacy", path: "/advocacy", bg: "bg-image-7" },
  ];

  const teamMembers = [
    {
      name: "Captain Unohana",
      role: "Great Captain of Gotei 13",
      img: "/Minazuki.jpg",
    },
    { name: "MiyaMoto Musashi", role: "Master Swordsman", img: "/musashi.jpg" },
    {
      name: "Aizen Souske",
      role: "The Manipulator The True Soul-King",
      img: "/aizen.png",
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
      className={`flex w-full ScrollFont items-center justify-center min-h-screen p-4 ${bgImage}`}
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
              <div className="bg-transparent">
                {/* Hero Section */}
                <section className="relative w-full h-[400px]">
                  <img
                    src="/Home-Design.png"
                    alt="Cafe Interior"
                    className="absolute inset-0 w-full h-full object-cover brightness-75"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                    <motion.h1
                      className="text-4xl font-bold"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      About Leafly Kitchen
                    </motion.h1>
                    <motion.p
                      className="text-lg mt-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    >
                      Where comfort meets flavor – made with love & fresh
                      ingredients.
                    </motion.p>
                  </div>
                </section>

                {/* Our Story Section */}
                <section className="max-w-4xl mx-auto py-16 px-6 text-center">
                  <motion.h2
                    className="text-3xl font-semibold"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    Our Story
                  </motion.h2>
                  <motion.p
                    className="mt-6 text-gray-700 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    CozyBites Cafe started as a small dream – a place where
                    people can enjoy comforting, plant-based meals that feel
                    like home. With a passion for sustainability and fresh
                    ingredients, we crafted a menu that blends taste, health,
                    and love. Whether you’re here for a coffee break or a
                    wholesome meal, we promise to make every bite memorable.
                  </motion.p>
                </section>

                {/* Why Choose Us Section */}
                <section className="bg-transparent py-16 px-6 text-center">
                  <motion.h2
                    className="text-3xl font-semibold"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    Why Choose Us?
                  </motion.h2>
                  <div className="mt-8 grid md:grid-cols-3 gap-8">
                    {[
                      {
                        title: "Fresh Ingredients",
                        desc: "We use only the freshest, locally sourced ingredients for every dish.",
                      },
                      {
                        title: "Plant-Based & Healthy",
                        desc: "Our menu is 100% plant-based, offering delicious & nutritious options.",
                      },
                      {
                        title: "Cozy Atmosphere",
                        desc: "Relax in a warm and welcoming space perfect for work or leisure.",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="bg-gray-200 p-6 rounded-lg shadow-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      >
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <p className="mt-2 text-gray-700">{item.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </section>

                {/* Meet the Team Section */}
                <section className="max-w-4xl mx-auto py-16 px-6 text-center">
                  <motion.h2
                    className="text-3xl font-semibold"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    Meet Our Team
                  </motion.h2>
                  <div className="mt-8 grid md:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                      <motion.div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      >
                        <img
                          src={member.img}
                          alt={member.name}
                          className="w-24 h-24 mx-auto rounded-full"
                        />
                        <h3 className="text-xl font-semibold mt-4">
                          {member.name}
                        </h3>
                        <p className="text-gray-600">{member.role}</p>
                      </motion.div>
                    ))}
                  </div>
                </section>

                {/* Visit Us Section */}
                <section className="bg-transparent py-16 px-6 text-center">
                  <motion.h2
                    className="text-3xl font-semibold"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    Visit Us
                  </motion.h2>
                  <p className="mt-6 text-gray-700">
                    📍 CozyBites Cafe, 123 Green Street, Vegan Town, CA 90210
                  </p>
                  <motion.div
                    className="mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <iframe
                      className="w-full max-w-lg h-64 mx-auto rounded-lg shadow-lg"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509856!2d144.96305771531685!3d-37.81627997975179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xb3b9d1c3e59b88e6!2sCozyBites+Cafe!5e0!3m2!1sen!2sus!4v1639116857063!5m2!1sen!2sus"
                      allowFullScreen=""
                      loading="lazy"
                    ></iframe>
                  </motion.div>
                </section>
              </div>
            </div>{" "}
          </div>{" "}
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

export default Aboutus;
