import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { MdFavoriteBorder } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import coursesZigzag from "../assets/coursesZigzag.png";
import { useNavigate, useParams } from "react-router-dom";
import { FaFilePdf } from "react-icons/fa";
import { FaFileCircleQuestion } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import Loader from "../components/Loader";

const CourseDescription = () => {
  const { courseSlug } = useParams();
  const navigate = useNavigate();
  const [courses, setCourses] = useState(null);
  const [relatedCourses, setRelatedCourses] = useState(null);

  const getAllCourses = async () => {
    const res = await fetch(`/api/courses/get-all-courses?slug=${courseSlug}`);
    const data = await res.json();
    if (!res.ok) {
      console.log(data);
      return;
    }
    setCourses(data.courses[0]);
  };
  const getRelatedCourses = async () => {
    const res = await fetch(
      `/api/courses/get-all-courses?categoryId=${courses?.category_id?._id}`
    );

    const data = await res.json();
    if (!res.ok) {
      console.log(data);
      return;
    }
    if (res.ok) {
      console.log(data);
      setRelatedCourses(data.courses);
    }
  };
  useEffect(() => {
    getAllCourses();
  }, [courseSlug]);

  useEffect(() => {
    if (courses?.category_id?._id) {
      getRelatedCourses();
    }
  }, [courses]);
  return (
    <>
      <Navbar bgColor="secondary-color" />
      <section className="h-[68vh] bg-secondary-color"></section>
      <section className="mx-2 -mt-96 lg:flex lg:mx-0 ">
        <div className=" w-full  border flex flex-col p-2 rounded-md text-black bg-white shadow-black  shadow-sm  md:w-[600px] md:mx-auto lg:w-[30vw] lg:ml-10">
          <img
            className="h-[200px] mb-2 object-cover rounded-md overflow-hidden"
            src={courses?.banner}
            alt="course banner"
          />

          <h4 className="text-3xl text-center">{courses?.title}</h4>

          <p className="text-sm my-2 text-center">103 students enrolled</p>
          <hr />
          <div className="flex  justify-between items-center my-2">
            <div className="font-bold ">
              {courses?.price}
              <span className="ml-1 mr-2">RS</span>
              <span className="font-extralight text-gray-400">per hour</span>
            </div>
            <div className="flex justify-between items-center space-x-5">
              <div className="flex items-center space-x-1">
                <span>5</span>
                <FaStar className="text-white" />
              </div>
              <div className="">
                <MdFavoriteBorder />
              </div>
            </div>
          </div>
          <h4 className="my-2">Advance Level</h4>
          <h4>Flexible schedule</h4>
          <p className="text-gray-400 text-xs">Learn at your pace</p>
          <h4 className="my-2">
            14 <span>hours</span>
          </h4>
          <div className="flex items-center justify-between">
            <span className="px-8 py-3 rounded-lg text-white bg-black">
              <MdDateRange className="text-2xl" />
            </span>
            <span className="px-8 py-3 rounded-lg text-white bg-black">
              <FaFileCircleQuestion className="text-2xl" />
            </span>
            <span className="px-8 py-3 rounded-lg text-white bg-black">
              <FaFilePdf className="text-2xl" />
            </span>
          </div>
        </div>

        <div className="DETAILS bg-red-800 bg-opacity-60 mt-2 p-6 lg:w-[60vw] lg:px-24 text-white ">
          <h2 className="text-3xl font-light mb-5 capitalize">
            {courses?.title}
          </h2>
          <p>{courses?.description}</p>
          <h6 className="font-semibold lg:mt-36 ">
            Courses should take before this one:
          </h6>
          <ol className="flex space-x-4 ">
            {courses?.preRequisites.map((pre, i) => {
              return <li key={i}>{pre}</li>;
            })}
          </ol>
          <h5 className="font-bold my-5">
            Category :
            <span className="font-light">{courses?.category_id?.name}</span>
          </h5>
          <button className="bg-black text-white font-light px-4 py-4 rounded-lg">
            What's Included
          </button>
        </div>
      </section>
      {/* whats include section  */}
      <section className="WHATS INCLUDED bg-primary-color mt-10 lg:flex lg:flex-row-reverse ">
        <div className="COURSE_CONTENTS my-5 pt-5 ">
          <h2 className="text-center text-3xl">What's Included</h2>
          <img src={coursesZigzag} alt="" className="w-60 mx-auto" />

          <div className=" lg:w-[70vw]">
            {courses && courses.courseContents.length == 0 ? (
              <div className="text-3xl text-center mt-4">
                No Courses Contents
              </div>
            ) : courses && courses.courseContents.length > 0 ? (
              courses.courseContents.map((c, i) => {
                return (
                  <div key={c._id} className="p-4 mt-9 lg:w-[70%] lg:mx-auto">
                    <h3 className="underline">
                      {i + 1}:{c.topic}
                    </h3>
                    <div className="underline">
                      Duration <span>{c.duration}</span>
                    </div>
                    <p>
                      {c.detail} Lorem ipsum dolor sit amet consectetur,
                      adipisicing elit. Eligendi maiores libero reiciendis natus
                      a pariatur adipisci in minus, iste totam!
                    </p>
                  </div>
                );
              })
            ) : (
              <div className="text-3xl text-center mt-4">
                <Loader />
              </div>
            )}
          </div>
        </div>
        <div className="RELATED COURSES  bg-tertiary-color w-[80%] mx-auto p-5 shadow-black shadow-md lg:w-[30%] lg:h-auto lg:mr-10">
          <h4 className="ml-10 ">Related Courses</h4>

          <ul>
            {relatedCourses && relatedCourses.length == 0 ? (
              <div className="text-xl text-center mt-4">No related courses</div>
            ) : relatedCourses && relatedCourses.length > 0 ? (
              relatedCourses.map((r) => {
                return (
                  <li
                    onClick={() => {
                      navigate(`/course/${r.slug}`), window.scrollTo(0, 0);
                    }}
                    key={r._id}
                    className="list-disc text	ml-10 underline"
                  >
                    {r.title}
                  </li>
                );
              })
            ) : (
              <div className="text-xl text-center mt-4">
                <Loader />
              </div>
            )}
          </ul>
        </div>
      </section>
    </>
  );
};

export default CourseDescription;
