import { useState } from "react";

export function ButtonWithStates() {
  // Sempre const, counter é a 'variável', setCounter é a função que muda a 'variável'
  // useState seta o valor inicial de counter
  // é um array pois precisa dessas duas coisas (estado e a função que modifica o estado)
  const [counter, setCounter] = useState(0)

  function increment() {
    setCounter(counter + 1)
  }

  return (
    // onClick com CamelCase é do React
    <button onClick={increment}>
      {counter}
    </button>
  )
}