import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-100 p-4">
      <ul className="flex">
        <li>
          <Link className="text-blue-800 m-2 font-bold" to="/">Home</Link>
        </li>
        <li>
          <Link className="text-blue-800 m-2 font-bold" to="/cond1">condition_1</Link>
        </li>
        <li>
          <Link className="text-blue-800 m-2 font-bold" to="/cond2">condition_2</Link>
        </li>
        <li>
          <Link className="text-blue-800 m-2 font-bold" to="/cond3">condition_3</Link>
        </li>
        <li>
          <Link className="text-blue-800 m-2 font-bold" to="/cond4">condition_4</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;