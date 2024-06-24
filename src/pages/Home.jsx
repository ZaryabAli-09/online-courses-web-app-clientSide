import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { IoSearch } from "react-icons/io5";
import HeroImg from "../assets/heroImg.png";
import logo from "../assets/logo.png";
import aboutUnderline from "../assets/aboutUnderline.png";
import coursesUnderline from "../assets/coursesUnderline.png";
import contactUnderline from "../assets/contactUnderline.png";
import popularUnderline from "../assets/popularUnderline.png";
import { IoIosArrowForward } from "react-icons/io";
import { MdArrowBackIos } from "react-icons/md";
import heroTextVector from "../assets/heroTextVector.png";
import { MdFavoriteBorder } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import Footer from "../components/Footer";

const Home = () => {
  const slider = document.querySelector(".slider");
  return (
    <>
      <Navbar />
      <main className="">
        <section className="bg-primary-color overflow-hidden">
          <div className="HERO_CONTENT_WRAPPER  mx-auto  flex flex-col-reverse items-center justify-between lg:flex-row ">
            <div className="TEXT_SEARCH  w-[100%]  flex flex-col  space-y-10 lg:w-[60%] ">
              <div className="TEXT_COLOR_WRAPPER  bg-tertiary-color ">
                <div className="TEXT mx-auto w-[80%] p-5 text-4xl font-Poppins font-light leading-tight md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight lg:mt-5">
                  <h2 className="relative z-10">
                    <img
                      className="w-12 absolute -top-5 -left-7 -z-10 lg:w-16 lg:-top-7 lg:-left-9  "
                      src={heroTextVector}
                      alt=""
                    />
                    Grow your skill
                  </h2>
                  <h2>
                    <span className="text-orange-400">_</span>and find
                  </h2>
                  <h2>perfect course</h2>
                  <h2>for yourself</h2>
                  <p className="text-sm mt-8 font-Urbanist font-medium md:text-base ">
                    Welcome to our course website, your gateway to knowledge and
                    skill enhancement! Explore a diverse range of courses
                    tailored to suit your interests and career aspirations.
                  </p>
                </div>
              </div>
              <div className="flex relative  pl-12 pb-5">
                <IoSearch className="absolute top-3 left-14 text-2xl " />
                <input
                  className="px-10 py-1 border-2 w-80 h-12 border-black rounded-2xl  "
                  placeholder="Search For Courses"
                  type="text"
                />
              </div>
            </div>
            <div className="w-full md:w-[60%] lg:w-[50%]">
              <img
                className="lg:relative lg:left-18 lg:bottom-0 "
                src={HeroImg}
                alt=""
              />
            </div>
          </div>
        </section>
        {/* about section  */}
        <section className="ABOUT h-[450px]  bg-secondary-color pt-5 ">
          <div className="ABOUT TEXT text-center  mx-auto w-[80%] md:w-[60%]">
            <div>
              <h2 className="text-4xl md:text-6xl">About Us</h2>
              <img
                src={aboutUnderline}
                alt="img"
                className="w-52 mx-auto md:w-80"
              />
            </div>
            <p className="mt-5 text-sm md:text-base">
              Welcome to our platform, your go-to destination for transformative
              learning experiences! We're dedicated to providing accessible and
              enriching educational opportunities for individuals worldwide.
              With a diverse array of courses led by industry experts, we're
              committed to helping you achieve your personal and professional
              goals.
            </p>
          </div>
        </section>
        {/* about section categories slider  */}
        <section className="CATEGORIES_SLIDER  mb-10 -mt-28 ">
          <div className="flex overflow-hidden relative  mx-auto w-[255px]  sm:w-[475px] md:w-[700px]">
            <div className="slider flex scroll-smooth	  overflow-x-scroll rounded-md  scrollbar-hide px-6   bg-white ">
              <div className="relative py-5 mr-4 rounded-lg shadow-md min-w-52 ">
                <img src={logo} className=" mx-auto" />
                <h3 className="text-3xl font-thin my-4  text-center ">
                  Chemistry
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  A foundational course in organic chemistry. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Voluptates, labore.
                </p>
                <button className="absolute bottom-2  p-1 w-full bg-black text-white rounded-md">
                  View Now
                </button>
              </div>
              <div className="w-full relative py-5 mr-4 rounded-lg shadow-md min-w-52">
                <img src={logo} className=" mx-auto" />
                <h3 className="text-3xl font-thin my-4  text-center ">
                  Chemistry
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  A foundational course in organic chemistry. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Voluptates, labore.
                </p>
                <button className="absolute bottom-2  p-1 w-full bg-black text-white rounded-md">
                  View Now
                </button>
              </div>
              <div className="w-full relative py-5 mr-4 rounded-lg shadow-md min-w-52">
                <img src={logo} className=" mx-auto" />
                <h3 className="text-3xl font-thin my-4  text-center ">
                  Chemistry
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  A foundational course in organic chemistry. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Voluptates, labore.
                </p>
                <button className="absolute bottom-2  p-1 w-full bg-black text-white rounded-md">
                  View Now
                </button>
              </div>
              <div className="w-full relative py-5 mr-4 rounded-lg shadow-md min-w-52">
                <img src={logo} className=" mx-auto" />
                <h3 className="text-3xl font-thin my-4  text-center ">
                  Chemistry
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  A foundational course in organic chemistry. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Voluptates, labore.
                </p>
                <button className="absolute bottom-2  p-1 w-full bg-black text-white rounded-md">
                  View Now
                </button>
              </div>
              <div className="w-full relative py-5 mr-4 rounded-lg shadow-md min-w-52">
                <img src={logo} className=" mx-auto" />
                <h3 className="text-3xl font-thin my-4  text-center ">
                  Chemistry
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  A foundational course in organic chemistry. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Voluptates, labore.
                </p>
                <button className="absolute bottom-2  p-1 w-full bg-black text-white rounded-md">
                  View Now
                </button>
              </div>
            </div>
            <IoIosArrowForward
              onClick={() => (slider.scrollLeft += 300)}
              className="absolute top-32 right-0 text-3xl cursor-pointer"
            />
            <MdArrowBackIos
              onClick={() => (slider.scrollLeft -= 300)}
              className="absolute top-32 left-0 text-2xl cursor-pointer"
            />
          </div>
        </section>
        {/* courses section  */}
        <section className="COURSES_CONTAINER bg-primary-color pb-16 pt-5 ">
          <div className="COURSES_TEXT text-center ">
            <h2 className="text-4xl md:text-6xl ">Courses</h2>
            <img
              src={coursesUnderline}
              alt="img"
              className="w-52 mx-auto md:w-80 pb-5"
            />
          </div>
          <div className="COURSES_CARDS flex flex-wrap  justify-center items-center gap-10 space-y-5 w-[90%] mx-auto">
            <div className="CARD w-[300px] border flex flex-col p-2 rounded-md bg-white shadow-black  shadow-md">
              <img
                className="h-[200px] w-full object-cover rounded-md overflow-hidden"
                src="https://placehold.co/400"
                alt=""
              />
              <h3 className="my-2 text-secondary-color font-semibold">
                Physics
              </h3>
              <h4 className="text-3xl">Quantum Mechanics</h4>
              <p className="text-sm my-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Suscipit, voluptate. Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Deserunt, placeat!
              </p>
              <div className="flex justify-between items-center ">
                <div className="font-bold text-secondary-color">
                  14<span>RS</span>
                  <span className="font-extralight text-black">per hour</span>
                </div>
                <div className="flex justify-between items-center space-x-5">
                  <div className="flex items-center space-x-1">
                    <span>5</span>
                    <FaStar className="text-yellow-400" />
                  </div>
                  <div className="">
                    <MdFavoriteBorder />
                  </div>
                </div>
              </div>
            </div>

            <div className="CARD w-[300px] border flex flex-col p-2 rounded-md bg-white shadow-black  shadow-md">
              <img
                className="h-[200px] w-full object-cover rounded-md overflow-hidden"
                src="https://placehold.co/400"
                alt=""
              />
              <h3 className="my-2 text-secondary-color font-semibold">
                Physics
              </h3>
              <h4 className="text-3xl">Quantum Mechanics</h4>
              <p className="text-sm my-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Suscipit, voluptate. Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Deserunt, placeat!
              </p>
              <div className="flex justify-between items-center ">
                <div className="font-bold text-secondary-color">
                  14<span>RS</span>
                  <span className="font-extralight text-black">per hour</span>
                </div>
                <div className="flex justify-between items-center space-x-5">
                  <div className="flex items-center space-x-1">
                    <span>5</span>
                    <FaStar className="text-yellow-400" />
                  </div>
                  <div className="">
                    <MdFavoriteBorder />
                  </div>
                </div>
              </div>
            </div>

            <div className="CARD w-[300px] border flex flex-col p-2 rounded-md bg-white shadow-black  shadow-md">
              <img
                className="h-[200px] w-full object-cover rounded-md overflow-hidden"
                src="https://placehold.co/400"
                alt=""
              />
              <h3 className="my-2 text-secondary-color font-semibold">
                Physics
              </h3>
              <h4 className="text-3xl">Quantum Mechanics</h4>
              <p className="text-sm my-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Suscipit, voluptate. Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Deserunt, placeat!
              </p>
              <div className="flex justify-between items-center ">
                <div className="font-bold text-secondary-color">
                  14<span>RS</span>
                  <span className="font-extralight text-black">per hour</span>
                </div>
                <div className="flex justify-between items-center space-x-5">
                  <div className="flex items-center space-x-1">
                    <span>5</span>
                    <FaStar className="text-yellow-400" />
                  </div>
                  <div className="">
                    <MdFavoriteBorder />
                  </div>
                </div>
              </div>
            </div>

            <div className="CARD w-[300px] border flex flex-col p-2 rounded-md bg-white shadow-black  shadow-md">
              <img
                className="h-[200px] w-full object-cover rounded-md overflow-hidden"
                src="https://placehold.co/400"
                alt=""
              />
              <h3 className="my-2 text-secondary-color font-semibold">
                Physics
              </h3>
              <h4 className="text-3xl">Quantum Mechanics</h4>
              <p className="text-sm my-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Suscipit, voluptate. Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Deserunt, placeat!
              </p>
              <div className="flex justify-between items-center ">
                <div className="font-bold text-secondary-color">
                  14<span>RS</span>
                  <span className="font-extralight text-black">per hour</span>
                </div>
                <div className="flex justify-between items-center space-x-5">
                  <div className="flex items-center space-x-1">
                    <span>5</span>
                    <FaStar className="text-yellow-400" />
                  </div>
                  <div className="">
                    <MdFavoriteBorder />
                  </div>
                </div>
              </div>
            </div>

            <div className="CARD w-[300px] border flex flex-col p-2 rounded-md bg-white shadow-black  shadow-md">
              <img
                className="h-[200px] w-full object-cover rounded-md overflow-hidden"
                src="https://placehold.co/400"
                alt=""
              />
              <h3 className="my-2 text-secondary-color font-semibold">
                Physics
              </h3>
              <h4 className="text-3xl">Quantum Mechanics</h4>
              <p className="text-sm my-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Suscipit, voluptate. Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Deserunt, placeat!
              </p>
              <div className="flex justify-between items-center ">
                <div className="font-bold text-secondary-color">
                  14<span>RS</span>
                  <span className="font-extralight text-black">per hour</span>
                </div>
                <div className="flex justify-between items-center space-x-5">
                  <div className="flex items-center space-x-1">
                    <span>5</span>
                    <FaStar className="text-yellow-400" />
                  </div>
                  <div className="">
                    <MdFavoriteBorder />
                  </div>
                </div>
              </div>
            </div>

            <div className="CARD w-[300px] border flex flex-col p-2 rounded-md bg-white shadow-black  shadow-md">
              <img
                className="h-[200px] w-full object-cover rounded-md overflow-hidden"
                src="https://placehold.co/400"
                alt=""
              />
              <h3 className="my-2 text-secondary-color font-semibold">
                Physics
              </h3>
              <h4 className="text-3xl">Quantum Mechanics</h4>
              <p className="text-sm my-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Suscipit, voluptate. Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Deserunt, placeat!
              </p>
              <div className="flex justify-between items-center ">
                <div className="font-bold text-secondary-color">
                  14<span>RS</span>
                  <span className="font-extralight text-black">per hour</span>
                </div>
                <div className="flex justify-between items-center space-x-5">
                  <div className="flex items-center space-x-1">
                    <span>5</span>
                    <FaStar className="text-yellow-400" />
                  </div>
                  <div className="">
                    <MdFavoriteBorder />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* popular courses section  */}
        <section className="POPULAR_COURSES  bg-secondary-color">
          <div className="POPULAR_COURSES_TEXT text-center  pt-5">
            <h2 className="text-4xl md:text-6xl ">Popular Courses</h2>
            <img
              src={popularUnderline}
              alt="img"
              className="w-64 mx-auto md:w-[500px] pb-5"
            />
          </div>
          <div className="COURSES_CARDS flex flex-wrap  justify-center items-center gap-10 space-y-2 relative top-28">
            <div className="CARD w-[300px] border flex flex-col p-2 rounded-md bg-white shadow-black  shadow-md">
              <img
                className="h-[200px] w-full object-cover rounded-md overflow-hidden"
                src="https://placehold.co/400"
                alt=""
              />
              <h3 className="my-2 text-secondary-color font-semibold">
                Physics
              </h3>
              <h4 className="text-3xl">Quantum Mechanics</h4>
              <p className="text-sm my-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Suscipit, voluptate. Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Deserunt, placeat!
              </p>
              <div className="flex justify-between items-center ">
                <div className="font-bold text-secondary-color">
                  14<span>RS</span>
                  <span className="font-extralight text-black">per hour</span>
                </div>
                <div className="flex justify-between items-center space-x-5">
                  <div className="flex items-center space-x-1">
                    <span>5</span>
                    <FaStar className="text-yellow-400" />
                  </div>
                  <div className="">
                    <MdFavoriteBorder />
                  </div>
                </div>
              </div>
            </div>
            <div className="CARD w-[300px] border flex flex-col p-2 rounded-md bg-white shadow-black  shadow-md">
              <img
                className="h-[200px] w-full object-cover rounded-md overflow-hidden"
                src="https://placehold.co/400"
                alt=""
              />
              <h3 className="my-2 text-secondary-color font-semibold">
                Physics
              </h3>
              <h4 className="text-3xl">Quantum Mechanics</h4>
              <p className="text-sm my-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Suscipit, voluptate. Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Deserunt, placeat!
              </p>
              <div className="flex justify-between items-center ">
                <div className="font-bold text-secondary-color">
                  14<span>RS</span>
                  <span className="font-extralight text-black">per hour</span>
                </div>
                <div className="flex justify-between items-center space-x-5">
                  <div className="flex items-center space-x-1">
                    <span>5</span>
                    <FaStar className="text-yellow-400" />
                  </div>
                  <div className="">
                    <MdFavoriteBorder />
                  </div>
                </div>
              </div>
            </div>
            <div className="CARD w-[300px] border flex flex-col p-2 rounded-md bg-white shadow-black  shadow-md">
              <img
                className="h-[200px] w-full object-cover rounded-md overflow-hidden"
                src="https://placehold.co/400"
                alt=""
              />
              <h3 className="my-2 text-secondary-color font-semibold">
                Physics
              </h3>
              <h4 className="text-3xl">Quantum Mechanics</h4>
              <p className="text-sm my-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Suscipit, voluptate. Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Deserunt, placeat!
              </p>
              <div className="flex justify-between items-center ">
                <div className="font-bold text-secondary-color">
                  14<span>RS</span>
                  <span className="font-extralight text-black">per hour</span>
                </div>
                <div className="flex justify-between items-center space-x-5">
                  <div className="flex items-center space-x-1">
                    <span>5</span>
                    <FaStar className="text-yellow-400" />
                  </div>
                  <div className="">
                    <MdFavoriteBorder />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* inquiry section or contact us section  */}

        <section className="CONTACT_US bg-primary-color  mt-72 flex flex-col lg:flex-row">
          <div className="TEXT w-[80%]  mx-auto flex flex-col space-y-4 md:w-[50%] lg:w-[40%]">
            <h2 className="text-4xl pt-2 mt-10 text-center md:text-5xl">
              Contact Us
            </h2>
            <img
              src={contactUnderline}
              alt="img"
              className="w-52 mx-auto md:w-72"
            />
            <p className="text-center text-sm md:text-base">
              You can contact us if you have a question about our courses about
              their price, timetable, reviews, and anything else feel free to
              hit us up
            </p>
            <h6 className="text-center">Phone</h6>
            <p className="text-center">+0023232220</p>
            <h6 className="text-center">Email</h6>
            <p className="text-center">ignipulse@gmail.com</p>
            <h6 className="text-center">Address</h6>
            <p className="text-center">ignipulse.com</p>
          </div>
          <div className="FORM mt-12 w-[100%] lg:w-[50%]">
            <form className="bg-tertiary-color mx-auto flex flex-col space-y-4 p-5 w-[90%] rounded-md md:w-[70%] lg:w-[70%]">
              <h2 className="text-4xl pt-2 underline md:text-3xl">
                Contact Form
              </h2>
              <input
                className="py-4 px-1 focus:outline-none bg-tertiary-color border-black border-b"
                type="email"
                placeholder="Enter your email address"
              />
              <input
                className="py-4 px-1 focus:outline-none bg-tertiary-color border-black border-b"
                type="text"
                placeholder="Enter your name"
              />
              <input
                className="py-4 px-1 focus:outline-none bg-tertiary-color border-black border-b"
                type="number"
                placeholder="Enter your phone"
              />
              <input
                className="py-4 px-1 focus:outline-none bg-tertiary-color border-black border-b"
                type="message"
                placeholder="Enter your message"
              />
              <button className="bg-black text-white font-semibold w-36 rounded-lg">
                Send message
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
