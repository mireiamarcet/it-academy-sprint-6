import React from "react"


export default function Pantalla(props){
    if(props.tipus === "Contingut"){
        return (
            <div>
                <div>
                    <button className="boto-contingut" type="button" onClick={props.enrere}>Anterior</button>
                    <button className="boto-contingut" type="button" onClick={props.endavant}>Següent</button>
                </div>
                {props.escenes}
            </div>  
        )
    } else {
        return (
            <div>
              <h1>{props.tipus}</h1>
              <p>Aquesta és la història sobre un super heroi espaial. La vols conèixer?</p>
              <button type="button" onClick={props.endavant}>Començar</button>
            </div>
        )
    }
    
}