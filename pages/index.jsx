import ListOfPokemons from "../components/ListOfPokemons";

export async function getStaticProps() {
  const data = await fetch(
    "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154"
  );
  const res = await data.json();
  return {
    props: {
      pokemons: res,
    },
  };
}

export default function Home({ pokemons }) {
  return <ListOfPokemons pokemons={pokemons} />;
}
