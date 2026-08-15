import React, { useState, useEffect } from "react"

import styled from "styled-components"

import GetPoints from "../scripts/SerieA/GetPointsSerieA";
import GetTeams from "../scripts/SerieA/GetTeamsSerieA";
import GetGames from "../scripts/SerieA/GetGamesSerieA";
import Escudo from "../components/Escudo";
import Dropdown from "../components/Dropdown";

import AmericaMGImg from "../imgs/SerieA/América-MG.svg"
import AthleticoImg from "../imgs/SerieA/Athletico-PR.svg"
import AtleticoMGImg from "../imgs/SerieA/Atlético-MG.svg"
import BahiaImg from "../imgs/SerieA/Bahia.svg"
import BotafogoImg from "../imgs/SerieA/Botafogo.svg"
import BragantinoImg from "../imgs/SerieA/Bragantino.svg"
import CorinthiansImg from "../imgs/SerieA/Corinthians.svg"
import CoritibaImg from "../imgs/SerieA/Coritiba.svg"
import CruzeiroImg from "../imgs/SerieA/Cruzeiro.svg"
import CuiabaImg from "../imgs/SerieA/Cuiabá.svg"
import FlamengoImg from "../imgs/SerieA/Flamengo.svg"
import FluminenseImg from "../imgs/SerieA/Fluminense.png"
import FortalezaImg from "../imgs/SerieA/Fortaleza.svg"
import GoiasImg from "../imgs/SerieA/Goiás.svg"
import GremioImg from "../imgs/SerieA/Grêmio.svg"
import InternacionalImg from "../imgs/SerieA/Internacional.png"
import PalmeirasImg from "../imgs/SerieA/Palmeiras.svg"
import SantosImg from "../imgs/SerieA/Santos.svg"
import SaoPauloImg from "../imgs/SerieA/São Paulo.svg"
import VascoImg from "../imgs/SerieA/Vasco.svg"
import LogoImg from "../imgs/SerieA/SerieAImg.png"

