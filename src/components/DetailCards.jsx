import React from "react";

const cards = [
  {
    title: "🥞 Breakfast",
    copy: "Start your day with wholesome, energizing plant-based goodness!",
    button: "View Menu",
    image: "/Breakfast.png",
  },
  {
    title: "🍟 Snacks & Sides",
    copy: "Perfect for a light bite or pairing with your main dish!",
    button: "View Menu",
    image: "/Snacks.png",
  },
  {
    title: "🍛 Lunch & Dinner",
    copy: "Hearty meals packed with nutrients and bold flavors!",
    button: "View Menu",
    image: "/Lunch.png",
  },
  {
    title: "🍰 Desserts",
    copy: "It's the desert you've always dreamed of",
    button: "View Menu",
    image: "/Dessert.png",
  },
  {
    title: "🍹 Drinks",
    copy: "Refresh and recharge with our organic, handcrafted beverages!",
    button: "View Menu",
    image: "/Drinks.png",
  },
];

const DetailCard = ({ title, copy, button, image }) => {
  return (
    <div className="relative flex items-end p-4 w-full h-72 text-white bg-gray-900 shadow-lg overflow-hidden rounded-lg group">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent transition-opacity duration-700 group-hover:opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full text-center transition-transform duration-700 transform translate-y-24 group-hover:translate-y-0">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="mt-2 text-sm italic opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          {copy}
        </p>
        <button className="mt-4 px-4 py-2 text-xs font-bold uppercase bg-black text-white rounded shadow-md hover:bg-gray-800 transition-all duration-300">
          {button}
        </button>
      </div>
    </div>
  );
};

const DetailCards = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto max-w-5xl">
      {/* First Row (3 Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl">
        {cards.slice(0, 3).map((card, index) => (
          <DetailCard key={index} {...card} />
        ))}
      </div>

      {/* Second Row (2 Cards) - Centered */}
      <div className="flex justify-center w-full mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 max-w-lg gap-4">
          {cards.slice(3, 5).map((card, index) => (
            <DetailCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailCards;
