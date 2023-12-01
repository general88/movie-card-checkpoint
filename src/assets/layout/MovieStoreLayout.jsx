import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const MovieStoreLayout = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex gap-5">
        <NavLink to="/">Back to Movie Store</NavLink>
        <NavLink to="/oldversion">Previous version</NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieStoreLayout;
