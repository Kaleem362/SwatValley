import React from "react";
import cover from "../assets/images/ExploreParadiseCover.png";

const BlogHome = () => {
  return (
    <div className="flex items-center justify-center w-full parent-container">
      <img src={cover} alt="" className="object-contain w-full h-auto" />
    </div>
  );
};

export default BlogHome;
