import React from "react";
import { MdOutlineLogout } from "react-icons/md";
import { motion } from "motion/react";

const Header = () => {
  return (
    <nav className="flex items-center justify-between shadow-2xl border-b border-b-gray-500 px-5 py-2">
      <div>
        <h1 className="text-xl font-semibold">Hello</h1>
        <h2 className="text-2xl font-bold">madlaj 👋</h2>
      </div>
      <motion.button className="bg-red-500 text-white px-3 py-1 rounded-lg flex items-center space-x-1 cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.1 }}
      >
        <span>Logout</span>
        <MdOutlineLogout />
      </motion.button>
    </nav>
  );
};

export default Header;
