import React, { useState, useEffect } from "react"

import styled from "styled-components"

import GetPoints from "../scripts/SerieB/GetPointsSerieB";
import GetTeams from "../scripts/SerieB/GetTeamsSerieB";
import GetGames from "../scripts/SerieB/GetGamesSerieB";
import Escudo from "../components/Escudo"
import Dropdown from "../components/Dropdown";

import ABCImg from "../imgs/SerieB/ABC.svg"
import AtleticoImg from "../imgs/SerieB/Atlético-GO.svg"
import AvaiImg from "../imgs/SerieB/Avaí.svg"
import BotafogoSPImg from "../imgs/SerieB/Botafogo-SP.svg"
import CearaImg from "../imgs/SerieB/Ceará.svg"
import ChapecoenseImg from "../imgs/SerieB/Chapecoense.svg"
import CRBImg from "../imgs/SerieB/CRB.svg"
import CriciumaImg from "../imgs/SerieB/Criciúma.svg"
import GuaraniImg from "../imgs/SerieB/Guarani.svg"
import ItuanoImg from "../imgs/SerieB/Ituano.svg"
import JuventudeImg from "../imgs/SerieB/Juventude.svg"
import LondrinaImg from "../imgs/SerieB/Londrina.svg"
import MirassolImg from "../imgs/SerieB/Mirassol.svg"
import NovorizontinoImg from "../imgs/SerieB/Novorizontino.svg"
import PontePretaImg from "../imgs/SerieB/Ponte Preta.svg"
import SampaioCorreaImg from "../imgs/SerieB/Sampaio Corrêa.svg"
import SportImg from "../imgs/SerieB/Sport.svg"
import TombenseImg from "../imgs/SerieB/Tombense.svg"
import VilaNovaImg from "../imgs/SerieB/Vila Nova.svg"
import VitoriaImg from "../imgs/SerieB/Vitória.png"
import LogoImg from "../imgs/SerieB/SerieBImg.png"

const equipeImagens = {
    ABC: ABCImg,
    AtléticoGO: AtleticoImg,
    Avaí: AvaiImg,
    BotafogoSP: BotafogoSPImg,
    Ceará: CearaImg,
    Chapecoense: ChapecoenseImg,
    CRB: CRBImg,
    Criciúma: CriciumaImg,
    Guarani: GuaraniImg,
    Ituano: ItuanoImg,
    Juventude: JuventudeImg,
    Londrina: LondrinaImg,
    Mirassol: MirassolImg,
    Novorizontino: NovorizontinoImg,
    PontePreta: PontePretaImg,
    SampaioCorrêa: SampaioCorreaImg,
    Sport: SportImg,
    Tombense: TombenseImg,
    VilaNova: VilaNovaImg,
    Vitória: VitoriaImg
}

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
    font-size: 1.3rem;
`

const Home = styled.div` 
    background-color: #f5f5f5;
`

const Score = styled.div`
    
    height: 1.75rem;
    font-family: 'Rubik,', sans-serif;
    padding: 1rem;
    border-top: 1px solid #0c0c0c;
    &.last-score {
    border-bottom: 1px solid #0c0c0c;
    }
        
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 32px;
    padding-bottom: 32px;
    margin-top: 10px;
    
    
`
const InfosContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 400px;
    
    
`

const Infos = styled.div`
    font-family: 'Rubik,', sans-serif;
    font-size: 15px;
    display: flex;
    justify-content: center;
`

const Container = styled.div`
    margin-top: 1em;
    height: 10px;
    display: grid;
    justify-content: center;
    width: 100%;
`
const Page = styled.div`
    display: flex;
    
`

const First = styled.div`
    width: 50%;
`

const IndividualScore = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 10px;
    
`
const TSpan = styled.span`
    text-align: center;
`

const Wrapper = styled.section`
    width: 100%;
    max-width: 700px;
    margin: 1cqh auto 100px auto;
    padding: 0;
    background: rgba(255,255,255,0.1);
    color: rgba(5, 5, 5, 0.9);
    overflow: hidden;
    position: relative;
    font-family: 'Nunito', sans-serif;
`
const Row = styled.main`
    padding: 3px;
    overflow:hidden;
    position:relative;
    border: 0.5px solid black;
    background-color: ${props => {
    if (props.rebaixamento) {
      return '#e03d3d73';
    } else if (props.serieA) {
      return '#83ff8960';
    } else {
      return 'inherit';
    }
  }};
`
const UL = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    
`

