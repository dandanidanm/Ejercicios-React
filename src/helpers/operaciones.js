export const operaciones = (numeros, setNumeros) => {
  const { numero1, numero2 } = numeros;

  const handleChange = (e) => {
    setNumeros({
      ...numeros,
      [e.target.name]: parseFloat(e.target.value),
    });
  };

  const sumar = () => numero1 + numero2;

  const restar = () => numero1 - numero2;

  const multiplicacion = () => numero1 * numero2;

  const division = () => numero1 / numero2;

  return {
    handleChange,
    sumar,
    restar,
    multiplicacion,
    division,
    numero1,
    numero2
  };
};
