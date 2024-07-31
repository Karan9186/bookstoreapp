import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Course from "./Course/Course";
import About from "./about/About";
import Contact from "./contact/Contact";
import Store from "./Store/Store";
function App() {
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
