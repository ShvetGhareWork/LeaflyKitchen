import React from "react";
import TextHeader from "./TextHeader.jsx";

const Card = ({ title, copy, button, image }) => {
  return (
    <div className="relative flex items-end w-[215px] h-[350px] overflow-hidden rounded-lg shadow-lg group">
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 p-4 w-full text-center transition-transform duration-500 transform translate-y-20 group-hover:translate-y-0">
        <h2 className="text-lg font-bold text-white">{title}</h2>
        {copy && <p className="mt-2 text-sm text-gray-300">{copy}</p>}
        <button className="mt-4 px-4 py-2 bg-white text-black font-semibold rounded shadow-md hover:bg-gray-200 transition">
          {button}
        </button>
      </div>
    </div>
  );
};

// Structured Seasonal Menu Data
const seasonalMenu = [
  {
    season: "🌸 Spring Specials",
    items: [
      {
        title: "Lemon Asparagus Risotto",
        copy: "Creamy arborio rice with fresh asparagus & lemon zest",
        button: "View Dish",
        image: "/LemonRissito.png",
      },
      {
        title: "Strawberry Basil Salad",
        copy: "Mixed greens with fresh strawberries & balsamic glaze",
        button: "View Dish",
        image: "/Strawberry.png",
      },
      {
        title: "Mango Coconut Chia Pudding",
        copy: "A tropical twist on a classic superfood dessert",
        button: "Order Now",
        image: "/mango.png",
      },
    ],
  },
  {
    season: "☀️ Summer Delights",
    items: [
      {
        title: "Watermelon Gazpacho",
        copy: "A chilled, refreshing soup with a hint of mint",
        button: "Try Now",
        image: "/watermelon.png",
      },
      {
        title: "Grilled Corn & Avocado Tacos",
        copy: "Served with lime crema & salsa",
        button: "Order Now",
        image: "/taco.png",
      },
      {
        title: "Berry Bliss Smoothie",
        copy: "A refreshing blend of mixed berries, banana & coconut milk",
        button: "Sip Now",
        image: "/berrysmoothie.png",
      },
    ],
  },
  {
    season: "🍂 Autumn Harvest",
    items: [
      {
        title: "Pumpkin Spice Oatmeal",
        copy: "Rolled oats with spiced pumpkin purée & maple syrup",
        button: "Try Now",
        image: "/pumpkin.png",
      },
      {
        title: "Roasted Butternut Squash Soup",
        copy: "Warm, creamy, and full of fall spices",
        button: "Order Now",
        image: "/butternut.png",
      },
      {
        title: "Apple Cinnamon Muffins",
        copy: "Baked fresh, made with oat flour & coconut sugar",
        button: "View Recipe",
        image: "/muffins.png",
      },
    ],
  },
  {
    season: "❄️ Winter Comforts",
    items: [
      {
        title: "Hearty Lentil Stew",
        copy: "Slow-cooked lentils with root vegetables & herbs",
        button: "Try Now",
        image: "/lentilstew.png",
      },
      {
        title: "Cinnamon Hot Chocolate",
        copy: "Dairy-free cocoa with cinnamon & oat milk",
        button: "Sip Now",
        image: "/hotchocolate.png",
      },
      {
        title: "Spiced Pear Crumble",
        copy: "Warm pears topped with an oat-almond crumble",
        button: "Order Now",
        image: "/pearcrumble.png",
      },
    ],
  },
];

export default function CardGrid() {
  return (
    <>
      {seasonalMenu.map((category, index) => (
        <div key={index}>
          <TextHeader text={category.season} />
          <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.items.map((card, i) => (
              <Card key={i} {...card} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
