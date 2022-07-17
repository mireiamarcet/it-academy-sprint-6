import './App.css';
import Escena from "./components/escena/Escena"
import data from "./data"
import React from "react"

function App() {
  const elementsEscena = data.map(e => <Escena key={e.id} {...e}/>)
  return (
    <div className="App">
      {elementsEscena}
    </div>
  );
}

export default App;
