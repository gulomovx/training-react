import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { UseFetch } from "../hooks/UseFetch";
import RecipeList from "./RecipeList";
const Recipe = () => {
  const { id } = useParams();
  const url = "http://localhost:3000/recipes/" + id;
  const { data: recipes, error, isPending } = UseFetch(url);
  return (
    <div>
      {/* <p>{id}</p> */}
      {recipes && (
        <div className="bg-slate-600 mx-auto my-10 rounded text-center w-[50%]">
          <div className="text-center mx-auto p-8 ">
            <img
              className="mx-auto w-[300px] h-[200px] rounded"
              src={recipes.img}
              alt=""
            />
            <h1 className="text-5xl p-4 text-center font-bold from-blue-500 via-white-600 to-blue-300 bg-gradient-to-r bg-clip-text text-transparent   ">{recipes.title}</h1>
            <hr />
            <p>{recipes.ingredients}</p>
            <p className="text-[18px] font-mono">{recipes.method}</p>
          </div>
          <NavLink className="py-2 px-6  " to="/">
          <button class=" px-6 relative inline-flex items-center justify-center p-0.5 mb-8 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
  <span class="relative text-[22px] px-6 py-2.5 transition-all ease-in duration-75  dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Home
  </span>
</button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Recipe;
