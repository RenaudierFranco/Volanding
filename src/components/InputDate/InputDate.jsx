import { InputGroup, Form } from 'bootstrap-4-react';
import { Container, Row, Col } from 'bootstrap-4-react';
import { Card } from 'bootstrap-4-react';

const InputDate = () => {

    return (

            <div>
S
                <Card>
                <Card.Body>
                <Container>
                    <Row>
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
                    </Row>x

                    <Row>
                        <Col></Col>
                        <Col>
                            <Form.CustomCheckbox id="customCheck1" m="2">
                                Solo ida
                            </Form.CustomCheckbox>
                        </Col>
                        <Col></Col>
                    </Row>



                    <Row>
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