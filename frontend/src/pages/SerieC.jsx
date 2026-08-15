import React, { useState, useEffect } from "react"

import styled from "styled-components"

import GetPoints from "../scripts/SerieC/GetPointsSerieC";
import GetTeams from "../scripts/SerieC/GetTeamsSerieC";
import GetGames from "../scripts/SerieC/GetGamesSerieC";
import Escudo from "../components/Escudo"
import Dropdown from "../components/Dropdown";

import AltosImg from "../imgs/SerieC/Altos.svg"
import AmazonasImg from "../imgs/SerieC/Amazonas.svg"
import AmericaRNImg from "../imgs/SerieC/América-RN.png"
import AparecidenseImg from "../imgs/SerieC/Aparecidense.svg"
import BotafogoPBImg from "../imgs/SerieC/Botafogo-PB.svg"
import BrusqueImg from "../imgs/SerieC/Brusque.svg"
import ConfiancaImg from "../imgs/SerieC/Confiança.svg"
import CSAImg from "../imgs/SerieC/CSA.svg"
import FigueirenseImg from "../imgs/SerieC/Figueirense.svg"
import FlorestaImg from "../imgs/SerieC/Floresta.svg"
import ManausImg from "../imgs/SerieC/Manaus.svg"
import NauticoImg from "../imgs/SerieC/Náutico.svg"
import OperarioPRImg from "../imgs/SerieC/Operário-PR.svg"
import PaysanduImg from "../imgs/SerieC/Paysandu.svg"
import PousoAlegreImg from "../imgs/SerieC/Pouso Alegre.svg"
import RemoImg from "../imgs/SerieC/Remo.svg"
import SaoBernardoImg from "../imgs/SerieC/São Bernardo.svg"
import SaoJoseRSImg from "../imgs/SerieC/São José-RS.svg"
import VoltaRedondaImg from "../imgs/SerieC/Volta Redonda.svg"
import YpirangaRSImg from "../imgs/SerieC/Ypiranga-RS.svg"
import LogoImg from "../imgs/SerieC/SerieCImg.png"

