import React from "react";
import logo from "../assets/logo.png";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";

// import { Link as scrollLink } from "react-scroll";

const Navbar = ({ bgColor }) => {
  return (
    <nav className={`flex justify-between items-center bg-${bgColor} py-5 `}>
      <div className="flex justify-between w-full items-center px-5 lg:w-[50%] lg:justify-evenly lg:space-x-14 ">
        <Link to={"/"}>
          <img className="w-14 " src={logo} alt="logo" />
        </Link>
        <div className="flex relative ">
          <IoSearch className="absolute top-3 left-2 text-2xl " />
          <input
            className="px-10 py-1 border-2 w-56 h-12 border-black rounded-3xl md:w-72"
            placeholder="Search For Courses"
            type="text"
          />
        </div>
      </div>
      <IoIosMenu className="lg:hidden text-4xl cursor-pointer mr-2" />
      <ul className="hidden  lg:flex lg:items-center lg:w-[50%] lg:space-x-4 lg:justify-end  lg:pr-10 ">
        <li>
          <a href={"#courses"}>Courses</a>
        </li>
        <li>
          <a href={"#about"}>About us </a>
        </li>
        <li>
          <a href={"#contact"}>Contact Us</a>
        </li>
        <li>
          <Link to={"#"}>Sign in</Link>
        </li>
        <li className="bg-black text-white px-2 font-semibold py-1 rounded">
          <Link to={"#"}>Sign up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
