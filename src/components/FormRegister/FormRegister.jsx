import { Form, Button, Container, Row, Col, Alert, Progress, Jumbotron } from 'bootstrap-4-react';
import { useState } from 'react';
import { db } from '../../Services/Firebase/Firebase';
import { collection, addDoc } from 'firebase/firestore';


const FormRegister = () => {

  const [form, setForm] = useState({nombre:'', apellido:'', contrasena:'', mail:'', 
    pasaporte:'', fechaNacimiento:'', nacionalidad:'', celular:0, genero:''})

  const getForm = (e) => {
    const {name, value } = e.target
      setForm({...form, [name]: value});

    console.log(form)
  }

  const createUser = (e) => {
    e.preventDefault()

    const newClient = form

    const clientCollection = collection(db, 'user')
    addDoc(clientCollection, newClient)
  }

  const [progressValue, setProgressValue] = useState(0);
  const incrementProgress = () => {
    if (progressValue < 100) {
      setProgressValue(progressValue + 10);
    }
  };


    return(
      <Container className=" d-flex flex-column text-center align-items-center mt-5" style={{
        "alignSelf": "center", "maxWidth":"650px", "marginRight":"auto", "marginLeft":"auto"
        }}>
        
        <Jumbotron text="center" w="100" h="100" shadow p="3" mb="5" bg="light" rounded>

        <Alert className='w-100 mb-5' primary>Acá inicia tu viaje 🏖️</Alert>
    
        <Progress mb="5">
        <Progress.Bar striped animated min="0" max="100" now={progressValue} bg='success'/><p>🚀</p>
        </Progress>

          <Form className="w-100">
            <Row>
              <Col>
                <Form.Group>
                    <label htmlFor="exampleInputName1">Nombre</label>
                    <Form.Input type="text" name="nombre" id="exampleInputName" placeholder="Nombre" onChange={(e) => {getForm(e); incrementProgress();}}/>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                    <label htmlFor="exampleInputLastName1">Apellido</label>
                    <Form.Input type="text" name="apellido" id="exampleInputLastName" placeholder="Apellido" onChange={getForm}/>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <label htmlFor="exampleInputEmail1">Correo Electrónico</label>
                  <Form.Input type="email" name="mail" id="exampleInputEmail1" placeholder="Mail" onChange={getForm}/>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <label htmlFor="exampleInputPassword1">Contraseña</label>
                  <Form.Input type="password" name="contrasena" id="exampleInputPassword1" placeholder="Contraseña" onChange={getForm}/>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <label htmlFor="exampleInputPassport1">DNI / Pasaporte</label>
                  <Form.Input type="number" name="pasaporte" id="exampleInpPassport" placeholder="Pasaporte" onChange={getForm}/>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <label htmlFor="exampleInputNacionality1">Nacionalidad</label>
                  <Form.Input type="text" name="nacionalidad" id="exampleInputNacionality1" placeholder="Nacionalidad" onChange={getForm}/>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <label htmlFor="exampleInputBirthDate1">Fecha de nacimiento</label>
                  <Form.Input type="date" name="fechaNacimiento" id="exampleInputBirthDate1" placeholder="Fecha de nacimiento" onChange={getForm}/>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <label htmlFor="exampleInputgender1">Genero</label>
                  <Form.CustomSelect mb="3" name="genero" onChange={getForm}>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                  </Form.CustomSelect>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
              <Form.Group>
                  <label htmlFor="exampleInputPhoneNumber1">Número telefónico</label>
                  <Form.Input type="number" name="celular" id="exampleInputPhoneNumber1" placeholder="Número telefónico" onChange={getForm}/>
                </Form.Group>
              </Col>
              <Col className="d-flex align-items-center justify-content-center">
                <Button className="mt-3" primary outline type="submit" onClick={createUser} >Enviar</Button>
              </Col>
            </Row>
          </Form>
        </Jumbotron>
      </Container>
    )
}

export default FormRegister