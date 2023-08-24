import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  useParams,
} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import MainLayout from "./layout/MainLayout";
// import Create from "./pages/Create";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import RecipeList from "./pages/RecipeList";
import RecipeLayout from "./layout/RecipeLayout";

const App = () => {
  const { id } = useParams();
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        {/* <Route path="/recipe" element={<Recipe />} /> */}
        <Route path="*" element={<NotFound />} />
        <Route path="recipelist" element={<RecipeLayout />}>
          <Route index element={<RecipeList />} />
          <Route path=":id" element={<Recipe />} />
        </Route>
      </Route>
    )
  );
  return (
    <div className="container  text-2xl font-mono  mx-auto">
      <RouterProvider router={routes}></RouterProvider>
      
    </div>
  );
};

export default App;
