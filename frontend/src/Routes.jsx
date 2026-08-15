import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import SerieB from "./pages/SerieB"
import CDB from "./pages/CDB"
import SerieC from "./pages/SerieC"
import CopaFeminina from "./pages/CopaFeminina"

export default function Rotas() {
    return <BrowserRouter>
        <Routes>
            <Route index path="/" element={ <Home/> }/>
            <Route index path="/serie-b" element={ <SerieB/> }/>
            <Route index path="/serie-c" element={ <SerieC/> }/>
            <Route index path="/copa-do-brasil" element={ <CDB/> }/>
            <Route index path="/copa-do-mundo-feminina" element={<CopaFeminina/>}/>
        </Routes>
    </BrowserRouter>
}