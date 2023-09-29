import { Collapse, Card, Jumbotron, Alert, Container, Button } from 'bootstrap-4-react';

const FlightStatus = () => {

    return (
        <>
        <Container
        className=" d-flex flex-column text-center align-items-center mt-5"
        style={{
          alignSelf: "center",
          maxWidth: "650px",
          marginRight: "auto",
          marginLeft: "auto",
        }}
        >
            <Jumbotron text="center" w="100" h="100" shadow p="3" mb="5" bg="light" rounded>
                <Alert className="w-100" info>Estado de los vuelos</Alert>
                <div id="accordionExample">
                    <Card>                   
                        <Alert dark mb="0" mt="0">
                            Origen - Destino | Fecha | Hora
                            <Button ml="5" mr="3" info>Editar vuelo</Button>
                            <Button danger>Eliminar vuelo</Button>
                            </Alert>
                        <Card.Header mb="0">
                            <Collapse.Button link target="#collapseOne" id="headingOne" aria-expanded="true">
                            Información sobre pasajero #1
                            </Collapse.Button>
                        </Card.Header>
                        <Collapse id="collapseOne" show aria-labelledby="headingOne" data-parent="#accordionExample">
                            <Card.Body>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            <Container mt="2">
                                <Button ml="5" mr="3" info>Editar pasajero</Button>
                                <Button danger>Eliminar pasajero</Button>
                            </Container>
                            </Card.Body>
                        </Collapse>
                        </Card>
                        <Card>
                        <Card.Header mb="0">
                            <Collapse.Button link target="#collapseTwo" id="headingTwo" aria-expanded="false">
                            Información sobre pasajero #2
                            </Collapse.Button>
                        </Card.Header>
                        <Collapse id="collapseTwo" aria-labelledby="headingTwo" data-parent="#accordionExample">
                            <Card.Body>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            <Container mt="2">
                                <Button ml="5" mr="3" info>Editar pasajero</Button>
                                <Button danger>Eliminar pasajero</Button>
                            </Container>
                            </Card.Body>
                        </Collapse>
                        </Card>
                        <Card>
                        <Card.Header mb="0">
                            <Collapse.Button link target="#collapseThree" id="headingThree" aria-expanded="false">
                            Información sobre pasajero #3
                            </Collapse.Button>
                        </Card.Header>
                        <Collapse id="collapseThree" aria-labelledby="headingThree" data-parent="#accordionExample">
                            <Card.Body>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            <Container mt="2">
                                <Button ml="5" mr="3" info>Editar pasajero</Button>
                                <Button danger>Eliminar pasajero</Button>
                            </Container>
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