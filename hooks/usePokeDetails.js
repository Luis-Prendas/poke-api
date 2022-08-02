import { useEffect, useState } from "react";

const usePokeDetails = (POKE) => {
  const [pokeDetails, setPokeDetails] = useState(null);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${POKE}/`)
      .then((response) => response.json())
      .then((res) => setPokeDetails(res));
  }, [POKE]);

  return { pokeDetails };
};

export default usePokeDetails;
