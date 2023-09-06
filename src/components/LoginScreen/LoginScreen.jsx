import { Button } from 'bootstrap-4-react'


const LoginScreen = () => {
    return(
        <container>
            <row></row>

            <row>
                <colum><Button info outline>Log In</Button></colum>
                <colum><Button info outline>Sign Up</Button></colum>
                <colum><Button info outline>Skip</Button></colum>
            </row>

            <row></row>
        </container>
    )
}

export default LoginScreen