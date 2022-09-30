import { useState } from "react"

const Contador = ({inicial, factor}) => {
  const [count, setCount] = useState(inicial)
  
  const aumentar = () => setCount( count + factor )
 
  const disminuir = () => setCount( valor => valor - factor )

  const reset = () => setCount(inicial)

  return (
    <div>
      <h1>Hola mundo!!</h1>
      <hr />
      <h2>Contador: {count} </h2>
      <button onClick={disminuir}>Disminuir x3</button>
      <button onClick={reset}>Reset</button>
      <button onClick={aumentar}>Aumentar x3</button>

    </div>
  )
}

export default Contador