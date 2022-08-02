import { useContext } from "react";
import NumContext from "../context/NumContext";

const useNumber = () => {
  const contextNum = useContext(NumContext);
  return {contextNum}
}

export default useNumber
