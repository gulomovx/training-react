import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-white-500 w-full p-4 ">
      
      <div className="flex font-mono justify-between items-center mx-auto text-center content-center  w-[90%]">
        <h1 className=" text-[35px] text-black">Recipe <span className="text-blue-300">App</span></h1>
        <ul className="flex">
          {/* <li className="flex items-center gap-12">
            <NavLink className="p-2 border-black-500" to={"create"}>
              Click
            </NavLink>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
