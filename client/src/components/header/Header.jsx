import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full h-full sm:w-8/12 md:w-6/12 mx-auto flex-col flex items-center justify-center">
      <Link to="/">
        <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-white">
          <img
            src="/avatar.webp"
            alt="Tony Ruiz Avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </Link>
      <h1 className="text-xl font-bold">@tonyruizo</h1>
      <p className="text-gray-400 mb-6">Software Engineer</p>
    </div>
  );
};

export default Header;
