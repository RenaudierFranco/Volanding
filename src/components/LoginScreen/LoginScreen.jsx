import { Button } from 'bootstrap-4-react';
import { Row, Container, Col } from 'bootstrap-4-react';


const LoginScreen = () => {
    return(
        <Container>
            <Row></Row>

            <Row>
                <Col><Button info outline>Log In</Button></Col>
                <Col><Button info outline>Sign Up</Button></Col>
                <Col><Button info outline>Skip</Button></Col>
            </Row>

            <Row></Row>
        </Container>
    )
}

export default LoginScreen