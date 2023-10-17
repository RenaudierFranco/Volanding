import { Collapse, Card, Jumbotron, Alert, Container, Button } from 'bootstrap-4-react';
import { Col, Row } from 'bootstrap-4-react/lib/components/layout';

const FlightStatus = ({items, deleteFlight}) => {

    console.log('items flightStatus:' ,items)
    return (       
        <>
        <Container
        className=" d-flex flex-column text-center align-items-center"
        style={{
          alignSelf: "center",
          maxWidth: "650px",
          marginRight: "auto",
          marginLeft: "auto",
        }}
        >
            <Jumbotron text="center" w="100" shadow p="3" mb="5" bg="light" rounded>
                <Alert primary className="w-100">Estado de los vuelos</Alert>
                <div id="accordionExample" className="w-100">
                    <Card>
                        {items.map(item => {
                            return(
                            <div key={item.id}>
                                <Alert dark>
                                <Row>
                                    <Col m="2">
                                    {` ${item.departure.toUpperCase()} - ${item.arrival.toUpperCase()} | ${item.date} | ${item.time} `}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col m="2">
                                    <Button m="1" info 
                                    onClick={() => {alert('¡Esta opción aun no esta disponible! Para editar un vuelo por favor eliminalo y volvelo a crear. ')}}>
                                        Editar vuelo
                                    </Button>
                                    <Button m="1" danger onClick={()=> {deleteFlight(item.id)}}>
                                        Eliminar vuelo
                                    </Button>
                                    </Col>
                                </Row>
                                </Alert>
                                <Card.Header>
                                <Collapse.Button
                                    variant="link"
                                    onClick={() => {
                                    document.getElementById(`collapse${item.id}`).classList.toggle('show');
                                    }}
                                    style={{ textDecoration: 'none', color: '#000000' }}
                                >
                                    Detalle
                                </Collapse.Button>
                                </Card.Header>
                                <Collapse
                                id={`collapse${item.id}`}
                                aria-labelledby={`heading${item.id}`}
                                data-parent="#accordionExample"
                                >
                                <Card.Body>
                                    <Card.Text>Fecha: <span style={{color:"grey"}}>{item.date}</span></Card.Text>
                                    <Card.Text>Horario: <span style={{color:"grey"}}>{item.time}</span></Card.Text>
                                    <Card.Text>Avion: <span style={{color:"grey"}}>{item.plane}</span></Card.Text>
                                    <Card.Text>Precio: <span style={{color:"grey"}}>U$S {item.price}</span></Card.Text>
                                    <Card.Text>Duración: <span style={{color:"grey"}}>{item.duration}</span> minutos</Card.Text>
                                    <Card.Text>Asientos: <span style={{color:"grey"}}>{item.seat}</span> minutos</Card.Text>
                                </Card.Body>
                                </Collapse>
                            </div>
                        )})}                   
                    </Card>
                </div>
            </Jumbotron>
        </Container>
        </>
    )
}

export default FlightStatus;