import DetailCards from "./DetailCards.jsx"; // Ensure you import your card component
import TextHeader from "./TextHeader.jsx";
import Onscroll from "../Reactbits/OnScroll.jsx";

const menuVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const velocity = 100;

const paragraphVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

const MenuSectionDetails = () => {
  return (
    <div className="flex flex-col items-center md:items-start flex-1">
      <div className="w-[700px] h-[470px] overflow-y-auto no-scrollbar">
        {/* Animated Title */}
        <div className="flex items-center pt-5 justify-center">
          <TextHeader text=" 🌱 Our Menu – 100% Plant-Based, Made with Love" />
        </div>

        {/* Animated Paragraphs */}
        <div className="flex items-center pt-5 justify-center">
          <motion.div
            className="text-3xl font-bold MenuFont1"
            initial="hidden"
            animate="visible"
            variants={menuVariants}
          >
            <div className="flex items-center justify-center">
              <TextHeader text="Categories of the Menu" />
            </div>
            {[
              "• Appetizers / Starters – Light dishes served before the main course, such as soups, salads, or finger foods.",
              "• Main Course / Entrées – The heart of the menu, offering substantial dishes like pasta, curries, grilled meats, or plant-based meals.",
              "• Side Dishes – Complementary items such as fries, bread, or vegetables that enhance the main course.",
              "• Beverages – Includes hot and cold drinks such as coffee, tea, juices, smoothies, mocktails, and soft drinks.",
              "• Desserts – Sweet treats like cakes, ice creams, and pastries that complete the meal.",
              "• Specials / Chef’s Recommendations – Signature dishes or seasonal offerings that highlight the restaurant’s best creations.",
            ].map((text, index) => (
              <motion.p
                key={index}
                className="text-lg mt-5 mb-5 opacity-0"
                custom={index}
                initial="hidden"
                animate="visible"
                variants={paragraphVariants}
              >
                {text}
              </motion.p>
            ))}
          </motion.div>
        </div>

        {/* Detail Cards */}
        <DetailCards />
        <Onscroll
          texts={["Choose now", "Scroll Up"]}
          velocity={velocity}
          className="custom-scroll-text"
        />
      </div>
    </div>
  );
};

export default MenuSectionDetails;
