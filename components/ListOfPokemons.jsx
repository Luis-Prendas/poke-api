import PokeIMG from "./PokeIMG";
import { useEffect, useState } from "react";

const ListOfPokemons = ({ pokemons }) => {
  const [save, setSave] = useState(pokemons);
  const [toUse, setToUse] = useState(save.slice(0, 48));
  const [offset, setOffset] = useState(0);

  const handleChange = (element) => {
    const filter = pokemons.filter((poke) =>
      poke.pokemon_species.name.includes(element.target.value.toLowerCase())
    );
    setSave(filter);
    setOffset(0);
  };

  useEffect(() => {
    setToUse(save.slice(offset, offset + 48));
  }, [offset, save, pokemons]);

  return (
    <>
      <input
        onChange={handleChange}
        type="text"
        className="w-80 h-10 rounded px-2 text-stone-700 font-semibold"
        placeholder="Search"
      />
      <section className="flex flex-wrap w-[1000px] justify-center gap-4">
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
          onClick={() => setOffset((prev) => prev - 48)}
          disabled={offset === 0}
        >
          -
        </button>
        <button
          className="w-20 h-10 bg-stone-800 rounded"
          onClick={() => {
            setOffset((prev) => prev + 48);
            window.scrollTo(0, 0);
          }}
          disabled={offset + 48 >= save.length}
        >
          +
        </button>
      </section>
    </>
  );
};

export default ListOfPokemons;
