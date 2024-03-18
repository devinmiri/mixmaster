import CocktailCard from "./CocktailCard";
import Wrapper from "../assets/wrappers/CocktailList";
const CocktailList = ({ drinks }) => {
  if (!drinks) {
    return (
      <h4 style={{ textAlign: "center" }}>No matching cocktails found...</h4>
    );
  }

  const formattedDrinks = drinks.map((item) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    };
  });
  return (
    <Wrapper>
      {formattedDrinks.map((item, id) => {
        return <CocktailCard key={id} {...item} />;
      })}
    </Wrapper>
  );
};

export default CocktailList;
