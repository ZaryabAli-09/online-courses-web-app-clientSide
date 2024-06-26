import React, { useEffect, useState } from "react";
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
import { MdOutlineCategory } from "react-icons/md";

import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import SkeletonCard from "../components/SkeletonCard";

const Home = () => {
  const slider = document.querySelector(".slider");
  const navigate = useNavigate();
  const [categories, setCategories] = useState(null);
  const [courses, setCourses] = useState(null);
  const [popularCourses, setPopularCourses] = useState(null);

  const getAllCategories = async () => {
    const res = await fetch("/api/category/get-categories");

    const data = await res.json();

    if (res.ok) {
      setCategories(data.categories);
    }
    if (!res.ok) {
      console.log(data);
    }
  };
  const getAllCourses = async () => {
    const res = await fetch("/api/courses/get-all-courses?activate=true");

    const data = await res.json();

    if (res.ok) {
      setCourses(data.courses);
    }
    if (!res.ok) {
      console.log(data);
    }
  };
  const getPopularCourses = async () => {
    const res = await fetch("/api/courses/get-all-courses?popular=true");

    const data = await res.json();

    if (res.ok) {
      setPopularCourses(data.courses);
    }
    if (!res.ok) {
      console.log(data);
    }
  };
  useEffect(() => {
    getAllCategories();
    getAllCourses();
    getPopularCourses();
  }, []);
  return (
    <>
      <Navbar bgColor="primary-color" />
      <main className="">
        <section className="bg-primary-color overflow-hidden" id="home">
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
        <section
          className="ABOUT h-[450px]  bg-secondary-color pt-5 "
          id="about"
        >
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
              {categories && categories.length <= 0
                ? "No categories"
                : categories && categories.length > 0
                ? categories.map((category) => {
                    return (
                      <div
                        key={category._id}
                        className="relative py-5 mr-4 rounded-lg shadow-md min-w-52 "
                      >
                        <MdOutlineCategory className=" mx-auto text-2xl" />
                        <h3 className="text-3xl font-thin my-7  text-center ">
                          {category.name}
                        </h3>
                        <p className="text-gray-600 text-center pb-10">
                          {category.description}Lorem, ipsum dolor sit amet
                          consectetur adipisicing elit. Cumque, vero!
                        </p>
                        <button className="absolute bottom-2  p-1 w-full bg-black text-white rounded-md">
                          View Now
                        </button>
                      </div>
                    );
                  })
                : ""}
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
        <section
          className="COURSES_CONTAINER bg-primary-color pb-16 pt-5 "
          id="courses"
        >
          <div className="COURSES_TEXT text-center ">
            <h2 className="text-4xl md:text-6xl ">Courses</h2>
            <img
              src={coursesUnderline}
              alt="img"
              className="w-52 mx-auto md:w-80 pb-5"
            />
          </div>

          <div className="COURSES_CARDS flex flex-wrap  justify-center items-center gap-10 space-y-5 w-[90%] mx-auto">
            {courses && courses.length <= 0 ? (
              "No courses"
            ) : courses && courses.length > 0 ? (
              courses.map((course) => {
                return (
                  <div
                    key={course._id}
                    onClick={() => {
                      navigate(`/course/${course.slug}`), window.scrollTo(0, 0);
                    }}
                    className="CARD hover:bg-slate-100 cursor-pointer w-[300px] h-[auto] border flex flex-col p-2 rounded-md bg-white shadow-black  shadow-md"
                  >
                    <img
                      className="h-[200px] w-[300px] object-cover rounded-md overflow-hidden"
                      src={course.banner}
                      alt="course banner"
                    />
                    <h3 className="my-2 text-secondary-color font-semibold">
                      {course.category_id.name}
                    </h3>
                    <h4 className="text-3xl h-24">{course.title}</h4>
                    <p className="text-sm my-2">
                      {course.description}Lorem, ipsum dolor sit amet
                      consectetur adipisicing elit. Cumque, vero!
                    </p>
                    <div className="flex justify-between items-center ">
                      <div className="font-bold text-secondary-color">
                        {course.price}
                        <span className="ml-1 mr-2">RS</span>
                        <span className="font-extralight text-black">
                          per hour
                        </span>
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
                );
              })
            ) : (
              <>
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
              </>
            )}
          </div>
        </section>
        {/* popular courses section  */}
        <section className="POPULAR_COURSES  ">
          <div className="POPULAR_COURSES_TEXT text-center  pt-5 bg-secondary-color h-[60vh]">
            <h2 className="text-4xl md:text-6xl ">Popular Courses</h2>
            <img
              src={popularUnderline}
              alt="img"
              className="w-64 mx-auto md:w-[500px] pb-5"
            />
          </div>
          <div className="COURSES_CARDS flex flex-wrap  justify-center items-center gap-10 space-y-5 w-[90%] mx-auto -mt-56">
            {popularCourses && popularCourses.length <= 0 ? (
              "No courses"
            ) : popularCourses && popularCourses.length > 0 ? (
              popularCourses.map((course) => {
                return (
                  <div
                    key={course._id}
                    className="CARD w-[300px] h-[auto] border flex flex-col p-2 rounded-md bg-white shadow-black  shadow-md"
                  >
                    <img
                      className="h-[200px] w-[300px] object-cover rounded-md overflow-hidden"
                      src={course.banner}
                      alt="course banner"
                    />
                    <h3 className="my-2 text-secondary-color font-semibold">
                      {course.category_id.name}
                    </h3>
                    <h4 className="text-3xl h-24">{course.title}</h4>
                    <p className="text-sm my-2">
                      {course.description} Lorem, ipsum dolor sit amet
                      consectetur adipisicing elit. Cumque, vero!
                    </p>
                    <div className="flex justify-between items-center ">
                      <div className="font-bold text-secondary-color">
                        {course.price}
                        <span>RS</span>
                        <span className="font-extralight text-black">
                          per hour
                        </span>
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
                );
              })
            ) : (
              <>
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
              </>
            )}
          </div>
        </section>
        {/* inquiry section or contact us section  */}

        <section
          className="CONTACT_US bg-primary-color  mt-72 flex flex-col lg:flex-row"
          id="contact"
        >
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
