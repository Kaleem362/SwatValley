import React from "react";
import ExploreswatCover from "../assets/images/ExploreParadiseCover.png";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="">
      {/* pagination */}
      <div className="flex gap-2 px-10 py-2 bg-gray-300 pagination-div ">
        <Link to={"/blog"} className="hover:underline">
          Home
        </Link>
        {"/"}
        <Link to={"/blogdetail"} className="hover:underline">
          Blog Details
        </Link>
      </div>
      <div className="m-10 shadow-2xl shadow-slate-800 card w-96">
        <img src={ExploreswatCover} className="card-img-top h-78" alt="..." />
        <div className="card-body">
          <h5 className="text-2xl font-extrabold card-title font-Manrope">
            The ultimate guide to the best places to visit swat valley
          </h5>
          <p className="my-2 card-text">
            Nestled amidst the majestic mountains of Pakistan, Swat Valley
            beckons with its pristine beauty and enchanting landscapes.
          </p>
          <Link
            to="/blogdetail"
            className="my-2 text-white btn bg-slate-800 hover:bg-slate-500"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
