import axios from "axios";


export var points = []

async function GetPoints(){

  

  try{

    const round = await axios.get("http://localhost:4000/copa-do-mundo-feminina")

    points = round.data
    points = points.pontos
    
    return points;
    

  }
  catch(error){
    console.error(error)
  }

  return points;

}

export default GetPoints