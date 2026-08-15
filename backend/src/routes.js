import express from "express"
import TesteA from "./SerieA/GetGamesSerieA.js"
import { resultA } from "./SerieA/GetGamesSerieA.js"
import TableTesteA from "./SerieA/GetTableSerieA.js"
import {tableResultA} from "./SerieA/GetTableSerieA.js"
import PointsTesteA from "./SerieA/GetPointsSerieA.js"
import { pointsResultA } from "./SerieA/GetPointsSerieA.js"
import TesteB from "./SerieB/GetGamesSerieB.js"
import { resultB } from "./SerieB/GetGamesSerieB.js"
import TableTesteB from "./SerieB/GetTableSerieB.js"
import {tableResultB} from "./SerieB/GetTableSerieB.js"
import PointsTesteB from "./SerieB/GetPointsSerieB.js"
import { pointsResultB } from "./SerieB/GetPointsSerieB.js"
import TesteCDB from "./CopaDoBrasil/GetGamesCDB.js"
import { resultCDB } from "./CopaDoBrasil/GetGamesCDB.js"
import StageTesteCDB from "./CopaDoBrasil/GetStageCDB.js"
import { stageResultCDB } from "./CopaDoBrasil/GetStageCDB.js"
import TesteC from "./SerieC/GetGamesSerieC.js"
import { resultC } from "./SerieC/GetGamesSerieC.js"
import TableTesteC from "./SerieC/GetTableSerieC.js"
import { tableResultC } from "./SerieC/GetTableSerieC.js"
import PointsTesteC from "./SerieC/GetPointsSerieC.js"
import { pointsResultC } from "./SerieC/GetPointsSerieC.js"
import TesteCopaFeminina from "./CopaDoMundoFeminina/GetGamesCopaFeminina.js"
import { resultCopaFeminina } from "./CopaDoMundoFeminina/GetGamesCopaFeminina.js"
import PointsTesteCopaFeminina from "./CopaDoMundoFeminina/GetPointsCopaFeminina.js"
import { pointsResultCopaFeminina } from "./CopaDoMundoFeminina/GetPointsCopaFeminina.js"
import TableTesteCopaFeminina from "./CopaDoMundoFeminina/GetTableCopaFeminina.js"
import { tableResultCopaFeminina } from "./CopaDoMundoFeminina/GetTableCopaFeminina.js"

const routes = express.Router()
var canTestA = true
var canTestB = true
var canTestC = true

var canTestCopaFeminina = true
var canTestCDB = true

setInterval(async function(){
    canTestA = true
    canTestB = true
    canTestC = true
    canTestCDB = true
    canTestCopaFeminina = true
    
}, 30000)

routes.get("/", async function(req, res){
    if(canTestA === true){
        TesteA()
        TableTesteA()
        PointsTesteA()

        canTestA = false
    }
    if(resultA){
        if(resultA.length > 0){
            res.json({
                tabela: resultA,
                classificacao: tableResultA, 
                pontos: pointsResultA,
            })
            
    
        }} else{res.json("error"); console.log("error")}
    
})

routes.get("/Serie-B", async function(req, res){
    if(canTestB === true){
        TesteB()
        TableTesteB()
        PointsTesteB()
        canTestB = false
    }
    if(resultB){
        if(resultB.length > 0){
            res.json({
                tabela: resultB,
                classificacao: tableResultB, 
                pontos: pointsResultB,
            })
            
    
        }} else{res.json("error"); console.log("error")}
    
})

routes.get("/Serie-C", async function(req, res){
    if(canTestC === true){
        TesteC()
        TableTesteC()
        PointsTesteC()
        canTestC = false
    }
    if(resultC){
        if(resultC.length > 0){
            res.json({
                tabela: resultC,
                classificacao: tableResultC, 
                pontos: pointsResultC,
            })
            
    
        }} else{res.json("error"); console.log("error")}
    
})




routes.get("/copa-do-mundo-feminina", async function(req, res){
    
    if(canTestCopaFeminina === true){
        TesteCopaFeminina()
        TableTesteCopaFeminina()
        PointsTesteCopaFeminina()
        canTestCopaFeminina = false
    }
    if(resultCopaFeminina){
        if(resultCopaFeminina.length > 0){
            res.json({
                tabela: resultCopaFeminina,
                classificacao: tableResultCopaFeminina, 
                pontos: pointsResultCopaFeminina
            })
            
    
        }} else{res.json("error"); console.log("error")}
    
})



routes.get("/Copa-Do-Brasil", async function(req, res){
    if(canTestCDB === true){
        TesteCDB()
        StageTesteCDB()
        canTestCDB = false
    }
    if(resultCDB){
        if(resultCDB.length > 0){
            res.json({
                tabela: resultCDB,
                fase: stageResultCDB
            })
            
    
        }} else{res.json("error"); console.log("error")}
    
})



export default routes