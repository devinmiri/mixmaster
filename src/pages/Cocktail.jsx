import { useLoaderData } from "react-router-dom";
import Wrapper from "../assets/wrappers/CocktailPage";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const singleCocktailUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const singleCocktailQuery = (id) => {
  return {
    queryKey: ["cocktail", id],
    queryFn: async () => {
      const { data } = await axios.get(`${singleCocktailUrl}${id}`);

      return data.drinks;
    },
  };
};

export const loader =
  (clientQuery) =>
  async ({ params }) => {
    const { id } = params;
    await clientQuery.ensureQueryData(singleCocktailQuery(id));

    return id;
  };

const Cocktail = () => {
  const navigate = useNavigate();
  const id = useLoaderData();
  const { data: drinks } = useQuery(singleCocktailQuery(id));

  if (!drinks) return <Navigate to="/" />;

  const singleDrink = drinks[0];
  const validIngredients = Object.keys(singleDrink)
    .filter((key) => {
      return key.startsWith("strIngredient") && singleDrink[key] !== null;
    })
    .map((key) => singleDrink[key])
    .join(",");

  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink;

  return (
    <Wrapper>
      <header>
        <button onClick={() => navigate(-1)} className="btn">
          back home
        </button>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={image} alt={name} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span>
            {name}
          </p>
          <p>
            <span className="drink-data">category :</span>
            {category}
          </p>
          <p>
            <span className="drink-data">info :</span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass :</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">ingredients :</span>
            {/* {validIngredients.map((item, index) => {
              return (
                <span className="ing" key={item}>
                  {item}
                  {index < validIngredients.length - 1 ? "," : ""}
                </span>
              );
            })} */}

            {validIngredients}
          </p>
          <p>
            <span className="drink-data">instructions :</span>
            {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
export default Cocktail;
