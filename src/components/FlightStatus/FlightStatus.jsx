import { Collapse, Card, Jumbotron, Alert, Container, Button } from 'bootstrap-4-react';
import { Col, Row } from 'bootstrap-4-react/lib/components/layout';

const FlightStatus = () => {
   
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
                        <Alert dark>
                            <Row>
                                <Col m="2">
                                    Origen - Destino | Fecha | Hora
                                </Col>
                            </Row>
                            <Row>
                                <Col m="2">
                                    <Button m="1" info>Editar vuelo</Button>
                                    <Button m="1" danger>Eliminar vuelo</Button>
                                </Col>
                            </Row>
                            </Alert>
                        <Card.Header>
                            <Collapse.Button link target="#collapseOne" id="headingOne" aria-expanded="true">
                            Información sobre pasajero #1
                            </Collapse.Button>
                        </Card.Header>
                        <Collapse id="collapseOne" show aria-labelledby="headingOne" data-parent="#accordionExample">
                            <Card.Body>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </Card.Body>
                        </Collapse>
                        </Card>
                        <Card>
                        <Card.Header>
                            <Collapse.Button link target="#collapseTwo" id="headingTwo" aria-expanded="false">
                            Información sobre pasajero #2
                            </Collapse.Button>
                        </Card.Header>
                        <Collapse id="collapseTwo" aria-labelledby="headingTwo" data-parent="#accordionExample">
                            <Card.Body>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            <Container mt="2">
                            </Container>
                            </Card.Body>
                        </Collapse>
                        </Card>
                        <Card>
                        <Card.Header>
                            <Collapse.Button link target="#collapseThree" id="headingThree" aria-expanded="false">
                            Información sobre pasajero #3
                            </Collapse.Button>
                        </Card.Header>
                        <Collapse id="collapseThree" aria-labelledby="headingThree" data-parent="#accordionExample">
                            <Card.Body>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </Card.Body>
                        </Collapse>
                    </Card>
                </div>
            </Jumbotron>
        </Container>
        </>
    )
}

export default FlightStatus;