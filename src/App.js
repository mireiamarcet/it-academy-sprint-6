import React from "react"
import data from "./data"
import './App.css';
import Escena from "./components/escena/Escena"
import Inici from "./components/Inici"
import Contingut from "./components/Contingut"
import Final from "./components/Final"

function App() {
  const [index, setIndex] = React.useState(0)
  const elementsEscena = data.map(e => <Escena key={e.id} selectedIndex={index} {...e}/>)


  function retrocedir(){
    if(index > 0) {
      setIndex(prevIndex => prevIndex - 1)
    }
  }
  
  
  function avançar(){
    if(index <= elementsEscena.length) {
      setIndex(prevIndex => prevIndex + 1)
    }
  }

  function reiniciar(){
    setIndex(0)
  }

  return (
    <div className="App">
      { index === 0 ? 
            <Inici endavant={avançar} />
            : index <= data.length ?
              <Contingut endavant={avançar} enrere={retrocedir} escenes={elementsEscena} index={index}/>
              :
              <Final reiniciar={reiniciar} />
      }      
    </div>
  );
}

export default App;
