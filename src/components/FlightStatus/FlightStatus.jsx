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
                                    onClick={() => {alert('!Esta opción aun no esta disponible¡ Para editar un vuelo por favor eliminalo y volvelo a crear. ')}}>
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
                                    <Card.Text>Fecha: {item.date}</Card.Text>
                                    <Card.Text>Horario: {item.time}</Card.Text>
                                    <Card.Text>Avion: {item.plane}</Card.Text>
                                    <Card.Text>Precio: U$S {item.price}</Card.Text>
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