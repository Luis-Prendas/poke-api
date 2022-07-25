import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const PokeIMG = ({ info }) => {
  const [pokeInfo, setPokeInfo] = useState(null);
  useEffect(() => {
    fetch(info.url)
      .then((response) => response.json())
      .then((res) => setPokeInfo(res));
  }, [info]);

  return (
    <>
      {pokeInfo ? (
        <>
          {pokeInfo.sprites.other["official-artwork"].front_default ? (
            <Link href={`/poke/${pokeInfo.id}`}>
              <Image
                width={100}
                height={100}
                alt={info.name}
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
