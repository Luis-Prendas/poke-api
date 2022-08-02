import PokeIMG from "./PokeIMG";
import useNumber from "../hooks/useNumber";
import usePokemons from "../hooks/usePokemons";

const ListOfPokemons = () => {
  const { contextNum } = useNumber();
  const { contextPoke } = usePokemons();
  return (
    <section className="flex flex-wrap w-full max-w-[1000px] justify-center gap-4">
      {contextPoke.slice(contextNum.num, contextNum.num + 3).map((poke) => (
        <div
          key={poke.entry_number}
          className="w-[250px] h-[200px] bg-stone-800 p-4 flex flex-col justify-center items-center gap-4 rounded select-none hover:scale-105"
        >
          <h1 className="text-3xl">{poke.pokemon_species.name}</h1>
          <PokeIMG index={poke.entry_number} />
        </div>
      ))}
    </section>
  );
};

export default ListOfPokemons;
