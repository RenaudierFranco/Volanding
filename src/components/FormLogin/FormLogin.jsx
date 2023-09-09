import { Form, Button, Jumbotron, Card, BSmall } from 'bootstrap-4-react'
import { Container } from 'bootstrap-4-react/lib/components/layout'

const FormLogin = () => {

  return(
    <Container className=" d-flex flex-column text-center align-items-center mt-5">
      
      <Jumbotron>

        <Form className="">
          <Form.Group>
            <label htmlFor="exampleInputEmail1">Email</label>
            <Form.Input name="email" type="email" id="exampleInputEmail1" placeholder="Enter email" />
          </Form.Group>
          <Form.Group>
            <label htmlFor="exampleInputPassword1">Contraseña</label>
            <Form.Input type="password" id="exampleInputPassword1" placeholder="Password" />
          </Form.Group>
          <Button className="m-3" primary type="submit">Iniciar sesión</Button>
          <Button className="m-3" primary type="submit">Nuevo usuario</Button>
        </Form>
        <Card.Text className="text-center mt-3" style={{"color" : "#000000"}}><BSmall text="">Llegá donde querés estar, siempre Ⓡ</BSmall></Card.Text>
      </Jumbotron>
    </Container>
  )
}

export default FormLogin