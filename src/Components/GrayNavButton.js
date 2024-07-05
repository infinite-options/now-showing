import { Button } from "@mui/material";
import './GrayNavButton.css'
function GrayNavButton({Label}){
    return(
        <div>
            <button className="Gray-Nav-Button">
                {Label}
            </button>
        </div>
        
    )
}

export default GrayNavButton;