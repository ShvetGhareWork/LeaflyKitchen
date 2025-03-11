import React from "react";

const TextHeader = ({ text }) => {
  const menuVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <motion.span
          className="text-3xl font-bold MenuFont"
          variants={menuVariants}
          initial="hidden"
          animate="visible"
        >
          {text}
        </motion.span>
      </div>
    </div>
  );
};

export default TextHeader;
