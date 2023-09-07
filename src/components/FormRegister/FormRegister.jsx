import { Form, Button } from 'bootstrap-4-react';
import { useState } from 'react';
import { db } from '../../Services/Firebase/Firebase'
import { collection, addDoc } from 'firebase/firestore';


const FormRegister = () => {

  const [form, setForm] = useState({nombre:'', apellido:'', contrasena:'', mail:'', 
    pasaporte:'', fechaNacimiento:'', nacionalidad:'', celular:0, genero:''})

  const [user, setUser] = useState({})

  const getForm = (e) => {
    const {name, value } = e.target
      setForm({...form, [name]: value});

    console.log(form)
  }

  const createUser = (e) => {
    e.preventDefault()

    const newClient = form

    const clientCollection = collection(db, 'Cliente')
    addDoc(clientCollection, newClient)
  }

    return(
      <Form>
        <Form.Group>
            <label htmlFor="exampleInputName1">Nombre</label>
            <Form.Input type="text" name="nombre" id="exampleInputName" placeholder="User" onChange={getForm}/>
        </Form.Group>

        <Form.Group>
            <label htmlFor="exampleInputLastName1">Apellido</label>
            <Form.Input type="text" name="apellido" id="exampleInputLastName" placeholder="User" onChange={getForm}/>
        </Form.Group>

        <Form.Group>
          <label htmlFor="exampleInputPassword1">Contraseña</label>
          <Form.Input type="password" name="contrasena" id="exampleInputPassword1" placeholder="Password" onChange={getForm}/>
        </Form.Group>

        <Form.Group>
          <label htmlFor="exampleInputEmail1">Correo Electrónico</label>
          <Form.Input type="email" name="mail" id="exampleInputEmail1" placeholder="Email" onChange={getForm}/>
        </Form.Group>

        <Form.Group>
          <label htmlFor="exampleInputPassport1">DNI / Pasaporte</label>
          <Form.Input type="number" name="pasaporte" id="exampleInpPassport" placeholder="DNI" onChange={getForm}/>
        </Form.Group>

        <Form.Group>
          <label htmlFor="exampleInputBirthDate1">Fecha de nacimiento</label>
          <Form.Input type="date" name="fechaNacimiento" id="exampleInputBirthDate1" placeholder="Birth Date" onChange={getForm}/>
        </Form.Group>

        <Form.Group>
          <label htmlFor="exampleInputNacionality1">Nacionalidad</label>
          <Form.Input type="text" name="nacionalidad" id="exampleInputNacionality1" placeholder="Nacionalidad" onChange={getForm}/>
        </Form.Group>

        <Form.Group>
          <label htmlFor="exampleInputPhoneNumber1">Número telefónico</label>
          <Form.Input type="number" name="celular" id="exampleInputPhoneNumber1" placeholder="Número telefónico" onChange={getForm}/>
        </Form.Group>

        <Form.Group>
          <label htmlFor="exampleInputgender1">Seleccione un genero</label>
          <Form.CustomSelect mb="3" name="genero" onChange={getForm}>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
          </Form.CustomSelect>
        </Form.Group>

        <Button primary type="submit" onClick={createUser} >Enviar</Button>
      </Form>
    )
}

export default FormRegister