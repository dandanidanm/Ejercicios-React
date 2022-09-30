import PropTypes from "prop-types";
import { useState } from "react";
import { operaciones } from "../helpers/operaciones";
import Resultado from "./Resultado";

const NumberInput = ({ name }) => {
  const inicialState = {
    numero1: 0,
    numero2: 0,
  };
  const [numeros, setNumeros] = useState(inicialState);

  const {
    handleChange,
    sumar,
    restar,
    multiplicacion,
    division,
    numero1,
    numero2,
  } = operaciones(numeros, setNumeros);

  return (
    <>
      <h2>{name}</h2>
      <label>
        Numero1:{" "}
        <input
          name="numero1"
          value={numero1}
          onChange={handleChange}
          type="number"
        />
      </label>
      <label>
        Numero2:{" "}
        <input
          name="numero2"
          value={numero2}
          onChange={handleChange}
          type="number"
        />
      </label>

      <Resultado operacion="Suma" calculo={sumar()} />
      <Resultado operacion="Resta" calculo={restar()} />
      <Resultado operacion="Multiplicación" calculo={multiplicacion()} />
      <Resultado operacion="Division" calculo={division()} />
    </>
  );
};

NumberInput.propTypes = {
  name: PropTypes.string,
};

export default NumberInput;
