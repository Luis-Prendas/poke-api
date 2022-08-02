import usePokemons from "../../hooks/usePokemons";

const Pruebas = () => {
  const { contextPoke } = usePokemons();
  console.log(contextPoke);
  return (
    <>
      <h1>Pruebas</h1>
    </>
  );
};

export default Pruebas;
