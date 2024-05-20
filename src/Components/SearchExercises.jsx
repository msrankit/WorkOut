/* eslint-disable react/prop-types */
import { useState , useEffect } from "react"
import { Box , Typography , Stack , Button , TextField } from "@mui/material"
import { Fetchdata , Exercisesoptions } from "../utils/Fetchdata"
import HorizontalScrollBar from "./HorizontalScrollBar"

const SearchExercises = ({bodyPart , setBodypart , SetExercise}) => {
  const[search,setsearch] = useState('')
  const [BodyParts , setbodyparts] = useState([])
  


  useEffect(()=>{
    const FetchExerciseData = async()=>{

    const Bodypart = await Fetchdata('https://exercisedb.p.rapidapi.com/exercises/bodyPartList' , Exercisesoptions)


    setbodyparts(['all', ...Bodypart])
  };

  FetchExerciseData()

  },[])

 const Handleclick = async()=>{
  if (search) {
    const exercisesData = await Fetchdata('https://exercisedb.p.rapidapi.com/exercises?limit=1000', Exercisesoptions);
    // console.log(exercisesData)


    const searchedExercises = exercisesData.filter(
      (item) => item.name.toLowerCase().includes(search)
             || item.target.toLowerCase().includes(search)
             || item.equipment.toLowerCase().includes(search)
             || item.bodyPart.toLowerCase().includes(search),
    );

    window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

    // console.log(searchedExercises)
    setsearch('')
    SetExercise(searchedExercises)
  }
 }

  return (
    <Stack alignItems={'center'} mt='20px' justifyContent={'center'} px={'20px'} width={'100vw'}>
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
        Awesome Exercises Youn <br /> Should Know
      </Typography>
      <Box position={'relative'} mb={'72px'} >
    <TextField 
     height='76px'
     sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
    value={search}
    onChange={(e) => setsearch(e.target.value.toLowerCase())}
     placeholder="Search Exercises"
     type="text"
    />
     <Button className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} onClick={Handleclick} >
          Search
        </Button>
      </Box>
      <Box  sx={{position:'relative' , width:'100%' , height:'20px'}} >
        <HorizontalScrollBar data={BodyParts} bodyPart={bodyPart} setBodypart ={setBodypart}  SetExercise={SetExercise} isbodyPart />
      </Box>
    </Stack>
  )
}

export default SearchExercises