// import React from 'react'
import { useState } from "react"
import Exercises from "../Components/Exercises"
import HomeBanner from "../Components/HomeBanner"
import SearchExercises from "../Components/SearchExercises"

const Home = () => {
  const [Exercise , SetExercise] = useState([])
  const [bodyPart , setbodypart] = useState('all')
  return (
    <div>
      <HomeBanner/>
      <SearchExercises setBodypart={setbodypart}  SetExercise={SetExercise}  bodyPart={bodyPart} />
      <Exercises Exercise = {Exercise}  SetExercise={SetExercise}  bodyPart={bodyPart}  />
    </div>
  )
}

export default Home