import { Form, Button } from 'bootstrap-4-react';
import { useState } from 'react';

const FormRegister = () => {

  const [form, setForm] = useState()

  const getForm = (e) => {
    console.log('Form!')
  }

    return(
      <Form>
        <Form.Group>
            <label htmlFor="exampleInputName1">Nombre</label>
            <Form.Input type="text" name="name" id="exampleInputName" placeholder="User" onChange={getForm}/>
        </Form.Group>

        <Form.Group>
            <label htmlFor="exampleInputLastName1">Apellido</label>
            <Form.Input type="text" id="exampleInputLastName" placeholder="User" onChange={getForm}/>
        </Form.Group>

        <Form.Group>
          <label htmlFor="exampleInputPassword1">Contraseña</label>
          <Form.Input type="password" id="exampleInputPassword1" placeholder="Password" onChange={getForm}/>
        </Form.Group>

        <Form.Group>
          <label htmlFor="exampleInputEmail1">correo electrónico</label>
          <Form.Input type="email" id="exampleInputEmail1" placeholder="Email" onChange={getForm}/>
        </Form.Group>

        <Form.Group>
          <label htmlFor="exampleInputPassport1">DNI / Pasaporte</label>
          <Form.Input type="number" id="exampleInpPassport" placeholder="DNI" onChange={getForm}/>
        </Form.Group>

        <Form.Group>
          <label htmlFor="exampleInputBirthDate1">Fecha de nacimiento</label>
          <Form.Input type="date" id="exampleInputBirthDate1" placeholder="Birth Date" onChange={getForm}/>
        </Form.Group>

        <Form.Group>
          <label htmlFor="exampleInputNacionality1">Nacionalidad</label>
          <Form.Input type="text" id="exampleInputNacionality1" placeholder="Nacionalidad" onChange={getForm}/>
        </Form.Group>

        <Form.Group>
          <label htmlFor="exampleInputPhoneNumber1">Número telefónico</label>
          <Form.Input type="number" id="exampleInputPhoneNumber1" placeholder="Número telefónico" onChange={getForm}/>
        </Form.Group>

        <Form.Group>
            <label htmlFor="exampleInputGender1">Seleccione su género</label>
            <Form.CustomRadio id="customRadio1" name="customRadio" onChange={getForm}>
                Masculino
            </Form.CustomRadio>

            <Form.CustomRadio id="customRadio2" name="customRadio" onChange={getForm}>
                Femenino
            </Form.CustomRadio>
        </Form.Group>

        <Button primary type="submit">Enviar</Button>
      </Form>
    )
}

export default FormRegister