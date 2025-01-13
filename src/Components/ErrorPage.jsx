import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen ">
      <h1 className="m-4 text-5xl font-extrabold underline font-Manrope">
        No Page Found
      </h1>
      <button className="px-8 py-4 font-extrabold bg-green-400 rounded-full btn text-slate-900 font-Manrope text-8xl hover:border-2 hover:border-slate-900">
        <Link to={"/"}>Back Home</Link>
      </button>
    </div>
  );
};

export default ErrorPage;
