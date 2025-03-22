import React from "react";
import { MdEmail, MdLock } from "react-icons/md";
import { motion } from "motion/react";
import { FaArrowRightLong } from "react-icons/fa6";

const Login = () => {
    
  return (
    <div className="h-screen p-5 ">
      <form className="mt-12 max-w-2xl mx-auto p-5 rounded-lg shadow-2xl">
        <h1 className="text-4xl md:text-6xl mb-5 font-semibold text-center">Login</h1>
        <label
          htmlFor="email"
          className="flex items-center gap-2 text-xl md:text-2xl"
        >
          <span>
            <MdEmail />
          </span>
          <span>Email</span>
        </label>
        <input
          type="text"
          placeholder="Enter your email"
          className="px-2 w-full border py-3 my-5 rounded-2xl text-xl border-blue-500 focus:ring-2 focus:ring-blue-500 outline-0"
        />
        <label
          htmlFor="password"
          className="flex items-center gap-2 text-xl md:text-2xl"
        >
          <span>
            <MdLock />
          </span>
          <span>Password</span>
        </label>
        <input
          type="password"
          placeholder="Enter your password"
          className="px-2 w-full border py-3 my-5 rounded-2xl text-xl border-blue-500 focus:ring-2 focus:ring-blue-500 outline-0"
        />
        <div className="flex items-center gap-2 mb-5 text-xl"> 
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="text-gray-600">Show password</label>
        </div>

        <motion.button
          type="submit"
          className="bg-blue-500 text-white w-full text-xl md:text-2xl flex justify-center items-center gap-3 p-3 rounded-xl"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.5 }}
        >
         <span>Login</span>
         <span><FaArrowRightLong /></span>
        </motion.button>
      </form>
    </div>
  );
};

export default Login;
