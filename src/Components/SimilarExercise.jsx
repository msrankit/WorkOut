import { Box , Typography , Stack } from '@mui/material'
import React from 'react'
import HorizontalScroll from './HorizontalScrollBar'
import Loader from './Loader'

const SimilarExercise = ({targetMuscle , equipment}) => {
  return (
   <Box sx={{width:'100vw', mt:'50px'}}>
      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
    </Typography>
    <Stack sx={{p:'2px' , position:'relative'}}>
      {targetMuscle.length !==0 ? <HorizontalScroll data={targetMuscle} /> : <Loader/>}
    </Stack>
    <Box sx={{mt:'100px'}}>
    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
    </Typography>
    <Stack sx={{p:'2px' , position:'relative'}}>
      {equipment.length !==0 ? <HorizontalScroll data={equipment}  /> : <Loader/>}
    </Stack>
    </Box>
   </Box>
  )
}

export default SimilarExercise