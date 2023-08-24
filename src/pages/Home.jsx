import NotFound from "../components/NotFound";
import { UseFetch } from "../hooks/UseFetch";
import RecipeList from "./RecipeList";
import Recipe from "./Recipe";
const Home = () => {
  const {
    data:recipies,
    isPending,
    error,
  } = UseFetch("http://localhost:3000/recipes");
  // console.log(data);
  return (
    <div className="flex w-[90%] mx-auto">
      {/* <NotFound/> */}
      
      {recipies && <RecipeList recipes={recipies} />}
      {recipies && <Recipe recipes={recipies} />}
    </div>
  );
};

export default Home;
