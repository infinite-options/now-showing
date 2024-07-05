import { Container, Grid, Stack } from "@mui/material";
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import InputBar from "./InputBar";
function PhoneNumber(){
    return(
        <div className="PhoneNumber">
                <Stack spacing={4}>
                    <Grid container spacing = {1} alignItems={'center'}>
                        <Grid item xs={8}>
                            <div className="TextContent">
                                Want new recommendation automatically sent to your phone?
                            </div>
                        </Grid>
                        <Grid item xs={2}>
                            <ThumbUpOffAltIcon style={{color: '#76D9B6'}}></ThumbUpOffAltIcon>
                        </Grid>
                        <Grid item xs={2}>
                            <ThumbDownOffAltIcon></ThumbDownOffAltIcon>
                        </Grid>                
                    </Grid>
                    <InputBar Label={'Enter Phone Number'}></InputBar>
                    <div>
                        By providing your phone number your agreeing to receive notifications.
                    </div>              
                </Stack>
            
        </div>
    )
}

export default PhoneNumber;