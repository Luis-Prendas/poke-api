import Image from "next/image";
import Link from "next/link";
import usePokeDetails from "../hooks/usePokeDetails";

const PokeIMG = ({ index }) => {
  const { pokeDetails } = usePokeDetails(index);
  return (
    <>
      {pokeDetails ? (
        <Link href={`poke/${index}`}>
          <Image
            width={100}
            height={100}
            alt={pokeDetails.name}
            src={pokeDetails.sprites.other["official-artwork"].front_default}
            className="cursor-pointer"
          />
        </Link>
      ) : (
        <span className="loader w-[100px] h-[100px]"></span>
      )}
    </>
  );
};

export default PokeIMG;
