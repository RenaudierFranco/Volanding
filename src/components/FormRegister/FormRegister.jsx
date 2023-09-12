import { Form, Button, Container, Row, Col, Alert, Progress, Jumbotron } from 'bootstrap-4-react';
import { useState } from 'react';
import { db } from '../../Services/Firebase/Firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';



const FormRegister = () => {
  
  const navigate = useNavigate();  
  const handleNavigate = () => {
    navigate('/FormLogin');
  };

  const handleButtonClick = () => {
    createUser();
    handleNavigate();
  };

  const [form, setForm] = useState({nombre:'', apellido:'', contrasena:'', mail:'', 
    pasaporte:'', fechaNacimiento:'', nacionalidad:'', celular:'', genero:''})

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
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [mail, setMail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [pasaporte, setPasaporte] = useState('');
  const [nacionalidad, setNacionalidad] = useState('');
  const [fechaNacimiento, setNaciemiento] = useState('');
  const [genero, setGenero] = useState('');
  const [celular, setCelular] = useState('');


  const incrementProgress = () => {
    let newProgressValue = 0;

    if (nombre) {
      newProgressValue += 11.1;
    }

    if (apellido) {
      newProgressValue += 11.1;
    }

    if (mail) {
      newProgressValue += 11.1;
    }

    if (contrasena) {
      newProgressValue += 11.1;
    }

    if (pasaporte) {
      newProgressValue += 11.1;
    }

    if (nacionalidad) {
      newProgressValue += 11.1;
    }

    if (fechaNacimiento) {
      newProgressValue += 11.1;
    }

    if (genero) {
      newProgressValue += 11.1;
    }

    if (celular) {
      newProgressValue += 11.1;
    }

    setProgressValue(newProgressValue);
  };

    const handleBlur = (e) => {
      const { value } = e.target;
      if (!value) {
        setProgressValue((prevProgress) => prevProgress - 11.1);
      }
    };



    return(
      <Container className=" d-flex flex-column text-center align-items-center mt-5" style={{"height" : "vh100", "width" : "auto"}}>
        
        <Jumbotron text="center" w="75" h="100" shadow p="3" mb="5" bg="light" rounded>

        <Alert className='w-100 mb-5' primary>Acá inicia tu viaje 🏖️</Alert>
    
        <Progress mb="5">
        <Progress.Bar striped animated min="0" max="100" now={progressValue} bg='success'/>
        </Progress>

          <Form className="w-100">
            <Row>
              <Col>
                <Form.Group>
                    <label htmlFor="exampleInputName1">Nombre</label>
                    <Form.Input type="text" name="nombre" id="exampleInputName" placeholder="Nombre" onBlur={handleBlur} onChange={(e) => { const value = e.target.value; setNombre(value); incrementProgress(); }}/>                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                    <label htmlFor="exampleInputLastName1">Apellido</label>
                    <Form.Input type="text" name="apellido" id="exampleInputLastName" placeholder="Apellido" onBlur={handleBlur} onChange={(e) => { const value = e.target.value; setApellido(value); incrementProgress();}}/>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <label htmlFor="exampleInputEmail1">Correo Electrónico</label>
                  <Form.Input type="email" name="mail" id="exampleInputEmail1" placeholder="Mail" onBlur={handleBlur} onChange={(e) => { const value = e.target.value; setMail(value); incrementProgress();}}/>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <label htmlFor="exampleInputPassword1">Contraseña</label>
                  <Form.Input type="password" name="contrasena" id="exampleInputPassword1" placeholder="Contraseña" onBlur={handleBlur} onChange={(e) => { const value = e.target.value; setContrasena(value); incrementProgress();}}/>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <label htmlFor="exampleInputPassport1">DNI / Pasaporte</label>
                  <Form.Input type="string" name="pasaporte" id="exampleInpPassport" placeholder="Pasaporte" onBlur={handleBlur} onChange={(e) => { const value = e.target.value; setPasaporte(value); incrementProgress();}}/>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <label htmlFor="exampleInputNacionality1">Nacionalidad</label>
                  <Form.Input type="text" name="nacionalidad" id="exampleInputNacionality1" placeholder="Nacionalidad" onBlur={handleBlur} onChange={(e) => { const value = e.target.value; setNacionalidad(value); incrementProgress();}}/>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <label htmlFor="exampleInputBirthDate1">Fecha de nacimiento</label>
                  <Form.Input type="date" name="fechaNacimiento" id="exampleInputBirthDate1" placeholder="Fecha de nacimiento" onBlur={handleBlur} onChange={(e) => { const value = e.target.value; setNaciemiento(value); incrementProgress();}}/>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <label htmlFor="exampleInputgender1">Seleccione un genero</label>
                  <Form.CustomSelect mb="3" name="genero" onBlur={handleBlur} onChange={(e) => { const value = e.target.value; setGenero(value); incrementProgress();}}>
                    <option value="Opciones">Opciones</option>
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
                  <Form.Input type="string" name="celular" id="exampleInputPhoneNumber1" placeholder="Número telefónico" onBlur={handleBlur} onChange={(e) => { const value = e.target.value; setCelular(value); incrementProgress();}}/>
                </Form.Group>
              </Col>
              <Col className="d-flex align-items-center justify-content-center">
                <Button className="mt-3" primary outline type="submit" onClick={handleButtonClick}>Enviar</Button>
              </Col>
            </Row>
          </Form>
        </Jumbotron>
      </Container>
    )
}

export default FormRegister