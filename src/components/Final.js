import React from "react"

export default function Final(props){
    return (
        <div>
          <h1>Fi</h1>
          <p>Aquesta ha estat la història! Esperem que t'hagi agradat</p>
          <button type="button" onClick={props.reiniciar}>Tornar a començar</button>
        </div>
    )
    
}