const equipeImagens = {
    AméricaMG: AmericaMGImg,
    AthleticoPR: AthleticoImg,
    AtléticoMG: AtleticoMGImg,
    Bahia: BahiaImg,
    Botafogo: BotafogoImg,
    Bragantino: BragantinoImg,
    Corinthians: CorinthiansImg,
    Coritiba: CoritibaImg,
    Cruzeiro: CruzeiroImg,
    Cuiabá: CuiabaImg,
    Flamengo: FlamengoImg,
    Fluminense: FluminenseImg,
    Fortaleza: FortalezaImg,
    Goiás: GoiasImg,
    Grêmio: GremioImg,
    Internacional: InternacionalImg,
    Palmeiras: PalmeirasImg,
    Santos: SantosImg,
    SãoPaulo: SaoPauloImg,
    Vasco: VascoImg
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
    margin: 20px auto 100px auto;
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
    return <Home>
        <Header>
            <StartNav><img src={LogoImg} alt="" width={90} height={90} style={{marginLeft: 25 + 'px'}}/></StartNav>
            <Nav>
                <Title style={{fontSize: 2 + 'rem'}}>BRASILEIRÃO</Title>
            </Nav>
            <EndNav><Dropdown></Dropdown></EndNav>
        </Header>
        <Page>
            <First></First>
            <Wrapper>
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
                {(teams && teams.length > 0)&&
                  teams.map(function(time, index){
                    const equipeImagem = equipeImagens[time.time.replace(/-/g,"").replace(/\s/g, '')]    
                    const isRebaixamento = index + 1 >= 17 && index + 1 <= 20;
                    const isLiberta = index + 1 >= 1 && index + 1 <= 4;
                    const isPreLiberta = index + 1 >= 5 && index + 1 <= 6;
                    const isSula = index + 1 >= 7 && index + 1 <= 12;

                        return <Row rebaixamento={isRebaixamento} liberta={isLiberta}  preLiberta={isPreLiberta} sula={isSula}> 
                            <UL>
                                <Position>{index+1}</Position>
                                <EscudoLI><Escudo src={equipeImagem}></Escudo></EscudoLI>
                                <BoldLI>{time.time}</BoldLI>
                                <LI>{ points[index].pontos }</LI>
                                <LI>{points[index].jogos}</LI>
                                <LI>{points[index].vitorias}</LI>
                                <LI>{points[index].sg}</LI>
                            </UL>
                        </Row>
                    })
                    
                }
                <Subtitles>
                    <Square liberta></Square>
                    <span style={{marginRight: 1 + "em"}}>Libertadores</span>
                    <Square preLiberta></Square>
                    <span style={{marginRight: 1 + "em"}}> Pré-Libertadores</span>
                    <Square sula></Square>
                    <span style={{marginRight: 1 + "em"}}> Sul-Americana</span>
                    <Square rebaixamento></Square>
                    <span style={{marginRight: 1 + "em"}}> Rebaixamento</span>
                </Subtitles>
            </Wrapper>

            <Container>
                <Title>JOGOS DA RODADA</Title>
                { (results && results.length > 0) &&
                    results.map(function(jogo, index) {
                        if(jogo){
                            if (jogo.mandante === "São Paulo") {
                                jogo.mandante = "SAO"

                            }
                            if(jogo.mandante === "Flamengo"){
                                jogo.mandante = "FLA"
                            }
                            if(jogo.mandante === "Bahia"){
                                jogo.mandante = "BAH"
                            }
                            if(jogo.mandante === "Internacional"){
                                jogo.mandante = "INT"
                            }
                            if(jogo.mandante === "Corinthians"){
                                jogo.mandante = "COR"
                            }
                            if(jogo.mandante === "Botafogo"){
                                jogo.mandante = "BOT"
                            }
                            if(jogo.mandante === "Atlético-MG"){
                                jogo.mandante = "CAM"
                            }
                            if(jogo.mandante === "Athletico-PR"){
                                jogo.mandante = "ATH"
                            }
                            if(jogo.mandante === "Cuiabá"){
                                jogo.mandante = "CUI"
                            }
                            if(jogo.mandante === "Goiás"){
                                jogo.mandante = "GOI"
                            }
                            if(jogo.mandante === "Fluminense"){
                                jogo.mandante = "FLU"
                            }
                            if(jogo.mandante === "Fortaleza"){
                                jogo.mandante = "FOR"
                            }
                            if(jogo.mandante === "Grêmio"){
                                jogo.mandante = "GRE"
                            }
                            if(jogo.mandante === "Cruzeiro"){
                                jogo.mandante = "CRU"
                            }
                            if(jogo.mandante === "Bragantino"){
                                jogo.mandante = "RBB"
                            }
                            if(jogo.mandante === "Vasco"){
                                jogo.mandante = "VAS"
                            }
                            if(jogo.mandante === "América-MG"){
                                jogo.mandante = "AMG"
                            }
                            if(jogo.mandante === "Palmeiras"){
                                jogo.mandante = "PAL"
                            }
                            if(jogo.mandante === "Santos"){
                                jogo.mandante = "SAN"
                            }
                            if(jogo.mandante === "Coritiba"){
                                jogo.mandante = "CFC"
                            }
                            if (jogo.visitante === "São Paulo") {
                                jogo.visitante = "SAO"

                            }
                            if(jogo.visitante === "Flamengo"){
                                jogo.visitante = "FLA"
                            }
                            if(jogo.visitante === "Bahia"){
                                jogo.visitante = "BAH"
                            }
                            if(jogo.visitante === "Internacional"){
                                jogo.visitante = "INT"
                            }
                            if(jogo.visitante === "Corinthians"){
                                jogo.visitante = "COR"
                            }
                            if(jogo.visitante === "Botafogo"){
                                jogo.visitante = "BOT"
                            }
                            if(jogo.visitante === "Atlético-MG"){
                                jogo.visitante = "CAM"
                            }
                            if(jogo.visitante === "Athletico-PR"){
                                jogo.visitante = "ATH"
                            }
                            if(jogo.visitante === "Cuiabá"){
                                jogo.visitante = "CUI"
                            }
                            if(jogo.visitante === "Goiás"){
                                jogo.visitante = "GOI"
                            }
                            if(jogo.visitante === "Fluminense"){
                                jogo.visitante = "FLU"
                            }
                            if(jogo.visitante === "Fortaleza"){
                                jogo.visitante = "FOR"
                            }
                            if(jogo.visitante === "Grêmio"){
                                jogo.visitante = "GRE"
                            }
                            if(jogo.visitante === "Cruzeiro"){
                                jogo.visitante = "CRU"
                            }
                            if(jogo.visitante === "Bragantino"){
                                jogo.visitante = "RBB"
                            }
                            if(jogo.visitante === "Vasco"){
                                jogo.visitante = "VAS"
                            }
                            if(jogo.visitante === "América-MG"){
                                jogo.visitante = "AMG"
                            }
                            if(jogo.visitante === "Palmeiras"){
                                jogo.visitante = "PAL"
                            }
                            if(jogo.visitante === "Santos"){
                                jogo.visitante = "SAN"
                            }
                            if(jogo.visitante === "Coritiba"){
                                jogo.visitante = "CFC"
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
