import React from "react"
import styled from "styled-components";


const ContingutAmbEstil = styled.div `
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    height: 800px;
    background-position: top; 
    background-size: cover; 
`;

export default function Contingut(props){
    return (
        <ContingutAmbEstil img={`./img/${props.index}.jpg`}>
            <div>
                <button className="boto-contingut" type="button" onClick={props.enrere}>Anterior</button>
                <button className="boto-contingut" type="button" onClick={props.endavant}>Següent</button>
            </div>
            {props.escenes}
        </ContingutAmbEstil>  
    ) 
}