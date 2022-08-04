import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

export const usePokemonNext = (url) => {
  const { data, error } = useSWR(url, fetcher);

  return {
    pokemonsNext: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const usePokemonPrev = (url) => {
  const { data, error } = useSWR(url, fetcher);

  return {
    pokemonsPrev: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const useSinglePokemon = (index) => {
  const { data, error } = useSWR(`https://pokeapi.co/api/v2/pokemon/${index}/`, fetcher);

  return {
    pokemon: data,
    isLoading: !error && !data,
    isError: error,
  };
};
