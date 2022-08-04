import { useState } from "react";
import PokemonCard from "../components/PokemonCard";
import { usePokemonNext, usePokemonPrev } from "../hooks/usePokemon";

const Home = ({ pokemonsInit }) => {
  const [pokemonsToUse, setPokemonsToUse] = useState(pokemonsInit);
  const [offset, setOffset] = useState(0);

  const { pokemonsNext } = usePokemonNext(pokemonsToUse.next);
  const { pokemonsPrev } = usePokemonPrev(pokemonsToUse.previous);

  const fetcherNext = () => {
    setPokemonsToUse(pokemonsNext);
    setOffset((prev) => prev + 6);
  };

  const fetcherPrev = async () => {
    setPokemonsToUse(pokemonsPrev);
    setOffset((prev) => prev - 6);
  };

  return (
    <article className="flex flex-wrap justify-center items-center gap-8">
      {pokemonsToUse.results.map((pokemon, index) => (
        <PokemonCard
          key={index + 1 + offset}
          name={pokemon.name}
          index={index + 1 + offset}
        />
      ))}
      <div className="w-full flex gap-4 justify-center">
        <button
          disabled={!pokemonsToUse.previous}
          onClick={fetcherPrev}
          className="px-6 py-2 bg-[#09f] rounded-2xl"
        >
          -
        </button>
        <button
          disabled={!pokemonsToUse.next}
          onClick={fetcherNext}
          className="px-6 py-2 bg-[#09f] rounded-2xl"
        >
          +
        </button>
      </div>
    </article>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=6");
  const res = await response.json();
  return {
    props: {
      pokemonsInit: res,
    },
  };
}

export default Home;
