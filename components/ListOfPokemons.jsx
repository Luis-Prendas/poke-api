import PokeIMG from "./PokeIMG";
import { useEffect, useRef, useState } from "react";

const ListOfPokemons = ({ pokemons }) => {
  const [offset, setOffset] = useState(0);
  const [toUse, setTpUse] = useState(pokemons.results.slice(0, 3));
  const [save, setSave] = useState(pokemons.results);
  const search = useRef();
  const handleChange = () => {
    const asd = pokemons.results.filter((poke) =>
      poke.name.includes(search.current.value)
    );
    setSave(asd);
  };

  useEffect(() => {
    const slice = save.slice(offset, offset + 3);
    setTpUse(slice);
  }, [offset, save]);

  const handleMore = () => {
    setOffset((prev) => prev + 3);
  };
  const handleLess = () => {
    setOffset((prev) => prev - 3);
  };
  return (
    <>
      <input
        onChange={handleChange}
        ref={search}
        type="text"
        placeholder="Search"
        className="px-2 w-80 h-10 rounded"
      />
      {toUse.map((poke) => (
        <div
          key={poke.name}
          className="w-[200px] h-[200px] bg-stone-800 p-4 flex flex-col justify-center items-center gap-4 rounded select-none hover:scale-105"
        >
          <h1 className="text-3xl">{poke.name}</h1>
          <PokeIMG info={poke} />
        </div>
      ))}
      <section className=" flex gap-4">
        <button
          onClick={handleLess}
          disabled={offset === 0}
          className="bg-stone-800 px-4 py-2 rounded"
        >
          ‹
        </button>
        <button
          onClick={handleMore}
          disabled={offset + 3 >= save.length}
          className="bg-stone-800 px-4 py-2 rounded"
        >
          ›
        </button>
      </section>
    </>
  );
};

export default ListOfPokemons;
