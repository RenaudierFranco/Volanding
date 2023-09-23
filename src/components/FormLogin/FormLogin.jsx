import { Form, Button, Jumbotron, Card, BSmall, Alert } from 'bootstrap-4-react'
import { Container } from 'bootstrap-4-react/lib/components/layout'
import { useState, useContext } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Services/Firebase/Firebase";
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import { useNavigate } from 'react-router-dom';


const FormLogin = ( ) => {
  
  const Navigate = useNavigate();
  const redirect = () => {
    Navigate('/home');
  };

  const { handleLoginSuccess } = useContext(UserContext)

  const [form, setForm] = useState({email: "", password: ""});
  const [ user, setUser ] = useState({});

  const getForm = (e) => {
    const {name, value } = e.target
      setForm({...form, [name]: value});
      console.log('form', form)
  }

  const logUser = (e) => {
    e.preventDefault()

    console.log('datos del usuario ',form)

    getDocs(collection(db, 'user')).then((snapshot) => {
      const users = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      console.log('users?', users)
      console.log('form.email', form.email)
      users.forEach(user => {
        console.log('useeers', user.email)
      });
      const findUser = users.find(user => user.email === form.email);
      console.warn(users.find((user) => user.email === form.email));
      console.log('findUser', findUser)
      if (findUser) {
        setUser(findUser);

        if (findUser.password === form.password && findUser.email === form.email) {
          console.log('Credenciales correctas');
          localStorage.setItem('user', JSON.stringify(findUser));
          handleLoginSuccess();
          
          redirect()
        } else {
          console.log('Credenciales incorrectas', 'Usuario = ', user);
        }
      } else {
        console.log('Usuario no encontrado');
      }
    });
  }


  return(
    <Container className=" d-flex flex-column text-center align-items-center" w="100">
      <Jumbotron text="center" h="100" shadow p="3" mb="5" bg="light" rounded>
        <Form className="">
          <Form.Group>
            <label htmlFor="exampleInputEmail1">Email</label>
            <Form.Input name="email" type="email" id="exampleInputEmail1" placeholder="Enter email" onChange={getForm}/>
          </Form.Group>
          <Form.Group>
            <label htmlFor="exampleInputPassword1">Contraseña</label>
            {
              form.email.length < 5?
              <Alert dark>*******</Alert>
              :
              <Form.Input name="password" type="password" id="exampleInputPassword1" placeholder="Password" onChange={getForm}/>
            }          
          </Form.Group>
          <Button className="m-3" primary outline type="submit" onClick={logUser}>Iniciar sesión</Button>
          <Button className="m-3" primary outline type="submit"><NavLink to='/FormRegister'
          style={{'textDecoration': 'none'}}>Nuevo usuario</NavLink></Button>
          <div>
            <a href="https://youtu.be/dQw4w9WgXcQ">¿Olvidaste tu contraseña?</a>
          </div>
        </Form>
        <Card.Text className="text-center mt-3" style={{"color" : "#000000"}}><BSmall text="">Llegá donde querés estar, siempre Ⓡ</BSmall></Card.Text>
      </Jumbotron>
    </Container>
  )
}

export default FormLogin