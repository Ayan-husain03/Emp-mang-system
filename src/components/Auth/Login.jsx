import React from "react";
import { MdEmail, MdLock } from "react-icons/md";
import { motion } from "motion/react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    console.log("Email:", email);
    console.log("Password", password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen p-5 ">
      <form
        onSubmit={handleSubmit}
        className="mt-12 max-w-2xl mx-auto p-5 rounded-lg shadow-2xl"
      >
        <h1 className="text-4xl md:text-6xl mb-5 font-semibold text-center login">
          Login
        </h1>
        {/* input field for email */}
        <label htmlFor="email" className="flex items-center gap-2 md:text-2xl">
          <span>
            <MdEmail />
          </span>
          <span>Email</span>
        </label>
        <input
          type="email"
          placeholder="Enter your email"
          className="px-2 w-full border py-3 my-5 rounded-2xl md:text-xl border-blue-500 focus:ring-2 focus:ring-blue-500 outline-0"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* input field for password */}
        <label
          htmlFor="password"
          className="flex items-center gap-2  md:text-2xl"
        >
          <span>
            <MdLock />
          </span>
          <span>Password</span>
        </label>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          className="px-2 w-full border py-3 my-5 rounded-2xl md:text-xl border-blue-500 focus:ring-2 focus:ring-blue-500 outline-0"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="flex items-center gap-2 mb-5 md:text-xl">
          <input
            type="checkbox"
            id="check"
            onChange={() => setShowPassword(!showPassword)}
          />
          <label htmlFor="check" className="text-gray-600 cursor-pointer">
            Show password
          </label>
        </div>
        {/* submit button */}
        <motion.button
          type="submit"
          className="bg-blue-500 text-white w-full  md:text-2xl flex justify-center items-center gap-3 p-3 rounded-xl cursor-pointer"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.5 }}
        >
          <span>Login</span>
          <span>
            <FaArrowRightLong />
          </span>
        </motion.button>
      </form>
    </div>
  );
};

export default Login;
