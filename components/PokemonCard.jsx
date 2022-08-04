import Image from "next/image";
import { useEffect, useState } from "react";
import { useSinglePokemon } from "../hooks/usePokemon";
import { style } from "../utils/colorsTags";
import Link from "next/link";

const PokemonCard = ({ name, index }) => {
  const [dataOfPokemon, setDataOfPokemon] = useState(null);

  const { pokemon } = useSinglePokemon(index);

  useEffect(() => {
    setDataOfPokemon(pokemon);
  }, [pokemon]);

  return (
    <Link href="/details/1">
      <section className="cursor-pointer relative flex flex-col gap-2 p-4 w-[180px] h-[150px] bg-[#09f] shadow-xl shadow-[#0099ff44] rounded-2xl hover:scale-105 transition-all select-none">
        <h3 className="text-xl font-semibold">{name}</h3>
        <ul className="flex flex-col gap-2 justify-start items-start text-center">
          {dataOfPokemon &&
            dataOfPokemon.types.map((type) => (
              <li
                key={type.type.name}
                style={{ background: style[type.type.name] }}
                className="w-20 py-1 rounded-full cursor-pointer hover:scale-110 transition-all"
              >
                {type.type.name}
              </li>
            ))}
        </ul>
        <div className="absolute -bottom-6 -right-6 select-none drop-shadow-lg hover:scale-110 transition-all">
          <Image
            alt=""
            width={140}
            height={140}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index}.svg`}
          />
        </div>
      </section>
    </Link>
  );
};

export default PokemonCard;
