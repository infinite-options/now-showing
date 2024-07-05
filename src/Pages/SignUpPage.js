import { Container, Stack } from '@mui/material'
import InputBar from '../Components/InputBar'
import LoginButton from '../Components/LoginButton'
import GrayNavButton from '../Components/GrayNavButton'
import PhoneNumber from '../Components/PhoneNumber'
import SmallTopBar from '../Components/SmallTopBar'
function SignUpPage(){
    return(
        <div className="SignUp">
            <SmallTopBar Name={'Welcome'}></SmallTopBar>
            <Container>
                <Stack spacing={3}>
                    <Stack spacing={3}>
                            <InputBar Label={'Enter Username(email)'}></InputBar>
                            <InputBar Label={'Enter Stage name'}></InputBar>
                            <InputBar Label={'Enter password'}></InputBar>
                            <InputBar Label={'Re-enter password'}></InputBar>
                    </Stack>
                    <PhoneNumber></PhoneNumber>
                    <InputBar Label={'Enter phone number'}></InputBar>
                    <Stack spacing={2}>
                        <LoginButton></LoginButton>
                        <GrayNavButton Label="Get Recommendations"></GrayNavButton>
                    </Stack>
                    <div>
                        Already have an account?
                    </div>
                </Stack>
                
            </Container>
            
        </div>
    )
}

export default SignUpPage