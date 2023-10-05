import { Form, Button, Container, Row, Col, Jumbotron, Alert } from 'bootstrap-4-react';
import { useState } from 'react';
import { db } from '../../Services/Firebase/Firebase'
import { collection, addDoc } from 'firebase/firestore';


const FormFlight = () => {
    const [form, setForm] = useState({departure:'', arrival:'', time:'', date:'', plane:'', seat:0, price:0, duration:0})


    const getForm = (e) => {
        const {name, value } = e.target
        setForm({...form, [name]: value});

        console.log(form)
    }

    const createFlight = async () => {

        if (!localStorage.getItem('operator')) {
            alert('Parece que no iniciaste sesión. Volvé a intentarlo.');
            console.error('No se encontró operador, operador: ', localStorage.getItem('operator'))
            return;
        }

        if (isFormIncomplete(form)) {
        alert('Por favor, completá todos los campos.');
        return;
        }

        try {
            const newFlight = form;
            const operatorId = JSON.parse(localStorage.getItem('operator')).id;
            console.log('operatorId', operatorId)
            newFlight['operatorId'] = operatorId

            const flightCollection = collection(db, 'flight');
            await addDoc(flightCollection, newFlight);
    
            alert('¡El vuelo se generó correctamente!');
            window.location.reload()
        } catch (error) {
            console.error('Error al crear el vuelo:', error);
            alert('Hubo un error al generar el vuelo. Por favor, intentalo de nuevo.');
        }
    };

    const isFormIncomplete = (form) => {
        for (const key in form) {
            if (!form[key]) {
                return true;
            }
        }
        return false;
    };

    return(
        <Container
        className=" d-flex flex-column text-center align-items-center"
        style={{
          alignSelf: "center",
          maxWidth: "650px",
          marginRight: "auto",
          marginLeft: "auto",
        }}
        >
            <Jumbotron text="center" w="100" h="100" shadow p="3" mb="5" bg="light" rounded>
                <Alert primary className="w-100 mb-5 text-center">Cargar nuevo vuelo</Alert>
                <Form>
                    <Row>
                        <Col>
                            <Form.Group text="left">
                                <label htmlFor="exampleInputOrigin1">Origen</label>
                                <Form.Input type="text" name="departure" id="exampleInputOrigin1" placeholder="Origen del vuelo" onChange={getForm}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group text="left">
                                <label htmlFor="exampleInputDestiny1">Destino</label>
                                <Form.Input type="text" name="arrival" id="exampleInputDestiny1" placeholder="Destino del vuelo" onChange={getForm}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group text="left">
                                <label htmlFor="exampleInputSchedule1">Horario</label>
                                <Form.Input type="text" name="time" id="exampleInputSchedule1" placeholder="Horario del vuelo" onChange={getForm}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group text="left">
                                <label htmlFor="exampleInputBirthDate1">Fecha</label>
                                <Form.Input type="date" name="date" id="exampleInputDate1" placeholder="Fecha" onChange={getForm} />
                            </Form.Group>
                    </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group text="left">
                                <label htmlFor="exampleInputPlane1">Avion</label>
                                <Form.Input type="text" name="plane" id="exampleInputPlane1" placeholder="Tipo de avion" onChange={getForm}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group text="left">
                                <label htmlFor="exampleInputPlane1">Duración del vuelo</label>
                                <Form.Input type="number" name="duration" id="exampleInputDuration1" placeholder="Tiempo en minutos" onChange={getForm}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group text="left">
                                <label htmlFor="exampleInputAvailablePlaces1">Asientos</label>
                                <Form.Input type="number" name="seat" id="exampleInputAvailablePlaces1" placeholder="Asientos disponibles" onChange={getForm}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group text="left">
                                <label htmlFor="exampleInputAvailablePlaces1">Precio</label>
                                <Form.Input type="number" name="price" id="exampleInputPrice1" placeholder="Precio en dolares" onChange={getForm}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button mt="3" primary type="button" onClick={createFlight}>Generar nuevo vuelo</Button>
                </Form>
            </Jumbotron>
        </Container>
    )
}

export default FormFlight;