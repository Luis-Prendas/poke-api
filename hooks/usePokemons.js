import { useContext } from "react";
import PokeContext from "../context/PokeContext";

const usePokemons = () => {
  const contextPoke = useContext(PokeContext);
  return {contextPoke}
}

export default usePokemons
