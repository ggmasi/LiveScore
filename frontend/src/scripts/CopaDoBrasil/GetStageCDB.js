import axios from "axios";

export var stage = []


async function GetStage(){

  

  try{

    const round = await axios.get("http://localhost:4000/Copa-Do-Brasil")

    stage = round.data
    stage = stage.fase
    
    return stage;
    

  }
  catch(error){
    console.error(error)
  }

  return stage;

}

export default GetStage