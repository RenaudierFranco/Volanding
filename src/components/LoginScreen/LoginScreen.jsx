import { Button, Card, BSmall} from 'bootstrap-4-react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import {  useContext } from "react";


const LoginScreen = () => { 
<<<<<<< HEAD
=======

    const { logOut } = useContext(UserContext)
    localStorage.removeItem('log')
    logOut();

>>>>>>> 27a6053b472ffa53783666e9b0a7a27014425fa9
    return( 
        <div className=" d-flex flex-column text-center align-items-center"
             style={{
            "backgroundImage": "url('https://get.wallhere.com/photo/digital-art-artwork-illustration-environment-pink-violet-pink-background-concept-art-freedom-sky-skyscape-city-cityscape-tower-skyscraper-building-clouds-mountains-landscape-birds-women-outdoors-aircraft-airplane-1820887.jpg')",
            "backgroundPosition": "center",
            "backgroundRepeat": "no-repeat",
            "backgroundAttachment": "fixed",
            "backgroundSize": "cover",
            "height": "100vh",
            "width": "100vw",
          }}>
            
            <Card.Body style= {{"marginTop" : "10%"}}>
                <Card.Body className="d-flex flex-column mb-3">
                    <Card.Title className="text-center" style={{"color" : "#000000", "fontSize" : "2em"}}>
                        <img src="https://i.ibb.co/TwdYpf5/unnamed.png" alt="Logo" width="100" height="100" style={{"borderRadius" : "35%"}} className="d-inline-block"/>
                    </Card.Title>
                    <Card.Text className="text-center">
                        <NavLink to='/FormLoginContainer'><Button primary style={{"width" : "300px"}}>Log in</Button></NavLink>
                    </Card.Text>
                    <Card.Text className="text-center">
                        <NavLink to='/FormRegister'><Button primary style={{"width" : "300px"}}>Sign up</Button></NavLink>
                    </Card.Text>
                    <Card.Text className="text-center">
                        <NavLink to='/home'><Button primary style={{"width" : "300px"}}>Skip</Button></NavLink>
                    </Card.Text>
                </Card.Body>
                <Card.Body className="m-3">
                    <Card.Text className="text-center" style={{"color" : "#000000"}}><BSmall text="">Llegá donde querés estar, siempre Ⓡ</BSmall></Card.Text>
                </Card.Body>
            </Card.Body>
        </div>
    )
}

export default LoginScreen;