import Image from "next/image";
import { useEffect, useState } from "react";
import { style } from "../utils/colorsTags";

const PokemonCard = ({ pokemonInfo, index }) => {
  const [dataOfPokemon, setDataOfPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${index}/`)
      .then((response) => response.json())
      .then((data) => setDataOfPokemon(data));
  }, [index]);

  return (
    <section className="relative flex flex-col gap-2 p-4 w-[180px] h-[150px] bg-stone-800 rounded-2xl">
      <h3 className="text-xl font-semibold">{pokemonInfo.name}</h3>
      <ul className="flex flex-col gap-2 justify-start items-start text-center">
        {dataOfPokemon &&
          dataOfPokemon.types.map((type) => (
            <li
              key={type.type.name}
              style={{ background: style[type.type.name] }}
              className="w-20 py-1 rounded-full cursor-pointer"
            >
              {type.type.name}
            </li>
          ))}
      </ul>
      <div className="absolute -bottom-6 -right-6 select-none">
        <Image
          alt="Pokemon"
          width={140}
          height={140}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index}.svg`}
        />
      </div>
    </section>
  );
};

export default PokemonCard;
