import axios from "axios";

export var games = []


async function GetGames(){

  

  try{

    const round = await axios.get("http://localhost:4000/Copa-Do-Brasil")

    games = round.data
    games = games.tabela
    
    return games;
    

  }
  catch(error){
    console.error(error)
  }

  return games;

}

export default GetGames