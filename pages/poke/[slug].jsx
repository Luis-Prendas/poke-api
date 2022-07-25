import Image from "next/image";
import Link from "next/link";

export async function getStaticPaths() {
  const data = await fetch("https://pokeapi.co/api/v2/pokedex/1/");
  const res = await data.json();
  return {
    paths: res.pokemon_entries.map((path) => ({
      params: { slug: `${path.entry_number}` },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.slug}`);
  const res = await data.json();
  return {
    props: {
      poke: res,
    },
  };
}

const style = {
  bug: "bg-[#a6b91a]",
  dark: "bg-[#705746]",
  dragon: "bg-[#6f35fc]",
  electric: "bg-[#f7d02c]",
  fairy: "bg-[#d685ad]",
  fighting: "bg-[#c22e28]",
  fire: "bg-[#ee8130]",
  flying: "bg-[#a98ff3]",
  ghost: "bg-[#735797]",
  grass: "bg-[#7ac74c]",
  ground: "bg-[#e2bf65]",
  ice: "bg-[#96d9d6]",
  normal: "bg-[#a8a77a]",
  poison: "bg-[#a33ea1]",
  psychic: "bg-[#f95587]",
  rock: "bg-[#b6a136]",
  steel: "bg-[#b7b7ce]",
  water: "bg-[#6390f0]",
};

const Poke = ({ poke }) => {
  return (
    <>
      <section className="relative flex flex-col w-full bg-stone-800 rounded justify-start items-center p-4">
        <Link href="/">
          <a className="absolute top-4 left-4 p-4 bg-stone-900 rounded-full text-3xl select-none">
            ‹
          </a>
        </Link>
        <h1 className="text-3xl uppercase font-bold">{poke.name}</h1>
        <Image
          src={poke.sprites.other["official-artwork"].front_default}
          alt={poke.name}
          width={300}
          height={300}
        />
        <div className="w-full flex gap-4 justify-center">
          {poke.types.map((type) => (
            <span
              key={type.type.name}
              className={`px-4 py-2 rounded-full flex gap-2 font-semibold uppercase ${
                style[`${type.type.name}`]
              }`}
            >
              {type.type.name}
            </span>
          ))}
        </div>
      </section>
      <section className="flex w-full bg-stone-800 rounded justify-center items-center flex-col gap-4 p-4">
        <h2 className="text-3xl font-bold">Stats Base</h2>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          {poke.stats.map((stat) => (
            <div
              className="bg-stone-900 px-4 py-2 rounded-full flex gap-2"
              key={stat.stat.name}
            >
              <span className="uppercase">{stat.stat.name}:</span>
              <span className="font-bold">{stat.base_stat}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Poke;
