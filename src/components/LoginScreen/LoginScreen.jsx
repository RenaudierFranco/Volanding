import { Button } from 'bootstrap-4-react';
import { Row, Container, Col } from 'bootstrap-4-react';
import { NavLink } from 'react-router-dom';

const LoginScreen = () => {
    return(
        <Container>
            <Row></Row>

            <Row>
                <Col><NavLink to='/FormLogin'><Button info outline>Log In</Button></NavLink></Col>
                <Col><NavLink to='/FormRegister'><Button info outline>Sign Up</Button></NavLink></Col>
                <Col><NavLink to='/home'><Button info outline>Skip</Button></NavLink></Col>
            </Row>

            <Row></Row>
        </Container>
    )
}

export default LoginScreen