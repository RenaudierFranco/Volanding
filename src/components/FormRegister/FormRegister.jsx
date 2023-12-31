import { Form, Button, Container, Row, Col, Alert, Progress, Jumbotron } from 'bootstrap-4-react';
import { db } from '../../Services/Firebase/Firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';

const FormRegister = () => {

  const navigate = useNavigate();
  const [confirmPassword, setConfirmPassword] = useState('');
  const [progressValue, setProgressValue] = useState(0);

  const redirect = () => {
    navigate('/FormLoginContainer');
  };

  const [form, setForm] = useState({
    name: '',
    lastName: '',
    password: '',
    email: '',
    passport: '',
    birthDate: '',
    nacionality: '',
    phone: '',
    gender: '',
  });

  const getForm = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    incrementProgress();
    console.log(form);
  };

  const createUser = async (e) => {
    e.preventDefault();
  
    if (isFormIncomplete(form)) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    if (form.password !== confirmPassword) {
      alert('Las contraseñas no coinciden. Por favor, intentalo de nuevo.');
      return;
    }

    try {
      console.log(form);
      const newClient = form;
  
      const clientCollection = collection(db, 'user');
      await addDoc(clientCollection, newClient);
  
      redirect();
    } catch (error) {
      console.error('Error al crear el usuario:', error.message);
      alert('Ocurrió un error al crear el usuario. Por favor, intentalo nuevamente.');
    }
  }

  const isFormIncomplete = (form) => {
    for (const key in form) {
        if (!form[key]) {
            return true;
        }
    }
    return false;
};

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

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
  };

  useEffect(() => {
    console.log('progressValue', progressValue);
  }, [progressValue]);

  const handleBlur = (e) => {
    const { value } = e.target;
    if (!value) {
      setProgressValue((prevProgress) => prevProgress - 11.1);
    }
  };
  

  return (
    <>
    <NavBar/>
    <Container
      className=" d-flex flex-column text-center align-items-center mt-5"
      style={{
        alignSelf: "center",
        maxWidth: "650px",
        marginRight: "auto",
        marginLeft: "auto",
      }}
    >
      <Jumbotron text="left" w="100" h="100" shadow p="3" mb="5" bg="light" rounded>
        <Alert primary className="w-100 mb-5 text-center">Acá inicia tu viaje 🏖️</Alert>
        <Progress mb="5">
          <Progress.Bar striped animated min="0" max="100" now={progressValue} bg='success' />
        </Progress>
        <Form className="w-100">
          <Row>
            <Col>
              <Form.Group>
                <label htmlFor="exampleInputName1">Nombre</label>
                <Form.Input type="text" name="name" id="exampleInputName" placeholder="Nombre" onBlur={handleBlur} onChange={getForm} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <label htmlFor="exampleInputLastName1">Apellido</label>
                <Form.Input type="text" name="lastName" id="exampleInputLastName" placeholder="Apellido" onBlur={handleBlur} onChange={getForm} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <label htmlFor="exampleInputEmail1">Correo Electrónico</label>
                <Form.Input type="email" name="email" id="exampleInputEmail1" placeholder="Mail" onBlur={handleBlur} onChange={getForm} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <label htmlFor="exampleInputPhoneNumber1">Número telefónico</label>
                <Form.Input type="string" name="phone" id="exampleInputPhoneNumber1" placeholder="Número telefónico" onBlur={handleBlur} onChange={getForm} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <label htmlFor="exampleInputPassword1">Contraseña</label>
                <Form.Input type="password" name="password" id="exampleInputPassword1" placeholder="Contraseña" onBlur={handleBlur} onChange={getForm} />
              </Form.Group>
            </Col>
            <Col> 
                <Form.Group>
                    <label htmlFor="exampleInputConfirmPassword1">Confirmar Contraseña</label>
                    <Form.Input type="password" name="confirmPassword" id="exampleInputConfirmPassword2" placeholder="Confirmar Contraseña" onChange={handleConfirmPasswordChange}/>
                </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <label htmlFor="exampleInputPassport1">DNI / Pasaporte</label>
                <Form.Input type="string" name="passport" id="exampleInpPassport" placeholder="Pasaporte" onBlur={handleBlur} onChange={getForm} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <label htmlFor="exampleInputNacionality1">Nacionalidad</label>
                <Form.Input type="text" name="nacionality" id="exampleInputNacionality1" placeholder="Nacionalidad" onBlur={handleBlur} onChange={getForm} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <label htmlFor="exampleInputBirthDate1">Fecha de nacimiento</label>
                <Form.Input type="date" name="birthDate" id="exampleInputBirthDate1" placeholder="Fecha de nacimiento" onBlur={handleBlur} onChange={getForm} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
              <label htmlFor="exampleInputBirthDate1">Género</label>
                <Form.CustomSelect type="select" name="gender" id="genderSelect1" defaultValue={'DEFAULT'}  onClick={handleBlur} onChange={getForm}>
                  <option value="Default">Género</option>
                  <option value="masculino">Masculino</option>
                  <option value="femenino">Femenino</option>
                </Form.CustomSelect>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex align-items-center justify-content-center">
              <Button className="mt-3" primary type="submit" onClick={createUser} data-toggle="modal" data-target="#exampleModal">  Enviar  </Button>
            </Col>
          </Row>
        </Form>
      </Jumbotron>
    </Container>
    <Footer/>
    </>
  );
};

export default FormRegister;