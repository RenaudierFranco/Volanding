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

  const logUser = async (e) => {
    e.preventDefault();

    if (isFormIncomplete(form)) {
      alert('Por favor, completá todos los campos.');
      return;
  }

    try {
        const snapshot = await getDocs(collection(db, 'user'));
        const users = snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
        });

        console.log('users: ', users);
        console.log('form.email: ', form.email);

        const findUser = users.find((user) => user.email === form.email);
        console.warn(users.find((user) => user.email === form.email));
        console.log('findUser: ', findUser);

        if (findUser) {
            setUser(findUser);

            if (findUser.password === form.password && findUser.email === form.email) {
                console.log('Credenciales correctas');
                localStorage.setItem('user', JSON.stringify(findUser));
                localStorage.removeItem('operator');
                console.log('findUser: ', findUser);
                handleLoginSuccess(findUser);

                redirect();
            } else {
                console.log('Credenciales incorrectas', 'User: ', user);
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
          <Button className="m-3" primary type="submit" onClick={logUser}>Iniciar sesión</Button>
          <Button className="m-3" primary type="submit"><NavLink to='/FormRegister'
          style={{'textDecoration': 'none', 'color': '#FFFFFF'}}>Nuevo usuario</NavLink></Button>
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