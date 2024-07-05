import GrayNavButton from "../Components/GrayNavButton";
import LoginButton from "../Components/LoginButton";
import { Grid, Container, Stack } from "@mui/material";
import InputBar from "../Components/InputBar";
import { Link } from "react-router-dom";
import SmallTopBar from "../Components/SmallTopBar";
import PhoneNumber from "../Components/PhoneNumber";
import Popcorn from '../Assets/Popcorn.png'

function LoginPage(){
    return(
        <div className="LogInPage">
            <SmallTopBar Name={'Welcome'}></SmallTopBar>
            <Container>
                <Stack spacing={6}>
                    <Stack spacing={2}>
                        <InputBar Label={'Enter Username (email)'}></InputBar>
                        <InputBar Label={'Enter password'}></InputBar>
                    </Stack>
                    <Stack spacing={4}>
                        <Grid container spacing = {1}>
                            <Grid item xs = {8}>
                                <div className="TextContent">
                                    Buy Popcorn and Support the Cause!
                                </div>
                            </Grid>
                            <Grid item xs = {4} textAlign={'center'} alignContent={'center'}>
                                <img src={Popcorn} width={'19px'} height={'28px'}></img>
                            </Grid>
                        </Grid>
                        <PhoneNumber></PhoneNumber>
                    </Stack>
                    
                    <Stack spacing={2}>
                        <Link to={'/Recommendations'}><LoginButton></LoginButton></Link>
                        <GrayNavButton Label="Get Recommendations"></GrayNavButton>

                    </Stack>
                    <div>
                        Need an account?  
                    </div>

                </Stack>
                  
            </Container>
            
        </div>
    )
}

export default LoginPage;