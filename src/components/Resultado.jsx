import PropTypes from "prop-types"

const Resultado = ({operacion, calculo}) => {
  return (
    <>
    <p>{operacion}: {calculo}</p>
    </>
  )
}

Resultado.protoType = {
operacion: PropTypes.string,
calculo: PropTypes.number
}

export default Resultado