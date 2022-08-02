import ListOfPokemons from "../components/ListOfPokemons";
import Nav from "../components/Nav";
import PokeContext from "../context/PokeContext";

export async function getStaticProps() {
  const data = await fetch("https://pokeapi.co/api/v2/pokedex/1/");
  const res = await data.json();
  return {
    props: {
      pokemons: res,
    },
  };
}

export default function Home({ pokemons }) {
  return (
    <PokeContext.Provider value={pokemons.pokemon_entries}>
      <ListOfPokemons />
      <Nav />
    </PokeContext.Provider>
  );
}
