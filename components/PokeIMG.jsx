import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const PokeIMG = ({ index, wh = 100 }) => {
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
        <span className={`loader w-[${wh}px] h-[${wh}px]`}></span>
      )}
    </>
  );
};

export default PokeIMG;
