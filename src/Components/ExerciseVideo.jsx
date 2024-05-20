import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Loader from './Loader'

const ExerciseVideo = ({exerciseVideo , name }) => {


  if(!exerciseVideo.length) return <Loader/>
   
  return (
    <Box sx={{ width:'100vw' , marginTop: { lg: '203px', xs: '20px' } }} p="20px">
     <Typography sx={{ fontSize: { lg: '44px', xs: '25px' } }} fontWeight={700} color="#000" mb="33px">
        Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </Typography>
      <Stack sx={{flexDirection:{lg:'row'}, gap:{lg:'20px' , xs:'0px'} , justifyContent:'center' , alignItems:'center', flexWrap:'wrap'}}>
        {exerciseVideo?.slice(0,6).map((item,index)=>(
          <a
          key={index}
          className="exercise-video"
          href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
          target="_blank"
          rel="noreferrer"
        >
          <img style={{ borderTopLeftRadius: '20px' }} src={item.video.thumbnails[0].url} alt={item.video.title} />
          <Box>
            <Typography sx={{ fontSize: { lg: '28px', xs: '18px' } }} fontWeight={600} color="#000">
              {item.video.title}
            </Typography>
            <Typography fontSize="14px" color="#000">
              {item.video.channelName}
            </Typography>
          </Box>
        </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideo