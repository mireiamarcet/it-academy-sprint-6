import React from "react"
import styled from "styled-components";


const Selector = styled.div `
    margin: 20px 35px;
    padding: 10px;
    border: 2px solid black;
    border-radius: 25px;    
`;

export default function Escena(props){
    return <Selector>{props.text}</Selector>
}