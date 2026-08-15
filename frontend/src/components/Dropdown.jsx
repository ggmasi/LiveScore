import React from 'react';
import styled from 'styled-components';

import SerieAImg from "../imgs/SerieA/SerieAImg.png"
import SerieBImg from "../imgs/SerieB/SerieBImg.png"
import SerieCImg from "../imgs/SerieC/SerieCImg.png"
import CDBImg from "../imgs/CDBImg.png"
import CopaFemininaImg from "../imgs/CopaDoMundoFeminina/CopaDoMundoFemininaImg.png"

// Componente estilizado para o botão dropdown
const DropdownButton = styled.button`
  background-color: ${props => (props.showContent ? '#c1cac1' : '#11a793')};
  color: black;
  font-family: 'Rubik,', sans-serif;
  padding: 20px;
  font-size: 20px;
  border: none;
  cursor: pointer;
  width: 200px;
  
`;

// Componente estilizado para o container do dropdown
const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

// Componente estilizado para o conteúdo do dropdown
const DropdownContent = styled.div`
  display: ${props => (props.showContent ? 'block' : 'none')};
  text-align: center;
  position: absolute;
  font-family: 'Rubik,', sans-serif;
  background-color: #f9f9f9;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

// Componente estilizado para os links dentro do dropdown
const DropdownLink = styled.a`
    color: black;
    padding: 12px 16px;
    font-family: 'Rubik,', sans-serif;
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    
    &:hover {
        background-color: #f1f1f1;
    }
`;

const Dropdown = (props) => {
  const [showContent, setShowContent] = React.useState(false);

  const toggleDropdown = () => {
    setShowContent(!showContent);
  };

  return (
    <DropdownContainer onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
      {/* Botão Dropdown */}
      <DropdownButton showContent={showContent}>Campeonatos</DropdownButton>

      {/* Conteúdo do Dropdown */}
      <DropdownContent showContent={showContent}>
        <DropdownLink href="http://localhost:3000/">
            <img src={SerieAImg} alt="" width={20} height={20}/>
            <span>Brasileirão Série A</span>
        </DropdownLink>
        <DropdownLink href="http://localhost:3000/serie-b">
            <img src={SerieBImg} alt="" width={20} height={20}/>
            <span>Brasileirão Série B</span>
        </DropdownLink>
        <DropdownLink href="http://localhost:3000/serie-c">
            <img src={SerieCImg} alt="" width={20} height={20}/>
            <span>Brasileirão Série C</span>  
        </DropdownLink>
        <DropdownLink href="http://localhost:3000/copa-do-brasil">
            <img src={CDBImg} alt="" width={20} height={20}/>
            <span>Copa do Brasil ⠀</span>  
        </DropdownLink>
        <DropdownLink href="http://localhost:3000/copa-do-mundo-feminina">
        <img src={CopaFemininaImg} alt="" width={20} height={15}/>
            <span>Copa do Mundo Feminina</span>   
        </DropdownLink>
      </DropdownContent>
    </DropdownContainer>
  );
};

export default Dropdown;