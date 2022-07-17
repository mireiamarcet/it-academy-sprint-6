import React from "react"
import styled from "styled-components";


const Selector = styled.div `
    background: ${({id, selectedIndex}) => id === selectedIndex ? "pink" : "white" };
    margin: 20px 35px;
    padding: 10px;
    border: 2px solid black;
    border-radius: 25px;    
`;

export default function Escena(props){
    return <Selector id={props.id} selectedIndex={props.selectedIndex}>{props.text}</Selector>
}