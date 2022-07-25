import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const PokeIMG = ({ index }) => {
  const [pokeInfo, setPokeInfo] = useState(null);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${index}/`)
      .then((response) => response.json())
      .then((res) => setPokeInfo(res));
  }, [index]);

  return (
    <>
      {pokeInfo ? (
        <>
          {pokeInfo.sprites.other["official-artwork"].front_default ? (
            <Link href={`/poke/${index}`}>
              <Image
                width={100}
                height={100}
                alt={pokeInfo.name}
                src={pokeInfo.sprites.other["official-artwork"].front_default}
                className="cursor-pointer"
              />
            </Link>
          ) : (
            <div className="w-[100px] h-[100px]">NO IMAGE</div>
          )}
        </>
      ) : (
        <div className="w-[100px] h-[100px]"></div>
      )}
    </>
  );
};

export default PokeIMG;
