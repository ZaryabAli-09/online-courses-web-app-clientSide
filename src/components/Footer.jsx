import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <footer>
      <div className="flex items-center justify-center space-x-2 p-6 md:space-x-6 ">
        <img className="w-6 md:w-9" src={logo} alt="logo" />

        <Link to={""}>Find Passion</Link>

        <Link to={""}>Categories</Link>

        <Link to={""}>Customer</Link>

        <Link to={""}>Skills</Link>
      </div>
      <div className="bg-black text-white text-center p-3 text-sm md:text-base">
        Copyright@
      </div>
    </footer>
  );
};

export default Footer;
