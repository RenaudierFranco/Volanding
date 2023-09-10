import { InputGroup, Form } from 'bootstrap-4-react';
import { Container, Row, Col } from 'bootstrap-4-react';
import { Card } from 'bootstrap-4-react';

const InputDate = () => {

    return (

            <div>

                <Card className="m-5">
                <Card.Body>
                <Container>
                    <Row className='m-4'>
                        <Col>
                            <InputGroup mb="2">
                                <InputGroup.Prepend><InputGroup.Text>Origen</InputGroup.Text></InputGroup.Prepend>
                                <Form.Input type="text" placeholder="Origen" />
                            </InputGroup>
                        </Col>
                        <Col>
                        <InputGroup mb="2">
                            <InputGroup.Prepend><InputGroup.Text>Destino</InputGroup.Text></InputGroup.Prepend>
                            <Form.Input type="text" placeholder="Destino" />
                        </InputGroup>
                        </Col>
                    </Row>
                    <Row className='m-4'>
                        <Col>
                            <InputGroup mb="2">
                                <InputGroup.Prepend><InputGroup.Text>Fecha de partida</InputGroup.Text></InputGroup.Prepend>
                                <Form.Input type="date" placeholder="Fecha de partida" />
                            </InputGroup>
                        </Col>
                        <Col>
                        <InputGroup mb="2">
                            <InputGroup.Prepend><InputGroup.Text>Fecha de llegada</InputGroup.Text></InputGroup.Prepend>
                            <Form.Input type="date" placeholder="Fecha de llegada" />
                        </InputGroup>
                        </Col>
                    </Row>
                </Container>
                </Card.Body>
                </Card>
            </div>

    )
}

export default InputDate