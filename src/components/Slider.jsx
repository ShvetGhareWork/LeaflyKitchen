import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
const images = ["/Cafe1.png", "/Cafe2.png", "/Cafe3.png"];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-3xl mx-auto">
      {/* Image Slider */}
      <div className="relative w-[700px] h-[450px] overflow-y-scroll no-scrollbar rounded-lg shadow-lg">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full flex-shrink-0"
            />
          ))}
        </div>

        {/* About Section */}
        <div className="mt-10 text-center px-6">
          <h2 className="text-3xl font-semibold">About Our Cafe</h2>
          <p className="text-gray-600 mt-4">
            Welcome to **CozyBites Cafe**, where comfort meets flavor! We serve
            delicious plant-based meals, crafted with love and fresh
            ingredients. Whether you're here for a morning coffee or a hearty
            dinner, we have something special for everyone.
          </p>
        </div>

        {/* Testimonials Section with Motion */}
        <motion.div
          className="mt-10 text-center px-6"
          initial={{ opacity: 0, y: 50 }} // Start hidden and lower
          whileInView={{ opacity: 1, y: 0 }} // Fade up effect when in view
          transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
          viewport={{ once: true }} // Animation only runs once
        >
          <h2 className="text-3xl font-semibold">What Our Customers Say</h2>
          <div className="mt-6 space-y-6">
            {/* Testimonial 1 */}
            <motion.div
              className="bg-gray-100 p-4 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-700 italic">
                "The best cafe in town! The ambiance is so warm, and the food is
                absolutely delicious. Highly recommend their avocado toast!"
              </p>
              <div className="flex justify-center mt-2 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="mt-2 text-gray-800 font-semibold">- Alex Johnson</p>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              className="bg-gray-100 p-4 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-700 italic">
                "A hidden gem! The plant-based options are fantastic, and I love
                their cappuccino. Definitely my go-to spot!"
              </p>
              <div className="flex justify-center mt-2 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="mt-2 text-gray-800 font-semibold">- Maria Lopez</p>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              className="bg-gray-100 p-4 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-700 italic">
                "Great food, great vibes, and amazing people! Love spending my
                weekends here with friends."
              </p>
              <div className="flex justify-center mt-2 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="mt-2 text-gray-800 font-semibold">- Jason Smith</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
