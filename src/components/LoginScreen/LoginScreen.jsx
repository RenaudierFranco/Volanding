import { Button, Card, BSmall} from 'bootstrap-4-react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import {  useContext } from "react";

const LoginScreen = () => { 

    const { logOut } = useContext(UserContext)
    localStorage.removeItem('log')
    logOut();

    return( 
        <div className=" d-flex flex-column text-center align-items-center"
             style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                }}>
            <Card.Body>
                <Card.Body className="d-flex flex-column mb-3">
                    <Card.Title className="text-center" style={{"color" : "#000000", "fontSize" : "2em"}}>
                        <img src="https://i.ibb.co/TwdYpf5/unnamed.png" alt="Logo" width="100" height="100" style={{"borderRadius" : "35%"}} className="d-inline-block"/>
                    </Card.Title>
                    <Card.Text className="text-center">
                        <NavLink to='FormLoginContainer'><Button primary style={{"width" : "300px"}}>Log in</Button></NavLink>
                    </Card.Text>
                    <Card.Text className="text-center">
                        <NavLink to='FormRegister'><Button primary style={{"width" : "300px"}}>Sign up</Button></NavLink>
                    </Card.Text>
                    <Card.Text className="text-center">
                        <NavLink to='home'><Button primary style={{"width" : "300px"}}>Skip</Button></NavLink>
                    </Card.Text>
                </Card.Body>
                <Card.Body className="m-3">
                    <Card.Text className="text-center" style={{"color" : "white"}}><BSmall text="">Llegá donde querés estar, siempre Ⓡ</BSmall></Card.Text>
                </Card.Body>
            </Card.Body>
        </div>
    )
}

export default LoginScreen;