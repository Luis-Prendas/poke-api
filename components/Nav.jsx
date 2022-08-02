import useNumber from "../hooks/useNumber";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Nav = () => {
  const { contextNum } = useNumber();

  return (
    <section className="flex gap-4 w-full justify-center">
      <button
        className="w-20 h-10 bg-stone-800 rounded flex justify-center items-center"
        onClick={() => contextNum.setNum((prev) => prev - 3)}
        disabled={contextNum.num === 0}
      >
        <AiOutlineMinus />
      </button>
      <button
        className="w-20 h-10 bg-stone-800 rounded flex justify-center items-center"
        onClick={() => {
          contextNum.setNum((prev) => prev + 3);
          window.scrollTo(0, 0);
        }}
      >
        <AiOutlinePlus />
      </button>
    </section>
  );
};

export default Nav;
