import axios from "axios";


export var teams = []

async function GetTeams(){

  

  try{

    const round = await axios.get("http://localhost:4000/copa-do-mundo-feminina")

    teams = round.data
    teams = teams.classificacao
    
    return teams;
    

  }
  catch(error){
    console.error(error)
  }

  return teams;

}

export default GetTeams