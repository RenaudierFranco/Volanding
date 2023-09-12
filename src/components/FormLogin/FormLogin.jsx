import { Form, Button, Jumbotron, Card, BSmall, Alert } from 'bootstrap-4-react'
import { Container } from 'bootstrap-4-react/lib/components/layout'
import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Services/Firebase/Firebase";
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const FormLogin = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({});
  const [form, setForm] = useState({email: "", password: ""}) ;

  const getForm = (e) => {
    const {name, value } = e.target
      setForm({...form, [name]: value});
  }

  const logUser = (e) => {
    e.preventDefault()
    getDocs(collection(db, 'user')).then((snapshot)=> {
      const users = snapshot.docs.map(doc => {
          return {id: doc.id, ...doc.data()}
      })
      setUser(users.find(user => user.email === form.email))
      if(user.password === form.password && user.email===form.email){
        navigate('/home');
      } else {
        alert('Credenciales incorrectas')
      }
      
    })
  }

  return(
    <Container className=" d-flex flex-column text-center align-items-center mt-5">
      
      <Jumbotron text="center" w="50" h="100" shadow p="3" mb="5" bg="light" rounded>
        <Form className="">
          <Form.Group>
            <label htmlFor="exampleInputEmail1">Email</label>
            <Form.Input name="email" type="email" id="exampleInputEmail1" placeholder="Enter email" onChange={getForm} />
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
        </Form>
        <Card.Text className="text-center mt-3" style={{"color" : "#000000"}}><BSmall text="">Llegá donde querés estar, siempre Ⓡ</BSmall></Card.Text>
      </Jumbotron>
    </Container>
  )
}

export default FormLogin