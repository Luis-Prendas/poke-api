import { useState } from "react";
import PokemonCard from "../components/PokemonCard";

const Home = ({ pokemons }) => {
  const [pokemonsToUse, setPokemonsToUse] = useState(pokemons);
  const [offset, setOffset] = useState(0);

  const fetcherNext = async () => {
    const response = await fetch(pokemonsToUse.next);
    const res = await response.json();
    setPokemonsToUse(res);
    setOffset((prev) => prev + 20);
  };

  const fetcherPrev = async () => {
    const response = await fetch(pokemonsToUse.previous);
    const res = await response.json();
    setPokemonsToUse(res);
    setOffset((prev) => prev - 20);
  };

  // console.log(pokemons);

  return (
    <article className="flex flex-wrap justify-center items-center gap-8">
      {pokemonsToUse.results.map((pokemon, index) => (
        <PokemonCard
          key={index + 1 + offset}
          pokemonInfo={pokemon}
          index={index + 1 + offset}
        />
      ))}
      <div className="w-full flex gap-4 justify-center">
        <button
          disabled={!pokemonsToUse.previous}
          onClick={fetcherPrev}
          className="px-6 py-2 bg-stone-800 rounded-2xl"
        >
          -
        </button>
        <button
          disabled={!pokemonsToUse.next}
          onClick={fetcherNext}
          className="px-6 py-2 bg-stone-800 rounded-2xl"
        >
          +
        </button>
      </div>
    </article>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  const res = await response.json();
  return {
    props: {
      pokemons: res,
    },
  };
}

export default Home;
