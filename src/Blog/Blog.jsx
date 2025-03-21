import React from "react";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import BlogHome from "./BlogHome";
import TourPackages from "./TourPackages";
import HoneyMoonPackages from "./HoneyMoonPackages";
import BlogAbout from "./BlogAbout";

const Blog = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Parent route with wildcard * for nested routes */}
        <Route path="/" element={<BlogHome />} />
        <Route path="tourpackages" element={<TourPackages />} />
        <Route path="honeymoonpackages" element={<HoneyMoonPackages />} />
        <Route path="aboutus" element={<BlogAbout />} />
      </Routes>
    </>
  );
};

export default Blog;
