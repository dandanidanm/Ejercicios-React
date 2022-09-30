import Contador from "./components/Contador"
import Cards from "./components/Cards";
import Calculadora from "./components/Calculadora";


import './App.css';

function App() {
  return (
    <div className="App">
      <Contador inicial={0} factor={3} />
      <hr />
      <Cards />
      <hr />
      <Calculadora />
    </div>
  );
}

export default App;
