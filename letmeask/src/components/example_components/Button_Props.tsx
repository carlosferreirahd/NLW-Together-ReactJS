// Crio um objeto que descreve minhas props
type ButtonProps = {
  // A interrogação serve pra dizer que o atributo é opcional
  text?: string;
  // children é o que passa dentro das tags (tag abrir e tag fechar)
  children?: string;
}

// Digo que as props tem o formato desse objeto que acabei de criar
export function ButtonWithProps(props: ButtonProps) {
  return (
    <button>{props.text || props.children}</button>
  )
}