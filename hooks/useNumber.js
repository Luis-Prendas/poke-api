import { useContext } from "react";
import NumContext from "../context/NumContext";

const useNumber = () => {
  const context = useContext(NumContext);
  return {context}
}

export default useNumber
