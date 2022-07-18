import React from "react"

export default function Inici(props){
    return (
        <div>
          <h1>Inici</h1>
          <p>Aquesta és la història sobre un super heroi espaial. La vols conèixer?</p>
          <button type="button" onClick={props.endavant}>Començar</button>
        </div>
    )
    
}