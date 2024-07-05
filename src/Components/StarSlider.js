import '../App.css'
import StarIcon from '@mui/icons-material/Star';
import { Slider } from '@mui/material';
function StarSlider(){
    return(
        <span className='Star-Slider'>
            {/* <line></line> */}
            <Slider aria-label="Small" style={{color:'#FFC319'}} size='small' defaultValue={30}/>


        </span>
    )
}

export default StarSlider;