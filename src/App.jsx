// import React from 'react'
import { Route ,Routes } from "react-router-dom" 
import { Box } from "@mui/material"
import Navbar from "./Components/Navbar"
import Home from './Pages/Home'
import ExerciseDetails from "./Pages/ExerciseDetails"
const App = () => {
  return (
    <Box width={'400px'}>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Exercise/:id" element={<ExerciseDetails/>} />

     </Routes>
    </Box>
  )
}

export default App