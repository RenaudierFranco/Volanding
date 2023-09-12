import { Alert, Row, Col, InputGroup, Form, Button } from 'bootstrap-4-react';
import { Card } from 'bootstrap-4-react';

const InputDate = () => {

    return (
        <Card w="75" h="100" shadow p="3" mb="5" bg="light" rounded>
                <Alert primary className="text-center">Buscar vuelo</Alert>
                <Row>
                    <Col>
                        <InputGroup class="input-group input-group-lg">
                            <Form.Input type="text" placeholder="Origen" />
                        </InputGroup>
                    </Col>
                    <Col>
                        <InputGroup class="input-group input-group-lg">
                            <Form.Input type="text" placeholder="Destino" />
                        </InputGroup>
                    </Col>
                    <Col>
                        <InputGroup class="input-group input-group-lg">
                            <Form.Input type="date" placeholder="Partida" />
                        </InputGroup>
                    </Col>
                    <Col className="text-center">
                        <Button w="75" h="100" primary>Buscar</Button>
                    </Col>
                </Row>
        </Card>
    )
}

export default InputDate