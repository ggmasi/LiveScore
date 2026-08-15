import React from "react"
import { createRoot } from "react-dom/client"

import Routes from "./Routes"

const container = document.getElementById("root")
const origin = createRoot(container)

origin.render( <Routes/> )
