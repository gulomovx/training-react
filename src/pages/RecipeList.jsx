import { data } from "autoprefixer";
import React from "react";
import { useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";

const RecipeList = ({ recipes }) => {
  console.log(recipes);
  return (
    <div className="flex">
      <div className="flex gap-9 ">
        {recipes.map((recipe) => {
          return (
            <ul
              className="flex  gap-6 bg-slate-300 p-6 rounded my-8 mx-auto    "
              key={recipe.id}
            >
              <li className="bg-white rounded  p-6 w-[100%]  ">
                <div className="text-center w-[100%] mx-auto">
                  <img
                    src={recipe.img}
                    alt=""
                    className="w-[300px] h-[200px] object-cover rounded "
                  />
                  <h2 className="font-sans font-medium my-2">{recipe.title}</h2>
                  <hr className="" />

                  {/* <p className="text-[18px]">{recipe.method}</p> */}

                  <br />
                  <NavLink
                    className="  "
                    to={`/recipelist/${recipe.id}`}
                  >
                    <button class=" px-6 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
  <span class="relative text-[22px] px-6 py-2.5 transition-all ease-in duration-75  dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Show
  </span>
</button>
                  </NavLink>
                </div>
              </li>
            </ul>
          );
        })}
      </div>
      <Outlet />
    </div>
  );
};

export default RecipeList;
