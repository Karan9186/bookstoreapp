import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import CourseTitle from "../component/CourseTitle";

function Course() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <CourseTitle />
      </div>
      <Footer />
    </>
  );
}

export default Course;
