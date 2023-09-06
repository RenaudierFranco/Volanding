import { Form, Button } from 'bootstrap-4-react'

const FormRegister = () => {
    return(
        <Form>
        <Form.Group>
            <label htmlFor="exampleInputUser1">User</label>
            <Form.Input type="user" id="exampleInputUser" placeholder="User" />
        </Form.Group>

        <Form.Group>
          <label htmlFor="exampleInputPassword1">Password</label>
          <Form.Input type="password" id="exampleInputPassword1" placeholder="Password" />
        </Form.Group>

        <Form.Group>
          <label htmlFor="exampleInputEmail1">Email address</label>
          <Form.Input type="email" id="exampleInputEmail1" placeholder="Email" />
        </Form.Group>

        <Form.Group>
          <label htmlFor="exampleInputDNI1">DNI</label>
          <Form.Input type="number" id="exampleInputEmail1" placeholder="DNI" />
        </Form.Group>

        <Form.Group>
          <label htmlFor="exampleInputPasaport1">Pasaport</label>
          <Form.Input type="number" id="exampleInputPasaport1" placeholder="Pasaport" />
        </Form.Group>

        <Form.Group>
          <label htmlFor="exampleInputBirthDate1">Birth Date </label>
          <Form.Input type="Date" id="exampleInputBirthDtae1" placeholder="Birth Date" />
        </Form.Group>

        <Form.Group>
          <label htmlFor="exampleInputNacionality1">Nacionality</label>
          <Form.CustomSelect sm mb="3">
          <option selected>Select your country</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.CustomSelect>
        </Form.Group>

        <Form.Group>
          <label htmlFor="exampleInputPhoneNumber1">Phone Number</label>
          <Form.Input type="number" id="exampleInputPhoneNumber1" placeholder="Phone Number" />
        </Form.Group>

        <Form.Group>
            <label htmlFor="exampleInputGender1">Select your gender</label>
            <Form.CustomRadio id="customRadio1" name="customRadio">
                Masculine
            </Form.CustomRadio>

            <Form.CustomRadio id="customRadio2" name="customRadio">
                Female
            </Form.CustomRadio>

            <Form.CustomRadio id="customRadio3" name="customRadio" mb="3">
                Other
            </Form.CustomRadio>
        </Form.Group>

        <Button primary type="submit">Submit</Button>
      </Form>
    )
}

export default FormRegister