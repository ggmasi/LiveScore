import React, { useState, useEffect } from "react"

import styled from "styled-components"


import GetGames from "../scripts/CopaDoBrasil/GetGamesCDB.js";
import GetStage from "../scripts/CopaDoBrasil/GetStageCDB.js";
import Escudo from "../components/Escudo"
import Dropdown from "../components/Dropdown";

import LogoImg from "../imgs/CDBImg.png"

const Header = styled.div`
    background-color: #11a793;
    padding-block: 1em;
    margin-bottom: 2rem;
    display: flex;
`
const StartNav = styled.div`
    width: 25%;
    display: flex;
`

const Nav = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const EndNav = styled.div`
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Title = styled.div`
    
    text-align: center;
    font-size: 2rem;
`

const Home = styled.div` 
    
`

const Score = styled.div`
    
    height: 1rem;
    font-family: 'Rubik,', sans-serif;
    padding: 1rem;
    border: 1px solid #0c0c0c;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 48px;
    padding-bottom: 48px;
    flex-direction: row;
    
    
    
`
const InfosContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 500px;
    
`
const Linha = styled.div`
    border-left: 1px solid black;
    height: 115px;
`

const Infos = styled.div`
    font-family: 'Rubik,', sans-serif;
    font-size: 15px;
    display: flex;
    justify-content: center;
`

const Container = styled.div`
    margin-top: 1rem;
    height: 10px;
    display: grid;
    justify-content: center;
    
    width: 100%;
`
const Page = styled.div`
    display: flex;
    
`



const IndividualScore = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 10px;
    
`
const TSpan = styled.span`
    text-align: center;
    font-size: 15px;
    
`

const ISpan = styled.span`
    text-align: center;
    font-size: 15px;
    margin-left: 10px;
`

    
  


export default function Inicio() {

    const [results, defineResults] = useState([])
    const [stageResult, defineStage] = useState("")
    




    useEffect(function() {
        
        setInterval(async function() {
            const games = await GetGames();
            const stage = await GetStage();

            defineResults(games)
            console.log(games)
            defineStage(stage)
            console.log(stage)
            
        }, 5000)
    }, [])
    return <Home>
        <Header>
            <StartNav><img src={LogoImg} alt="" width={90} height={90} style={{marginLeft: 25 + 'px'}}/></StartNav>
            <Nav>
                <Title style={{fontSize: 2 + 'rem'}}>COPA DO BRASIL</Title>
            </Nav>
            <EndNav><Dropdown></Dropdown></EndNav>
        </Header>
        <Page>
            
            <Container>
                <Title style={{marginBottom: 20 + 'px'}}>{stageResult}</Title>
                { (results && results.length > 0) &&
                    results.map(function(jogo, index) {
                        var indexDoJogoVisitante = -1
                        var teamVerification = jogo.mandante
                        var mandanteExisteAnteriormente = false
                        // Verificar se há algum jogo.visitante com o mesmo valor que teamVerification
                        for (var i = 0; i < results.length; i++) {
                            if (i !== index && results[i].visitante === teamVerification) {
                                indexDoJogoVisitante = i;
                                // Faça o que você precisa com o indexDoJogoVisitante aqui
                                console.log("Index do jogo.visitante correspondente:", indexDoJogoVisitante);
                                
                                break; // Se quiser parar de procurar após encontrar o primeiro jogo.visitante correspondente
                            }
                        }      

                        for (var i = 0; i < index; i++){
                            if(results[i].visitante === teamVerification){
                                mandanteExisteAnteriormente = true;
                                break;
                            }
                            
                        }
                        
                       if(mandanteExisteAnteriormente){
                            return null
                       }

                        return <Score key={index} className={index === results.length - 1 ? 'last-score' : ''}>
                            <InfosContainer>
                                <Infos><ISpan style={{fontWeight: "bold"}}>{jogo.data}</ISpan><ISpan>{jogo.local}</ISpan><ISpan style={{fontWeight: "bold"}}>{jogo.live}</ISpan></Infos>
                                <IndividualScore>
                                    <TSpan> { jogo.mandante } </TSpan>    
                                    <Escudo src={jogo.imgmandante}/>
                                    <TSpan> { jogo.gol_mandante.length > 0 ? jogo.gol_mandante : "" } </TSpan>  
                                    <TSpan> x </TSpan>      
                                    <TSpan> { jogo.gol_visitante.length > 0 ? jogo.gol_visitante : "" } </TSpan> 
                                    <Escudo src={jogo.imgvisitante}/>
                                    <TSpan> { jogo.visitante } </TSpan>    
                                    
                                </IndividualScore>
                            </InfosContainer>
                            <Linha></Linha>
                            <InfosContainer>
                                <Infos><ISpan style={{fontWeight: "bold"}}>{results[indexDoJogoVisitante].data}</ISpan><ISpan>{results[indexDoJogoVisitante].local}</ISpan><ISpan style={{fontWeight: "bold"}}>{results[indexDoJogoVisitante].live}</ISpan></Infos>
                                <IndividualScore>
                                    <TSpan> { results[indexDoJogoVisitante].mandante } </TSpan>    
                                    <Escudo src={results[indexDoJogoVisitante].imgmandante}/>
                                    <TSpan> { results[indexDoJogoVisitante].gol_mandante.length > 0 ? results[indexDoJogoVisitante].gol_mandante : "" } </TSpan>  
                                    <TSpan> x </TSpan>      
                                    <TSpan> { results[indexDoJogoVisitante].gol_visitante.length > 0 ? results[indexDoJogoVisitante].gol_visitante : "" } </TSpan> 
                                    <Escudo src={results[indexDoJogoVisitante].imgvisitante}/>
                                    <TSpan> { results[indexDoJogoVisitante].visitante } </TSpan>    
                                </IndividualScore>
                            </InfosContainer>
                        </Score>
                        
                    })
                    
                }
            </Container>
        </Page>
    </Home>
}