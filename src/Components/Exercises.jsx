/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"
import { Pagination } from "@mui/material";
import {Box , Stack , Typography} from '@mui/material'

import {Exercisesoptions , Fetchdata} from '../utils/Fetchdata'
import ExerciseCard from "./ExerciseCard";


const Exercises = ({Exercise , bodyPart , SetExercise}) => {

  const[currentPage, setcurrentPage] = useState(1)

  const indexofLastExerxcise = currentPage * 9; 
   const indexofFirstExercise = indexofLastExerxcise - 9;
   const CurrentExercise = Exercise.slice(indexofFirstExercise ,indexofLastExerxcise)

  const paginate = (e, value)=>{
   setcurrentPage ( value)

   window.scrollTo({ top: 1800, behavior: 'smooth' });
  }

  useEffect(()=>{
    const FetchExerciseData = async()=>{
   let ExerciseData = [];

     if(bodyPart === 'all'){
      ExerciseData = await Fetchdata('https://exercisedb.p.rapidapi.com/exercises?limit=500', Exercisesoptions)
     }
     else{
      ExerciseData = await Fetchdata(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=100`, Exercisesoptions)
     }

     SetExercise(ExerciseData)
    }


    FetchExerciseData()
  },[bodyPart])

  return (
    <Box
    id='exercises'
    mt={'330px'}
    p='20px'
    >
      <Typography sx={{ml: {lg:'110px'}}} width={'100%'} variant="h3" textAlign={'center'} mb='46px'  >
        Showing Result
      </Typography>

      <Stack width={'100vw'}  sx={{gap:{lg:'107px' , xs:'50px'}  , flexDirection:'row' , flexWrap:'wrap'  ,justifyContent:'center'}} >
  {CurrentExercise.map((item , index)=>(
     <ExerciseCard key={index} exercise={item} />
  ))}
      </Stack>

      <Stack width={'100vw'} sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems={'center'}>
        {Exercise.length > 9 && (

          <Pagination
           defaultPage={1}
           color="standard"
           shape="rounded"
           count = {Math.ceil(Exercise.length / 9)}
           size="large"
           page={currentPage}
           onChange={paginate}
          />
        ) }
      </Stack>
    </Box>
  )
}

export default Exercises