const equipeImagens = {
    Altos: AltosImg,
    Amazonas: AmazonasImg,
    AméricaRN: AmericaRNImg,
    Aparecidense: AparecidenseImg,
    BotafogoPB: BotafogoPBImg,
    Brusque: BrusqueImg,
    Confiança: ConfiancaImg,
    CSA: CSAImg,
    Figueirense: FigueirenseImg,
    Floresta: FlorestaImg,
    Manaus: ManausImg,
    Náutico: NauticoImg,
    OperárioPR: OperarioPRImg,
    Paysandu: PaysanduImg,
    PousoAlegre: PousoAlegreImg,
    Remo: RemoImg,
    SãoBernardo: SaoBernardoImg,
    SãoJoséRS: SaoJoseRSImg,
    VoltaRedonda: VoltaRedondaImg,
    YpirangaRS: YpirangaRSImg
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
    font-size: 1.5rem;
`

const Home = styled.div` 
    
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
            <StartNav><img src={LogoImg} alt="" height={90} style={{marginLeft: 25 + 'px'}}/></StartNav>
            <Nav>
                <Title style={{fontSize: 2 + 'rem'}}>BRASILEIRÃO SÉRIE C</Title>
            </Nav>
            <EndNav><Dropdown></Dropdown></EndNav>
        </Header>
        <Page>
            <First></First>
            
            <Wrapper>
                <Title style={{marginBottom: 1 + "em"}}>PRIMEIRA FASE</Title>
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
                    <span style={{marginRight: 1 + "em"}}>Acesso à série B</span>
                    <Square rebaixamento></Square>
                    <span style={{marginRight: 1 + "em"}}>Rebaixamento à série D</span>
                </Subtitles>
            </Wrapper>

            <Container>
                <Title style={{marginBottom: 1 + "em"}}>JOGOS DA RODADA</Title>
                { (results && results.length > 0) &&
                    results.map(function(jogo, index) {
                        if(jogo){
                            if (jogo.mandante === "Pouso Alegre") {
                                jogo.mandante = "PAF"

                            }
                            if(jogo.mandante === "Aparecidense"){
                                jogo.mandante = "APA"
                            }
                            if(jogo.mandante === "Confiança"){
                                jogo.mandante = "CON"
                            }
                            if(jogo.mandante === "Operário-PR"){
                                jogo.mandante = "OPE"
                            }
                            if(jogo.mandante === "Amazonas"){
                                jogo.mandante = "AMA"
                            }
                            if(jogo.mandante === "Ypiranga-RS"){
                                jogo.mandante = "YPI"
                            }
                            if(jogo.mandante === "São Bernardo"){
                                jogo.mandante = "SBD"
                            }
                            if(jogo.mandante === "América-RN"){
                                jogo.mandante = "ARN"
                            }
                            if(jogo.mandante === "Altos"){
                                jogo.mandante = "ALT"
                            }
                            if(jogo.mandante === "Botafogo-PB"){
                                jogo.mandante = "BOT"
                            }
                            if(jogo.mandante === "Manaus"){
                                jogo.mandante = "MAN"
                            }
                            if(jogo.mandante === "Brusque"){
                                jogo.mandante = "BRU"
                            }
                            if(jogo.mandante === "Paysandu"){
                                jogo.mandante = "PAY"
                            }
                            if(jogo.mandante === "CSA"){
                                jogo.mandante = "CSA"
                            }
                            if(jogo.mandante === "Náutico"){
                                jogo.mandante = "NAU"
                            }
                            if(jogo.mandante === "Remo"){
                                jogo.mandante = "REM"
                            }
                            if(jogo.mandante === "São José-RS"){
                                jogo.mandante = "SJO"
                            }
                            if(jogo.mandante === "Volta Redonda"){
                                jogo.mandante = "VRE"
                            }
                            if(jogo.mandante === "Floresta"){
                                jogo.mandante = "FLO"
                            }
                            if(jogo.mandante === "Figueirense"){
                                jogo.mandante = "FIG"
                            }
                            if (jogo.visitante === "Pouso Alegre") {
                                jogo.visitante = "PAF"

                            }
                            if(jogo.visitante === "Aparecidense"){
                                jogo.visitante = "APA"
                            }
                            if(jogo.visitante === "Confiança"){
                                jogo.visitante = "CON"
                            }
                            if(jogo.visitante === "Operário-PR"){
                                jogo.visitante = "OPE"
                            }
                            if(jogo.visitante === "Amazonas"){
                                jogo.visitante = "AMA"
                            }
                            if(jogo.visitante === "Ypiranga-RS"){
                                jogo.visitante = "YPI"
                            }
                            if(jogo.visitante === "São Bernardo"){
                                jogo.visitante = "SBD"
                            }
                            if(jogo.visitante === "América-RN"){
                                jogo.visitante = "ARN"
                            }
                            if(jogo.visitante === "Altos"){
                                jogo.visitante = "ALT"
                            }
                            if(jogo.visitante === "Botafogo-PB"){
                                jogo.visitante = "BOT"
                            }
                            if(jogo.visitante === "Manaus"){
                                jogo.visitante = "MAN"
                            }
                            if(jogo.visitante === "Brusque"){
                                jogo.visitante = "BRU"
                            }
                            if(jogo.visitante === "Paysandu"){
                                jogo.visitante = "PAY"
                            }
                            if(jogo.visitante === "CSA"){
                                jogo.visitante = "CSA"
                            }
                            if(jogo.visitante === "Náutico"){
                                jogo.visitante = "NAU"
                            }
                            if(jogo.visitante === "Remo"){
                                jogo.visitante = "REM"
                            }
                            if(jogo.visitante === "São José-RS"){
                                jogo.visitante = "SJO"
                            }
                            if(jogo.visitante === "Volta Redonda"){
                                jogo.visitante = "VRE"
                            }
                            if(jogo.visitante === "Floresta"){
                                jogo.visitante = "FLO"
                            }
                            if(jogo.visitante === "Figueirense"){
                                jogo.visitante = "FIG"
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