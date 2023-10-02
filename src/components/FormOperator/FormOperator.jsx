import { Form, 
    Button, 
    Container, 
    Row, 
    Col, 
    Jumbotron, 
    Alert, 
    Card, 
    BSmall, 
    Navbar, 
    BImg } from 'bootstrap-4-react';
import { useState, useContext } from 'react';
import { db } from '../../Services/Firebase/Firebase'
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { UserContext } from '../../Context/UserContext';

  
const FormOperator = () => {
    const { setOperator } = useContext(UserContext)
    const [ logForm, setLogForm ] = useState({email: "", password: ""});
    const [ register, setRegister ] = useState(true)
    const [ form, setForm] = useState({email:'', password:''})
    const [ confirmPassword, setConfirmPassword ] = useState('');
    const navigate = useNavigate();

    const redirect = () => {
        navigate('/FlightStatusContainer');
      };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const getLogForm = (e) => {
        const {name, value } = e.target
        setLogForm({...logForm, [name]: value});
        console.log(logForm)
    }

    const handleLogin = async (e) => {
        e.preventDefault();

        if (isFormIncomplete(logForm)) {
            alert('Por favor, completá todos los campos.');
            return;
        }

        try {
            const snapshot = await getDocs(collection(db, 'operator'));
            const users = snapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
            });
    
            console.log('users: ', users);
            console.log('form: ', logForm)
            console.log('form.email: ', logForm.email);
    
            const findUser = users.find((user) => user.email === logForm.email);
            console.warn(users.find((user) => user.email === logForm.email));
            console.log('findUser: ', findUser);
    
            if (findUser) {
                if (findUser.password === logForm.password && findUser.email === logForm.email) {
                    console.log('Credenciales correctas');
                    setOperator(findUser)
                    localStorage.setItem('operator', JSON.stringify(findUser));
                    console.log('findUser: ', findUser);
                    redirect();
                } else {
                    console.log('Credenciales incorrectas', 'operator: ');
                    alert('Credenciales incorrectas');
                }
            } else {
                console.log('Usuario no encontrado');
                alert('Usuario no encontrado');
            }
        } catch (error) {
            console.error('Error al intentar iniciar sesión:', error.message);
            alert('Ha ocurrido un error al intentar iniciar sesión. Por favor, intentalo de nuevo más tarde.');
        }
    }

    const handleRegister = (e) => {
        e.preventDefault()
        if(register){
            setRegister(false)
        }else{
            setRegister(true)
        }
    }

    const getForm = (e) => {
        const {name, value } = e.target
        setForm({...form, [name]: value});
        console.log(form)
    }

    const createOperatorUser = async (e) => {
        e.preventDefault();

        if (isFormIncomplete(form)) {
            alert('Por favor, completá todos los campos.');
            return;
        }

        if (form.password !== confirmPassword) {
            alert('Las contraseñas no coinciden. Por favor, intentalo de nuevo.');
            return;
        }
    
        const newOperator = form;
        const operatorCollection = collection(db, 'operator');
    
        try {
            await addDoc(operatorCollection, newOperator);
            alert('¡El usuario se generó correctamente!');
            redirect();
        } catch (error) {
            console.error('Error al agregar el documento:', error);
            alert('Hubo un error al generar el ususario. Por favor, intentalo de nuevo.');
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
        <>
            <Navbar light bg="light">
                <Navbar.Brand href="#">
                <BImg
                    src={"https://i.ibb.co/TwdYpf5/unnamed.png"}
                    width="30"
                    height="30"
                    display="inline-block"
                    align="top"
                    mr="1"
                />
                Volanding
                </Navbar.Brand>
            </Navbar>
            {
            register?
            <Container className=" d-flex flex-column text-center align-items-center" w="100" mt="5">
                <Jumbotron text="center" h="100" shadow p="3" mb="5" bg="light" rounded>
                    <Form className="">
                    <Form.Group>
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <Form.Input name="email" type="email" id="exampleInputEmail1" placeholder="Enter email" onChange={getLogForm}/>
                    </Form.Group>
                    <Form.Group>
                    <label htmlFor="exampleInputPassword1">Contraseña</label>
                    {
                    logForm.email.length < 5?
                    <Alert dark>*******</Alert>
                    :
                    <Form.Input name="password" type="password" id="exampleInputPassword1" placeholder="Password" onChange={getLogForm}/>
                    }          
                    </Form.Group>
                    <Button className="m-3" primary outline type="submit" onClick={handleLogin}>Iniciar sesión</Button>
                    <Button className="m-3" primary outline type="submit" onClick={handleRegister}>Registrarse</Button>
                    <div>
                        <a href="https://youtu.be/dQw4w9WgXcQ">¿Olvidaste tu contraseña?</a>
                    </div>
                    </Form>
                    <Card.Text className="text-center mt-3" style={{"color" : "#000000"}}><BSmall text="">Llegá donde querés estar, siempre Ⓡ</BSmall></Card.Text>
                </Jumbotron>
            </Container>
            :
            <Container
            className=" d-flex flex-column text-center align-items-center"
            style={{
            alignSelf: "center",
            maxWidth: "650px",
            marginRight: "auto",
            marginLeft: "auto",
            }}
            mt="3"
            >
                <Jumbotron text="center" w="100" h="100" shadow p="3" mb="5" bg="light" rounded>
                    <Alert className="w-100 mb-5" info>Registrarse como operador</Alert>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <label htmlFor="exampleInputOrigin1">Nombre y apellido</label>
                                    <Form.Input type="text" name="name" id="exampleInputName2" placeholder="Nombre y apellido" onChange={getForm}/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <label htmlFor="exampleInputPlane1">Usuario</label>
                                    <Form.Input type="text" name="user" id="exampleInputUser2" placeholder="Usuario" onChange={getForm}/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col> 
                                <Form.Group>
                                    <label htmlFor="exampleInputPlane1">Contraseña</label>
                                    <Form.Input type="password" name="password" id="exampleInputPassword2" placeholder="Contraseña" onChange={getForm}/>
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
                                    <label htmlFor="exampleInputSchedule1">Empresa</label>
                                    <Form.Input type="text" name="brand" id="exampleInputBrand2" placeholder="Nombre de la empresa" onChange={getForm}/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <label htmlFor="exampleInputBirthDate1">Email</label>
                                    <Form.Input type="email" name="email" id="exampleInputEmail2" placeholder="Correo electrónico" onChange={getForm} />
                                </Form.Group>
                        </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <label htmlFor="exampleInputPlane1">Teléfono</label>
                                    <Form.Input type="number" name="phone" id="exampleInputPhone2" placeholder="Número de contacto" onChange={getForm}/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <label htmlFor="exampleInputPlane1">Págnia web</label>
                                    <Form.Input type="text" name="web" id="exampleInputWeb2" placeholder="Página web" onChange={getForm}/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Button mt="3" mr="2" primary type="submit" onClick={handleRegister}>Volver</Button>
                        <Button mt="3" ml="2" primary type="submit" onClick={createOperatorUser}>Registrarse</Button>
                    </Form>
                </Jumbotron>
            </Container>
            }
            <Footer/>
        </>
    )
}

export default FormOperator;