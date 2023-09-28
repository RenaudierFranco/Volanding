import NavBar from "../NavBar/NavBar";
import FlightStatus from "../FlightStatus/FlightStatus";
import FormFlight from "../FormFlight/FormFlight";
import { Row, Col } from "bootstrap-4-react/lib/components/layout";
import { Alert } from 'bootstrap-4-react';

const FlightStatusContainer = () => {

    return(
        <>
            <NavBar/>
            <Alert primary m="1" className="text-center">¡Bienvenido! desde acá podés manejar todos tus vuelos</Alert>
            <Row className="d-flex" mw="100">
                <Col col="lg-6 md-12 sm-12" mt="1">
                    <FlightStatus/>
                </Col>
                <Col col="lg-6 md-12 sm-12" mt="1">
                    <FormFlight/>
                </Col>
            </Row>
        </>
    )
}

export default FlightStatusContainer;