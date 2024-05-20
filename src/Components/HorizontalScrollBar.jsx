/* eslint-disable react/prop-types */
import { Box , Typography } from '@mui/material'
import { useContext } from 'react';
import Bodypart from './Bodypart'
import { ScrollMenu , VisibilityContext } from 'react-horizontal-scrolling-menu'
import 'react-horizontal-scrolling-menu/dist/styles.css';
import ExerciseCard from './ExerciseCard'
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="left-arrow" style={{zIndex:10}}>
      <img src={LeftArrowIcon} alt="left-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="right-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollBar = ({data , isbodyPart, setBodypart, bodyPart  }) => {
  return (
    <div style={{overflow:'hidden'}}>
    <ScrollMenu  RightArrow={RightArrow} LeftArrow={LeftArrow} >
     {data.map((item)=>(
        <Box 
        key={item.id || item}
        itemID={item.id || item}
         title={item.id || item}
         m='0 40px'
         >
            {isbodyPart ? <Bodypart item={item} setBodypart={setBodypart} bodyPart={bodyPart} />
            :
            <ExerciseCard exercise={item} />
            }
            </Box>
     ))} 
    
    
    </ScrollMenu>
   </div>
  )
}

export default HorizontalScrollBar