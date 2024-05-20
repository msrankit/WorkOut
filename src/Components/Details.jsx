import { Typography, Button, Stack, } from '@mui/material'
import BodypartImage  from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png'
import EquipmentTarget from '../assets/icons/equipment.png'


const Details = ({exerciseDetails}) => {


  const { bodyPart , gifUrl ,name , target , equipment } = exerciseDetails;


  const extraDetails = [
    {
      icon: BodypartImage,
      name:bodyPart
    },
    {
      icon: TargetImage,
      name:target
    },
    {
      icon: EquipmentTarget,
      name: equipment
    }
  ]

  return (
    <Stack gap="60px" sx={{ width:'100vw' , flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
      <img src={gifUrl} alt={name}  loading="lazy" className="detail-image" />
      <Stack sx={{width:'100%' , gap : {lg: '35px' , xs : '20px'}}}>
    <Typography variant={'h3'} >
      {name}
    </Typography>
    <Typography variant='h6'>
    Exercises keep you strong.{' '}
          <span style={{ textTransform: 'capitalize' }}>{name}</span>  is one
          of the best <br /> exercises to target your {target}. It will help you improve your{' '}
          <br /> mood and gain energy.
    </Typography>
      {extraDetails.map((item)=>(
        <Stack key={item.name} direction={'row'} gap='24px'
         alignContent={'center'}>
   
   <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '100px', height: '100px' }}>
   <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} />

    </Button>
   <Typography textTransform="capitalize" sx={{ fontSize: { lg: '23px', xs: '18px' }, textAlign:'justify' , mt:'25px' }}>
    {item.name}
   </Typography>
        </Stack>
      ))}
    </Stack> 
    </Stack>
  )
}

export default Details