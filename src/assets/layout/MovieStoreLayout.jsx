import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const MovieStoreLayout = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <NavLink to="">Back to Movie Store</NavLink>
      <Outlet />
    </div>
  );
};

export default MovieStoreLayout;
