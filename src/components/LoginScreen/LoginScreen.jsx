import { Button, Card, BSmall} from 'bootstrap-4-react';
import { Container } from 'bootstrap-4-react';
import { NavLink } from 'react-router-dom';

const LoginScreen = () => { 
    return( 
        <div style={{
            "backgroundImage": "url('https://get.wallhere.com/photo/digital-art-artwork-illustration-environment-pink-violet-pink-background-concept-art-freedom-sky-skyscape-city-cityscape-tower-skyscraper-building-clouds-mountains-landscape-birds-women-outdoors-aircraft-airplane-1820887.jpg')",
            "backgroundPosition": "center",
            "backgroundRepeat": "no-repeat",
            "backgroundAttachment": "fixed",
            "backgroundSize": "cover",
            "height": "100vh",
            "width": "100vw"
          }}>
            
            <Container className=" d-flex flex-column text-center align-items-center" style={{"height" : "100%", "width" : "auto"}}>
                <Card.Body className='mt-5 mb-auto'>
                    <Card.Body className="m-3">
                    <Card.Title className="text-center" style={{"color" : "#000000", "fontSize" : "2em"}}>Volanding</Card.Title>
                    </Card.Body>
                    <Card.Body className="d-flex flex-column mb-3">
                        <Card.Text className="text-center">
                            <NavLink to='/FormLogin'><Button primary style={{"width" : "300px"}}>Log in</Button></NavLink>
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
            </Container>
        </div>
    )
}

export default LoginScreen