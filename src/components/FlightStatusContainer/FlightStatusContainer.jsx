import FlightStatus from "../FlightStatus/FlightStatus";
import FormFlight from "../FormFlight/FormFlight";
import { Row, Col } from "bootstrap-4-react/lib/components/layout";
import { Alert, Navbar, BImg, Button } from 'bootstrap-4-react';
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";
import { UserContext } from '../../Context/UserContext';
import React, { useContext } from 'react';

const FlightStatusContainer = () => {

    const { operator, setOperator } = useContext(UserContext)

    const handleLogOut = () => {
        setOperator({});
        localStorage.removeItem('operator');
        alert('Sesion finalizada correctamente');
        console.log('Sesion finalizada')
    }

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
                <NavLink m="2" info to="/home"onClick={handleLogOut}>Cerrar sesión</NavLink>
            </Navbar>

            <Alert primary m="3" className="text-center">
                ¡Bienvenido! 
                {
                    operator.name?
                    " " + operator.name.charAt(0).toUpperCase() + operator.name.slice(1)
                    :
                    <></>
                }
                , desde acá podés manejar todos tus vuelos</Alert>
            <Row>
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