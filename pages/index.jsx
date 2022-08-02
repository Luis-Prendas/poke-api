import ListOfPokemons from "../components/ListOfPokemons";

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
    <>
      <ListOfPokemons pokemons={pokemons.pokemon_entries} />
    </>
  );
}
