import { ButtonWithProps } from "./components/example_components/Button_Props"
import { ButtonWithStates } from "./components/example_components/Button_States"

function App() {
  return (
    <div>
      {/* Com children */}
      <ButtonWithProps>Com children</ButtonWithProps>

      {/* Sem children */}
      <ButtonWithProps text="Sem children" />

      <ButtonWithProps />

      <br></br>

      <ButtonWithStates />
    </div>
  );
}

export default App;
