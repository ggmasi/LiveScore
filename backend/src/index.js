import express from "express"
import cors from "cors"
import routes from "./routes.js"

const server = express()

server.use(express.json())
server.use(cors())

server.use(routes)

server.listen(4000, function(){
    console.log("SERVER ON!")
})