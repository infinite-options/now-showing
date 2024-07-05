import './SmallTopBar.css'
import { Avatar } from "@mui/material";
function SmallTopBar({Name}){
    return(
        <div className="SmallTopBar">
                <span><h1 className="Title Header">{Name}</h1></span>
                <span><Avatar></Avatar></span>

        </div>
        
    )
}

export default SmallTopBar;