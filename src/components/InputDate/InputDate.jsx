import { InputGroup, Form } from 'bootstrap-4-react';
import { Alert, Row } from 'bootstrap-4-react';
import { Card } from 'bootstrap-4-react';

const InputDate = () => {

    return (
        <Card h="100" shadow p="3" mb="5" bg="light" rounded>
                <Alert primary>Buscar vuelo</Alert>
                <Row className='m-4'>
                        <InputGroup lg>
                            <Form.Input type="text" placeholder="Origen" />
                        </InputGroup>
                </Row>
                <Row className='m-4'>
                    <InputGroup lg>
                        <Form.Input type="text" placeholder="Destino" />
                    </InputGroup>
                </Row>
                <Row className='m-4'>
                        <InputGroup lg>
                            <Form.Input type="date" placeholder="Partida" />
                        </InputGroup>
                </Row>
        </Card>
    )
}

export default InputDate