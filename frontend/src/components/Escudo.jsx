import React from "react"
import styled from "styled-components"

const Model = styled.span`
    
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 5px;
    padding-bottom: 5px;
    
`

const ModelImg = styled.img`
    
    
    height: 32px;
    width: 32px;
`

 


export default function Escudo(props){
    return <Model>
        <ModelImg src={props.src}/>
        
    </Model>
}