// import React from 'react'
import { useState , useEffect } from "react"
import { useParams } from "react-router-dom"
import {Fetchdata , Exercisesoptions, Youtubeoptions} from '../utils/Fetchdata'
import { Box } from "@mui/material"
import Details from "../Components/Details"
import ExerciseVideo from "../Components/ExerciseVideo"
import SimilarExercise from "../Components/SimilarExercise"
import Footer from "../Components/Footer"

const ExerciseDetails = () => {
  const [exerciseDetails, setexerciseDetails] = useState([])
  const [exerciseVideo, setexerciseVideo] = useState([])
  const [targetMuscle , SettargetMuscle] = useState([])
  const [equipment , Setequipment] = useState([])
  const {id} = useParams()

  useEffect(()=>{
    const fetchExercisesDetails = async()=>{
      const ExercisedbUrl = 'https://exercisedb.p.rapidapi.com'
     const YoutubeUrl = 'https://youtube-search-and-download.p.rapidapi.com'


      const Exericedata = await Fetchdata(`${ExercisedbUrl}/exercises/exercise/${id}` , Exercisesoptions)
 
      setexerciseDetails(Exericedata)


  const ExerciseVideoData =  await Fetchdata(`${YoutubeUrl}/search?query=${Exericedata.name} `, Youtubeoptions);
     setexerciseVideo(ExerciseVideoData.contents)


     const TargetMuscleData = await Fetchdata(`${ExercisedbUrl}/exercises/target/${Exericedata.target}` , Exercisesoptions)
     SettargetMuscle(TargetMuscleData)
  

   const EquipmentData = await Fetchdata(`${ExercisedbUrl}/exercises/equipment/${Exericedata.equipment}` , Exercisesoptions)
   Setequipment(EquipmentData)
   


    }

    fetchExercisesDetails()
  },[id])

  return (
    <Box>
      <Details exerciseDetails={exerciseDetails} />
      <ExerciseVideo exerciseVideo = {exerciseVideo} name = {exerciseDetails.name} />
      <SimilarExercise targetMuscle={targetMuscle} equipment={equipment} />
      <Footer/>
    </Box>
  )
}

export default ExerciseDetails