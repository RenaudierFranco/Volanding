import FlightStatus from "../FlightStatus/FlightStatus";
import FormFlight from "../FormFlight/FormFlight";
import { Row, Col } from "bootstrap-4-react/lib/components/layout";
import { Alert, Navbar, BImg, Button } from 'bootstrap-4-react';
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";
import { UserContext } from '../../Context/UserContext';
import React, { useContext, useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Services/Firebase/Firebase";

const FlightStatusContainer = () => {
    const [flights, setFlights] = useState([]);
    const { operator, setOperator } = useContext(UserContext);

    useEffect(() => {
        const fetchFlights = async () => {
            try {
                const storedOperator = localStorage.getItem('operator');

                if (storedOperator) {
                    const parsedOperator = JSON.parse(storedOperator);
                    setOperator(parsedOperator);

                    const flightsRef = collection(db, 'flight');
                    const querySnapshot = await getDocs(flightsRef);

                    const flightList = [];
                    querySnapshot.forEach((doc) => {
                        const flightData = doc.data();
                        
                        if (flightData.operatorId === parsedOperator.id) {
                            flightList.push(flightData);
                        }
                    });

                    console.log('Vuelos obtenidos de Firestore:', flightList);
                    setFlights(flightList);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchFlights();
    }, [setOperator]);

    const handleLogOut = () => {
        setOperator({});
        localStorage.removeItem('operator');
        alert('Sesion finalizada correctamente');
        console.log('Sesion finalizada')
    }
   
    return(
        <>
            <Navbar light bg="light">
                <Navbar.Brand href="/home">
                <BImg
                    style={{"borderRadius" : "50%"}}
                    src={"https://i.ibb.co/TwdYpf5/unnamed.png"}
                    width="30"
                    height="30"
                    display="inline-block"
                    align="top"
                    mr="1"
                />
                Volanding
                </Navbar.Brand>
                    <Button primary>
                        <NavLink m="2" to="/home"onClick={handleLogOut} 
                        style={{textDecoration:"none", color:"#FFFFFF"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-x-fill mr-2" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z"/>
                            </svg>
                            Cerrar sesión
                        </NavLink>
                    </Button>   
            </Navbar>
            <Alert primary m="3" className="text-center">
            ¡Bienvenido! 
            {operator.name !== undefined
                ? ' ' + operator.name.charAt(0).toUpperCase() + operator.name.slice(1)
                : <></>
            }
            , administrá tus vuelos.
            </Alert>
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