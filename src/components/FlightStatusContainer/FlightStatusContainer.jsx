import FlightStatus from "../FlightStatus/FlightStatus";
import FormFlight from "../FormFlight/FormFlight";
import { Row, Col } from "bootstrap-4-react/lib/components/layout";
import { Alert, Navbar, BImg } from 'bootstrap-4-react';
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";

const FlightStatusContainer = () => {

    return(
        <>
            <Navbar light bg="light">
                <Navbar.Brand>
                <BImg
                    src={"https://i.ibb.co/TwdYpf5/unnamed.png"}
                    width="30"
                    height="30"
                    display="inline-block"
                    align="top"
                    mr="1"
                />
                Volanding
                </Navbar.Brand>
                <NavLink href="">Cerrar sesión</NavLink>
            </Navbar>

            <Alert primary mt="3" className="text-center">¡Bienvenido! desde acá podés manejar todos tus vuelos</Alert>
            <Row className="d-flex" mw="100">
                <Col col="lg-6 md-12 sm-12">
                    <FlightStatus/>
                </Col>
                <Col col="lg-6 md-12 sm-12">
                    <FormFlight/>
                </Col>
            </Row>
            <Footer/>
        </>
    )
}

export default FlightStatusContainer;