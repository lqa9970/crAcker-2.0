import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <h1 className="text-center mt-3 mb-4">
        <Link to="/" className="text-dark">
          Coinance
        </Link>
      </h1>
    </div>
  );
};

export default Nav;
