import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <h1 className="p-6">Coming soon!</h1>

      <div>
        <Link
          className="flex items-center justify-center space-x-3 bg-gray-800 hover:bg-gray-700 transition rounded-xl py-3 px-4 font-semibold shadow"
          to="/"
        >
          Back
        </Link>
      </div>
    </>
  );
};

export default Projects;
