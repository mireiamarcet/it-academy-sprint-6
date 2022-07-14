import './App.css';
import Escena from "./components/escena/Escena"
import data from "./data"

function App() {
  const elementsEscena = data.map(e => <Escena key={e.id} item={e}/>)
  return (
    <div className="App">
      {elementsEscena}
    </div>
  );
}

export default App;
