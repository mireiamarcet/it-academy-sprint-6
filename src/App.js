import './App.css';
import Escena from "./components/escena/Escena"
import data from "./data"
import React from "react"
import Pantalla from "./components/Pantalla"

function App() {
  const [index, setIndex] = React.useState(0)
  const elementsEscena = data.map(e => <Escena key={e.id} selectedIndex={index} {...e}/>)


  function retrocedir(){
    if(index > 0) {
      setIndex(prevIndex => prevIndex - 1)
    }
  }
  
  
  function avançar(){
    if(index < elementsEscena.length) {
      setIndex(prevIndex => prevIndex + 1)
    }
  }

  return (
    <div className="App">
      { index === 0 ? 
            <Pantalla tipus="Inici" endavant={avançar} />
            : 
            <Pantalla tipus="Contingut" endavant={avançar} enrere={retrocedir} escenes={elementsEscena} index={index}/>
      }      
    </div>
  );
}

export default App;
