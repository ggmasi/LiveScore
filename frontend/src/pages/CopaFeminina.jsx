import React, { useState, useEffect } from "react"

import styled from "styled-components"

import GetPoints from "../scripts/CopaDoMundoFeminina/GetPointsCopaFeminina";
import GetTeams from "../scripts/CopaDoMundoFeminina/GetTeamsCopaFeminina";
import GetGames from "../scripts/CopaDoMundoFeminina/GetGamesCopaFeminina";
import Escudo from "../components/Escudo"
import Dropdown from "../components/Dropdown";

import AfricaDoSulImg from "../imgs/CopaDoMundoFeminina/África do Sul.svg"
import AlemanhaImg from "../imgs/CopaDoMundoFeminina/Alemanha.svg"
import ArgentinaImg from "../imgs/CopaDoMundoFeminina/Argentina.svg"
import AustraliaImg from "../imgs/CopaDoMundoFeminina/Austrália.svg"
import BrasilImg from "../imgs/CopaDoMundoFeminina/Brasil.svg"
import CanadaImg from "../imgs/CopaDoMundoFeminina/Canadá.svg"
import ChinaImg from "../imgs/CopaDoMundoFeminina/China.svg"
import ColombiaImg from "../imgs/CopaDoMundoFeminina/Colômbia.svg"
import CoreiaDoSulImg from "../imgs/CopaDoMundoFeminina/Coreia Do Sul.svg"
import CostaRicaImg from "../imgs/CopaDoMundoFeminina/Costa Rica.svg"
import DinamarcaImg from "../imgs/CopaDoMundoFeminina/Dinamarca.svg"
import EspanhaImg from "../imgs/CopaDoMundoFeminina/Espanha.svg"
import EUAImg from "../imgs/CopaDoMundoFeminina/Estados Unidos.svg"
import FilipinasImg from "../imgs/CopaDoMundoFeminina/Filipinas.svg"
import FrancaImg from "../imgs/CopaDoMundoFeminina/França.svg"
import HaitiImg from "../imgs/CopaDoMundoFeminina/Haiti.svg"
import HolandaImg from "../imgs/CopaDoMundoFeminina/Holanda.svg"
import InglaterraImg from "../imgs/CopaDoMundoFeminina/Inglaterra.svg"
import IrlandaImg from "../imgs/CopaDoMundoFeminina/Irlanda.svg"
import ItaliaImg from "../imgs/CopaDoMundoFeminina/Itália.svg"
import JamaicaImg from "../imgs/CopaDoMundoFeminina/Jamaica.svg"
import JapaoImg from "../imgs/CopaDoMundoFeminina/Japão.svg"
import MarrocosImg from "../imgs/CopaDoMundoFeminina/Marrocos.svg"
import NigeriaImg from "../imgs/CopaDoMundoFeminina/Nigéria.svg"
import NoruegaImg from "../imgs/CopaDoMundoFeminina/Noruega.svg"
import NovaZelandiaImg from "../imgs/CopaDoMundoFeminina/Nova Zelândia.svg"
import PanamaImg from "../imgs/CopaDoMundoFeminina/Panamá.svg"
import PortugalImg from "../imgs/CopaDoMundoFeminina/Portugal.svg"
import SueciaImg from "../imgs/CopaDoMundoFeminina/Suécia.svg"
import SuicaImg from "../imgs/CopaDoMundoFeminina/Suiça.svg"
import VietnaImg from "../imgs/CopaDoMundoFeminina/Vietnã.svg"
import ZambiaImg from "../imgs/CopaDoMundoFeminina/Zâmbia.png"
import LogoImg from "../imgs/CopaDoMundoFeminina/CopaDoMundoFemininaImg.png"

