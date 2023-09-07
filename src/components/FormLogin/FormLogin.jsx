import { Form, Button } from 'bootstrap-4-react'

const FormLogin = () => {
  return(
    <Form>
      <Form.Group>
        <label htmlFor="exampleInputEmail1">Email address</label>
        <Form.Input type="email" id="exampleInputEmail1" placeholder="Enter email" />
      </Form.Group>

      <Form.Group>
        <label htmlFor="exampleInputPassword1">Password</label>
        <Form.Input type="password" id="exampleInputPassword1" placeholder="Password" />
      </Form.Group>

      <Button primary type="submit">Submit</Button>
    </Form>
  )
}

export default FormLogin