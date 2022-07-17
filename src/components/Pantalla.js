import React from "react"
import styled from "styled-components";


const Contingut = styled.div `
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    height: 800px;
    background-position: top; 
    background-size: cover; 
`;

export default function Pantalla(props){
    if(props.tipus === "Contingut"){
        return (
            <Contingut img={`./img/${props.index}.jpg`}>
                <div>
                    <button className="boto-contingut" type="button" onClick={props.enrere}>Anterior</button>
                    <button className="boto-contingut" type="button" onClick={props.endavant}>Següent</button>
                </div>
                {props.escenes}
            </Contingut>  
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