const equipeImagens = {
    ÁfricadoSul: AfricaDoSulImg,
    Alemanha: AlemanhaImg,
    Argentina: ArgentinaImg,
    Austrália: AustraliaImg,
    Brasil: BrasilImg,
    Canadá: CanadaImg,
    China: ChinaImg,
    Colômbia: ColombiaImg,
    CoreiadoSul: CoreiaDoSulImg,
    CostaRica: CostaRicaImg,
    Dinamarca: DinamarcaImg,
    Espanha: EspanhaImg,
    EstadosUnidos: EUAImg,
    Filipinas: FilipinasImg,
    França: FrancaImg,
    Haiti: HaitiImg,
    Holanda: HolandaImg,
    Inglaterra: InglaterraImg,
    Irlanda: IrlandaImg,
    Itália: ItaliaImg,
    Jamaica: JamaicaImg,
    Japão: JapaoImg,
    Marrocos: MarrocosImg,
    Nigéria: NigeriaImg,
    Noruega: NoruegaImg,
    NovaZelândia: NovaZelandiaImg,
    Panamá: PanamaImg,
    Portugal: PortugalImg,
    Suécia: SueciaImg,
    Suíça: SuicaImg,
    Vietnã: VietnaImg,
    Zâmbia: ZambiaImg
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
    
    height: 2.5rem;
    font-family: 'Rubik,', sans-serif;
    padding: 1rem;
    border-top: 1px solid #0c0c0c;
    &.last-score {
    border-bottom: 1px solid #0c0c0c;
    }
    &.score-item{ 
        margin-bottom: 95px;
        border-bottom: 1px solid black;
    }
    display: flex;
    justify-content: space-between;
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
    width: 400px;
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

const First = styled.div`
    width: 50%;
`

const IndividualScore = styled.div`
    width: 400px;
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

const Wrapper = styled.section`
    width: 100%;
    max-width: 700px;
    margin: 5px auto 10px auto;
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
    } else if (props.liberta) {
      return '#83ff8960';
    }else if(props.preLiberta){
        return '#24f7e683'
    } else if(props.sula){
      return '#f3ef0958' 
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
    
    margin: 0;
    font-size: 16px;
    font-weight: normal;
    list-style: none;
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
    width: 18%;
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
    width: 18%;
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
        } else if (props.liberta) {
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
    let globalIndex = 0;

    function createRowsFromIndex(startIndex) {
        let lastIndex = Math.min(startIndex + 4, teams.length);
        const rows = [];
    
        while (startIndex < lastIndex) {
        const time = teams[startIndex];
        const point = points[startIndex];
        const equipeImagem = equipeImagens[time.time.replace(/-/g,"").replace(/\s/g, '')] 
        const isLiberta = startIndex % 4  + 1 >= 1 && startIndex % 4 + 1 <= 2;
        
        rows.push(
            
            <Row key={startIndex} liberta={isLiberta}>
            <UL>
                <Position>{startIndex % 4 + 1}</Position>
                <EscudoLI><Escudo src={equipeImagem}></Escudo></EscudoLI>
                <BoldLI>{time.time}</BoldLI>
                <LI>{point.pontos}</LI>
                <LI>{point.jogos}</LI>
                <LI>{point.vitorias}</LI>
                <LI>{point.sg}</LI>
            </UL>
            </Row>
            
        );
    
        startIndex++;
        }
    
        // Atualize o índice global após criar as linhas
        globalIndex = lastIndex;
        return rows;
    }
    return <Home>
        <Header>
            <StartNav><img src={LogoImg} alt="" width={160} height={90}/></StartNav>
            <Nav>
                <Title style={{fontSize: 2 + 'rem'}}>COPA DO MUNDO FEMININA</Title>
            </Nav>
            <EndNav><Dropdown></Dropdown></EndNav>
        </Header>
        <Page>
            <First></First>
            <Wrapper>
                {teams && teams.length > 0 &&
                    teams.map(function(time, index){
                        if (index % 4 === 0) {
                            const isLastElement = (index + 4) >= teams.length
                            const alphabet = "ABCDEFGH"
                            const groupText = "Grupo " + alphabet[Math.floor(index / 4)]
                            return (
                                <Wrapper key={index} style={{marginBottom: 30 + "px"}}>
                                    <Title style={{fontWeight: "bold", marginBottom: 10 + "px"}}>{groupText}</Title>
                                    <Row>
                                        <UL>
                                            <Position></Position>
                                            <EscudoLI></EscudoLI>
                                            <BoldLI>TIME</BoldLI>
                                            <BoldLI>PONTOS</BoldLI>
                                            <BoldLI>JOGOS</BoldLI>
                                            <BoldLI>VITÓRIAS</BoldLI>
                                            <BoldLI>SALDO DE GOLS</BoldLI>
                                        </UL>
                                    </Row>
                                    {createRowsFromIndex(globalIndex)}
                                    {isLastElement &&(
                                        <Subtitles>
                                        <Square liberta></Square>
                                        <span style={{marginRight: 1 + "em"}}>Classificados</span>
                                    </Subtitles>
                                    )}
                                    
                                </Wrapper>
                            
                        )}
                        
                    })
                }
            </Wrapper>

            <Container>
                <Title style={{marginBottom: 30 + 'px'}}>JOGOS DA RODADA</Title>
                { (results && results.length > 0) &&
                    results.map(function(jogo, index) {
                        if(jogo){
                            if (jogo.mandante === "Nova Zelândia") {
                                jogo.mandante = "NZL"
                            }
                            if(jogo.mandante === "Noruega"){
                                jogo.mandante = "NOR"
                            }
                            if(jogo.mandante === "Filipinas"){
                                jogo.mandante = "FIL"
                            }
                            if(jogo.mandante === "Canadá"){
                                jogo.mandante = "CAN"
                            }
                            if(jogo.mandante === "Irlanda"){
                                jogo.mandante = "IRL"
                            }
                            if(jogo.mandante === "Austrália"){
                                jogo.mandante = "AUS"
                            }
                            if(jogo.mandante === "Nigéria"){
                                jogo.mandante = "NIG"
                            }
                            if(jogo.mandante === "Espanha"){
                                jogo.mandante = "ESP"
                            }
                            if(jogo.mandante === "Costa Rica"){
                                jogo.mandante = "CRC"
                            }
                            if(jogo.mandante === "Zâmbia"){
                                jogo.mandante = "ZAM"
                            }
                            if(jogo.mandante === "Japão"){
                                jogo.mandante = "JAP"
                            }
                            if(jogo.mandante === "Inglaterra"){
                                jogo.mandante = "ING"
                            }
                            if(jogo.mandante === "Haiti"){
                                jogo.mandante = "HAI"
                            }
                            if(jogo.mandante === "Dinamarca"){
                                jogo.mandante = "DIN"
                            }
                            if(jogo.mandante === "China"){
                                jogo.mandante = "CHN"
                            }
                            if(jogo.mandante === "Estados Unidos"){
                                jogo.mandante = "EUA"
                            }
                            if(jogo.mandante === "Vietnã"){
                                jogo.mandante = "VIE"
                            } 
                            if(jogo.mandante === "Suíça"){
                                jogo.mandante = "SUI"
                            }
                            if(jogo.mandante === "Holanda"){
                                jogo.mandante = "HOL"
                            }
                            if(jogo.mandante === "Portugal"){
                                jogo.mandante = "POR"
                            }
                            if(jogo.mandante === "França"){
                                jogo.mandante = "FRA"
                            }
                            if(jogo.mandante === "Jamaica"){
                                jogo.mandante = "JAM"
                            }
                            if(jogo.mandante === "Brasil"){
                                jogo.mandante = "BRA"
                            }
                            if(jogo.mandante === "Panamá"){
                                jogo.mandante = "PAN"
                            }
                            if(jogo.mandante === "Suécia"){
                                jogo.mandante = "SUE"
                            }
                            if(jogo.mandante === "África do Sul"){
                                jogo.mandante = "AFS"
                            }
                            if(jogo.mandante === "Itália"){
                                jogo.mandante = "ITA"
                            }
                            if(jogo.mandante === "Argentina"){
                                jogo.mandante = "ARG"
                            }
                            if(jogo.mandante === "Alemanha"){
                                jogo.mandante = "ALE"
                            }
                            if(jogo.mandante === "Marrocos"){
                                jogo.mandante = "MAR"
                            }
                            if(jogo.mandante === "Colômbia"){
                                jogo.mandante = "COL"
                            }
                            if(jogo.mandante === "Coreia do Sul"){
                                jogo.mandante = "COR"
                            }
                            if(jogo.visitante === "Suíça"){
                                jogo.visitante = "SUI"
                            }
                            if (jogo.visitante === "Nova Zelândia") {
                                jogo.visitante = "NZL"
                            }
                            if(jogo.visitante === "Noruega"){
                                jogo.visitante = "NOR"
                            }
                            if(jogo.visitante === "Filipinas"){
                                jogo.visitante = "FIL"
                            }
                            if(jogo.visitante === "Canadá"){
                                jogo.visitante = "CAN"
                            }
                            if(jogo.visitante === "Irlanda"){
                                jogo.visitante = "IRL"
                            }
                            if(jogo.visitante === "Austrália"){
                                jogo.visitante = "AUS"
                            }
                            if(jogo.visitante === "Nigéria"){
                                jogo.visitante = "NIG"
                            }
                            if(jogo.visitante === "Espanha"){
                                jogo.visitante = "ESP"
                            }
                            if(jogo.visitante === "Costa Rica"){
                                jogo.visitante = "CRC"
                            }
                            if(jogo.visitante === "Zâmbia"){
                                jogo.visitante = "ZAM"
                            }
                            if(jogo.visitante === "Japão"){
                                jogo.visitante = "JAP"
                            }
                            if(jogo.visitante === "Inglaterra"){
                                jogo.visitante = "ING"
                            }
                            if(jogo.visitante === "Haiti"){
                                jogo.visitante = "HAI"
                            }
                            if(jogo.visitante === "Dinamarca"){
                                jogo.visitante = "DIN"
                            }
                            if(jogo.visitante === "China"){
                                jogo.visitante = "CHN"
                            }
                            if(jogo.visitante === "Estados Unidos"){
                                jogo.visitante = "EUA"
                            }
                            if(jogo.visitante === "Vietnã"){
                                jogo.visitante = "VIE"
                            }
                            if(jogo.visitante === "Holanda"){
                                jogo.visitante = "HOL"
                            }
                            if(jogo.visitante === "Portugal"){
                                jogo.visitante = "POR"
                            }
                            if(jogo.visitante === "França"){
                                jogo.visitante = "FRA"
                            }
                            if(jogo.visitante === "Jamaica"){
                                jogo.visitante = "JAM"
                            }
                            if(jogo.visitante === "Brasil"){
                                jogo.visitante = "BRA"
                            }
                            if(jogo.visitante === "Panamá"){
                                jogo.visitante = "PAN"
                            }
                            if(jogo.visitante === "Suécia"){
                                jogo.visitante = "SUE"
                            }
                            if(jogo.visitante === "África do Sul"){
                                jogo.visitante = "AFS"
                            }
                            if(jogo.visitante === "Itália"){
                                jogo.visitante = "ITA"
                            }
                            if(jogo.visitante === "Argentina"){
                                jogo.visitante = "ARG"
                            }
                            if(jogo.visitante === "Alemanha"){
                                jogo.visitante = "ALE"
                            }
                            if(jogo.visitante === "Marrocos"){
                                jogo.visitante = "MAR"
                            }
                            if(jogo.visitante === "Colômbia"){
                                jogo.visitante = "COL"
                            }
                            if(jogo.visitante === "Coreia do Sul"){
                                jogo.visitante = "COR"
                            }
                        }
                        const addBorderBottom = index % 2 !== 0;
                                            
                        return <Score key={index} className={index === results.length - 1 ? 'last-score' : ''+ (index % 2 - 1 == 0 ? 'score-item' : '')}>
                            
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
                                    {addBorderBottom && <div style={{ borderBottom: "1px solid black" }} />}
                                </IndividualScore>
                                
                            </InfosContainer>
                        </Score>
                    })
                }
            </Container>
        </Page>
    </Home>
}
