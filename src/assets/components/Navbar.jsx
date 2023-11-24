import React from "react";

const Navbar = () => {
  return (
    <nav className=" mx-auto shadow-md mb-10 bg-gray-800">
      <div className=" mx-auto flex items-center justify-center gap-4 max-w-4x1 sm:flex md:flex">
        <img
          src="https://t3.ftcdn.net/jpg/05/90/75/40/360_F_590754013_CoFRYEcAmLREfB3k8vjzuyStsDbMAnqC.jpg"
          alt=""
          className="w-28"
        />
        <h2 className="text-blue-500 tracking-wider">Movie App</h2>
      </div>
    </nav>
  );
};

export default Navbar;
