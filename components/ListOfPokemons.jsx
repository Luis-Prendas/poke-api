import PokeIMG from "./PokeIMG";
import { useEffect, useState } from "react";
import useNumber from "../hooks/useNumber";

const ListOfPokemons = ({ pokemons }) => {
  const { context } = useNumber();

  const [save, setSave] = useState(pokemons);
  const [toUse, setToUse] = useState(save.slice(context.num, 3));

  const handleChange = (element) => {
    const filter = pokemons.filter((poke) =>
      poke.pokemon_species.name.includes(element.target.value.toLowerCase())
    );
    setSave(filter);
  };

  useEffect(() => {
    setToUse(save.slice(context.num, context.num + 3));
  }, [context.num, save]);

  return (
    <>
      <input
        onChange={handleChange}
        type="text"
        className="w-80 h-10 rounded px-2 text-stone-700 font-semibold"
        placeholder="Search"
      />
      <section className="flex flex-wrap w-full max-w-[1000px] justify-center gap-4">
        {toUse.map((poke) => (
          <div
            key={poke.entry_number}
            className="w-[250px] h-[200px] bg-stone-800 p-4 flex flex-col justify-center items-center gap-4 rounded select-none hover:scale-105"
          >
            <h1 className="text-3xl">{poke.pokemon_species.name}</h1>
            <PokeIMG index={poke.entry_number} />
          </div>
        ))}
      </section>
      <section className="flex gap-4 w-full justify-center">
        <button
          className="w-20 h-10 bg-stone-800 rounded"
          onClick={() => context.setNum((prev) => prev - 3)}
          disabled={context.num === 0}
        >
          -
        </button>
        <button
          className="w-20 h-10 bg-stone-800 rounded"
          onClick={() => {
            context.setNum((prev) => prev + 3);
            window.scrollTo(0, 0);
          }}
          disabled={context.num + 3 >= save.length}
        >
          +
        </button>
      </section>
    </>
  );
};

export default ListOfPokemons;