const EscudoLI = styled.li`
    text-align: center;
    margin: 0;
    font-size: 16px;
    font-weight: normal;
    list-style: none;
    display: inline-block;
    width: 7.5%;
    box-sizing: border-box;
`

const Position = styled.span`
    font-weight: bold;
    width: 2.5%;
    
`

const LI = styled.li`
    text-align: center;
    margin: 0;
    font-size: 18px;
    font-weight: normal;
    list-style: none;
    display: inline-block;
    width: 16.25%;
    box-sizing: border-box;
    /* border-right: 1px solid black;
    padding-right: 10px ;
    &:last-child {
    border-right: none;
  } */
`

const BoldLI = styled.li`
    text-align: center;
    margin: 0;
    font-size: 18px;
    font-weight: bold;
    list-style: none;
    display: inline-block;
    width: 16.25%;
    box-sizing: border-box;
    /* border-right: 1px solid black;
    padding-right: 10px ;
    &:last-child {
    border-right: none;
  } */
`
const TeamLI = styled.li`
    text-align: center;
    margin: 0;
    font-size: 18px;
    font-weight: bold;
    list-style: none;
    display: inline-block;
    width: 25%;
    box-sizing: border-box;
    /* border-right: 1px solid black;
    padding-right: 10px ;
    &:last-child {
    border-right: none;
  } */
`


const Subtitles = styled.div`
    display: flex;
    align-items: center;
`
const Square = styled.div`
    width: 1em; 
    height: 1em; 
    background-color: ${props =>{
        if (props.rebaixamento) {
            return '#e03d3d';
        } else if (props.serieA) {
            return '#83ff89';
        }else if(props.preLiberta){
            return '#24f7e6'
        } else if(props.sula){
            return '#e3fa13' 
        } else {
            return 'inherit';
        }
    }}; 
    border-radius: 100%;
    margin-right: 0.5em; 
    
`
    
const ISpan = styled.span`
    text-align: center;
    font-size: 15px;
    margin-left: 10px;
`


