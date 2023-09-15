import { Form, Button, Container, Row, Col, Alert, Progress, Jumbotron } from 'bootstrap-4-react';
import { db } from '../../Services/Firebase/Firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


const FormRegister = () => {
  
  const navigate = useNavigate();
  const redirect = () => {
    navigate('/FormLoginContainer');
  };
  
  const [form, setForm] = useState({nombre:'', apellido:'', contrasena:'', mail:'', 
    pasaporte:'', fechaNacimiento:'', nacionalidad:'', celular:'', genero:''})

  const getForm = (e) => {
    const {name, value } = e.target
      setForm({...form, [name]: value});

    incrementProgress();
    console.log(form)
  }

  const createUser = (e) => {
    e.preventDefault()

    console.log(form)
    const newClient = form

    const clientCollection = collection(db, 'user')
    addDoc(clientCollection, newClient)

    redirect()
  }


  const [progressValue, setProgressValue] = useState(0);
  const incrementProgress = () => {
    let newProgressValue = 0;

    for (let dato in form) {
      if (form.hasOwnProperty(dato)) {
        console.log('dato', dato);
        console.log('form', form);

        if (form[dato] !== "" && typeof form[dato] === 'string') {
          newProgressValue += 11.1;
        }
      }
    }

    setProgressValue(newProgressValue);
  }

  useEffect(() => {
    console.log('progressValue', progressValue);
  }, [progressValue]);


    const handleBlur = (e) => {
      const { value } = e.target;
      if (!value) {
        setProgressValue((prevProgress) => prevProgress - 11.1);
      }
    };



    return(
      <Container className=" d-flex flex-column text-center align-items-center mt-5" style={{
        "alignSelf": "center", "maxWidth":"650px", "marginRight":"auto", "marginLeft":"auto"
        }}>
        
        <Jumbotron text="center" w="100" h="100" shadow p="3" mb="5" bg="light" rounded>

        <Alert className='w-100 mb-5' primary>Acá inicia tu viaje 🏖️</Alert>
    
        <Progress mb="5">
        <Progress.Bar striped animated min="0" max="100" now={progressValue} bg='success'/>
        </Progress>

          <Form className="w-100">
            <Row>
              <Col>
                <Form.Group>
                    <label htmlFor="exampleInputName1">Nombre</label>
                    <Form.Input type="text" name="nombre" id="exampleInputName" placeholder="Nombre" onBlur={handleBlur} onChange={getForm}/>                
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                    <label htmlFor="exampleInputLastName1">Apellido</label>
                    <Form.Input type="text" name="apellido" id="exampleInputLastName" placeholder="Apellido" onBlur={handleBlur} onChange={getForm}/>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <label htmlFor="exampleInputEmail1">Correo Electrónico</label>
                  <Form.Input type="email" name="mail" id="exampleInputEmail1" placeholder="Mail" onBlur={handleBlur} onChange={getForm}/>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <label htmlFor="exampleInputPassword1">Contraseña</label>
                  <Form.Input type="password" name="contrasena" id="exampleInputPassword1" placeholder="Contraseña" onBlur={handleBlur} onChange={getForm}/>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <label htmlFor="exampleInputPassport1">DNI / Pasaporte</label>
                  <Form.Input type="string" name="pasaporte" id="exampleInpPassport" placeholder="Pasaporte" onBlur={handleBlur} onChange={getForm}/>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <label htmlFor="exampleInputNacionality1">Nacionalidad</label>
                  <Form.Input type="text" name="nacionalidad" id="exampleInputNacionality1" placeholder="Nacionalidad" onBlur={handleBlur} onChange={getForm}/>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <label htmlFor="exampleInputBirthDate1">Fecha de nacimiento</label>
                  <Form.Input type="date" name="fechaNacimiento" id="exampleInputBirthDate1" placeholder="Fecha de nacimiento" onBlur={handleBlur} onChange={getForm}/>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <label htmlFor="exampleInputgender1">Genero</label>
                  <Form.Input type="string" name="genero" id="exampleInputGender1" placeholder="Genero" onBlur={handleBlur} onChange={getForm}/>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
              <Form.Group>
                  <label htmlFor="exampleInputPhoneNumber1">Número telefónico</label>
                  <Form.Input type="string" name="celular" id="exampleInputPhoneNumber1" placeholder="Número telefónico" onBlur={handleBlur} onChange={getForm}/>
                </Form.Group>
              </Col>
              <Col className="d-flex align-items-center justify-content-center">
                <Button className="mt-3" primary outline type="submit" onClick={createUser} data-toggle="modal" data-target="#exampleModal" >Enviar</Button>             
              </Col>
            </Row>
          </Form>
        </Jumbotron>
      </Container>
    )
}

export default FormRegister