
import { Stack } from '@mui/material'
import { RingLoader } from 'react-spinners'

const Loader = () => {
  return (
    <Stack sx={{ flexDirection:"row" ,alignItems:'center' , width:'100vw', justifyContent:'center'}}>
    <RingLoader color="red" size={100} />
    </Stack>
  )
}

export default Loader