export default function Inicio() {

    const [results, defineResults] = useState([])
    const [teams, defineTeams] = useState([])
    const [points, definePoints] = useState([])

    useEffect(function() {
        
        setInterval(async function() {
            const games = await GetGames();
            const clTeams = await GetTeams();
            const clPoints = await GetPoints();

            defineResults(games)
            console.log(games)
            defineTeams(clTeams)
            console.log(clTeams)
            definePoints(clPoints)
            console.log(clPoints)
        }, 5000)
    }, [])
    return <Home>
        <Header>
            <StartNav><img src={LogoImg} alt="" width={90} height={90} style={{marginLeft: 25 + 'px'}}/></StartNav>
            <Nav>
                <Title style={{fontSize: 2 + 'rem'}}>BRASILEIRÃO SÉRIE B</Title>
            </Nav>
            <EndNav><Dropdown></Dropdown></EndNav>
        </Header>
        <Page>
            <First></First>
            
            <Wrapper>
                {/* <Title style={{marginBottom: 1 + "em"}}>BRASILEIRÃO SÉRIE B</Title> */}
                <Row>
                    <UL>
                        <Position></Position>
                        <EscudoLI></EscudoLI>
                        <TeamLI>TIME</TeamLI>
                        <BoldLI>PONTOS</BoldLI>
                        <BoldLI>JOGOS</BoldLI>
                        <BoldLI>VITÓRIAS</BoldLI>
                        <BoldLI>SALDO DE GOLS</BoldLI>
                    </UL>
                </Row>
                {(teams && teams.length > 0)&&
                  teams.map(function(time, index){
                    const equipeImagem = equipeImagens[time.time.replace(/-/g,"").replace(/\s/g, '')]    
                    const isRebaixamento = index + 1 >= 17 && index + 1 <= 20;
                    const isSerieA = index + 1 >= 1 && index + 1 <= 4;
                    

                        return <Row rebaixamento={isRebaixamento} serieA={isSerieA}> 
                            <UL>
                                <Position>{index+1}</Position>
                                <EscudoLI><Escudo src={equipeImagem}></Escudo></EscudoLI>
                                <TeamLI>{time.time}</TeamLI>
                                <LI>{ points[index].pontos }</LI>
                                <LI>{points[index].jogos}</LI>
                                <LI>{points[index].vitorias}</LI>
                                <LI>{points[index].sg}</LI>
                            </UL>
                        </Row>
                    })
                    
                }
                <Subtitles>
                    <Square serieA></Square>
                    <span style={{marginRight: 1 + "em"}}>Acesso à série A</span>
                    <Square rebaixamento></Square>
                    <span style={{marginRight: 1 + "em"}}>Rebaixamento à série C</span>
                </Subtitles>
            </Wrapper>

            <Container>
                <Title>JOGOS DA RODADA</Title>
                { (results && results.length > 0) &&
                    results.map(function(jogo, index) {
                        if(jogo){
                            if (jogo.mandante === "Novorizontino") {
                                jogo.mandante = "NOV"

                            }
                            if(jogo.mandante === "Atlético-GO"){
                                jogo.mandante = "ACG"
                            }
                            if(jogo.mandante === "Ceará"){
                                jogo.mandante = "CEA"
                            }
                            if(jogo.mandante === "Botafogo-SP"){
                                jogo.mandante = "BSP"
                            }
                            if(jogo.mandante === "Guarani"){
                                jogo.mandante = "GUA"
                            }
                            if(jogo.mandante === "Londrina"){
                                jogo.mandante = "LEC"
                            }
                            if(jogo.mandante === "ABC"){
                                jogo.mandante = "ABC"
                            }
                            if(jogo.mandante === "Criciúma"){
                                jogo.mandante = "CRI"
                            }
                            if(jogo.mandante === "Avaí"){
                                jogo.mandante = "AVA"
                            }
                            if(jogo.mandante === "Ponte Preta"){
                                jogo.mandante = "PON"
                            }
                            if(jogo.mandante === "Ituano"){
                                jogo.mandante = "ITU"
                            }
                            if(jogo.mandante === "Juventude"){
                                jogo.mandante = "JUV"
                            }
                            if(jogo.mandante === "Tombense"){
                                jogo.mandante = "TOM"
                            }
                            if(jogo.mandante === "Sampaio Corrêa"){
                                jogo.mandante = "SCO"
                            }
                            if(jogo.mandante === "Chapecoense"){
                                jogo.mandante = "CHA"
                            }
                            if(jogo.mandante === "CRB"){
                                jogo.mandante = "CRB"
                            }
                            if(jogo.mandante === "Sport"){
                                jogo.mandante = "SPT"
                            }
                            if(jogo.mandante === "Mirassol"){
                                jogo.mandante = "MIR"
                            }
                            if(jogo.mandante === "Vila Nova"){
                                jogo.mandante = "VNO"
                            }
                            if(jogo.mandante === "Vitória"){
                                jogo.mandante = "VIT"
                            }
                            if (jogo.visitante === "Novorizontino") {
                                jogo.visitante = "NOV"

                            }
                            if(jogo.visitante === "Atlético-GO"){
                                jogo.visitante = "ACG"
                            }
                            if(jogo.visitante === "Ceará"){
                                jogo.visitante = "CEA"
                            }
                            if(jogo.visitante === "Botafogo-SP"){
                                jogo.visitante = "BSP"
                            }
                            if(jogo.visitante === "Guarani"){
                                jogo.visitante = "GUA"
                            }
                            if(jogo.visitante === "Londrina"){
                                jogo.visitante = "LEC"
                            }
                            if(jogo.visitante === "ABC"){
                                jogo.visitante = "ABC"
                            }
                            if(jogo.visitante === "Criciúma"){
                                jogo.visitante = "CRI"
                            }
                            if(jogo.visitante === "Avaí"){
                                jogo.visitante = "AVA"
                            }
                            if(jogo.visitante === "Ponte Preta"){
                                jogo.visitante = "PON"
                            }
                            if(jogo.visitante === "Ituano"){
                                jogo.visitante = "ITU"
                            }
                            if(jogo.visitante === "Juventude"){
                                jogo.visitante = "JUV"
                            }
                            if(jogo.visitante === "Tombense"){
                                jogo.visitante = "TOM"
                            }
                            if(jogo.visitante === "Sampaio Corrêa"){
                                jogo.visitante = "SCO"
                            }
                            if(jogo.visitante === "Chapecoense"){
                                jogo.visitante = "CHA"
                            }
                            if(jogo.visitante === "CRB"){
                                jogo.visitante = "CRB"
                            }
                            if(jogo.visitante === "Sport"){
                                jogo.visitante = "SPT"
                            }
                            if(jogo.visitante === "Mirassol"){
                                jogo.visitante = "MIR"
                            }
                            if(jogo.visitante === "Vila Nova"){
                                jogo.visitante = "VNO"
                            }
                            if(jogo.visitante === "Vitória"){
                                jogo.visitante = "VIT"
                            }
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
                        </Score>
                    })
                }
            </Container>
        </Page>
    </Home>
}