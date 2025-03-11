const Card = ({ title, copy, button, image }) => {
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

export default Card;
