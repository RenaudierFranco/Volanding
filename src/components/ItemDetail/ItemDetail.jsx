import { Card, ListGroup, Alert, Button } from 'bootstrap-4-react';
import ItemCount from '../ItemCount/ItemCount';
import { Row, Col } from 'bootstrap-4-react/lib/components/layout';
import { useState } from 'react';

const ItemDetail = ({item, orderPurchase}) => {

    const [count, setCount] = useState(1);
    const [buy, setBuy] = useState(false);

    const increment = ()=> {
      if (count < item.seat) {
          setCount (count + 1) 
      }
  }

    const decrement = ()=> {
      if (count > 1) {
      setCount (count -1) 
      }
  }

    const orderConfirm = ()=> {
      setBuy(true)
      localStorage.setItem('count', count)
    }

    return(
      <>
      <Card w="100" shadow p="1" mb="5" bg="light" rounded mr="auto" style={{
        "alignSelf": "center", "maxWidth":"700px", "marginRight":"auto", "marginLeft":"auto"
        }}>
        <Alert primary>El detalle de tu vuelo✈️</Alert>
            <Card.Body p="3">
              <Row>
                <Col col="12">
                <Card.Image shadow p="0" mb="5" bg="light" 
                  src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN4w4bZB7xBsHiZkFBNdZCyxCqvs9cC0QVQA&usqp=CAU"}/>
                </Col>
                <Col col="12" mt="3" mb="3">
                  <Card h="100" shadow="sm" p="3" mb="5" bg="light" className="text-center">
                    <Alert primary>Tu vuelo✈️</Alert>
                    <ListGroup flush border="light" >
                      <ListGroup.Item><Card.Title>Origen: {item.departure}</Card.Title></ListGroup.Item>
                      <ListGroup.Item><Card.Title>Destino: {item.arrival}</Card.Title></ListGroup.Item>
                      <ListGroup.Item><Card.Subtitle text="muted">Salida: {item.date}, {item.time}</Card.Subtitle></ListGroup.Item>
                      <ListGroup.Item><Card.Text>Valor: U$S {item.price},00</Card.Text></ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Col>
                <Col col="12" mt="3" mb="3">
                  {
                  buy?              
                  <div className="text-center">
                    <Alert success>¡Confirmá tu lugar!
                      <Button success m="3" onClick={orderPurchase}>Confirmar</Button>
                      <Button danger onClick={()=> {setBuy(false)}}>Cancelar</Button>
                    </Alert>
                  </div>
                  :
                  <ItemCount increment={increment} decrement={decrement} onConfirm={orderConfirm} count={count}/>
                  }
                </Col>
                <Col col="12">
                  <Card.Subtitle  text="muted" mb="3" mt="3">Avión: {item.plane}</Card.Subtitle>
                  <Card.Image shadow p="0" mb="5" bg="light" 
                  src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSidb5ujE1GdPF_wHDHXaiEsXcVWdYUFWQgcA&usqp=CAU"}/>
                </Col>
              </Row>
            </Card.Body>
            <Alert dark className="text-center">
            <Card.Link href="#">Conocé más sobre el prestador del servicio👨🏼‍✈️ </Card.Link>|
            <Card.Link href="#"> Conocé mas sobre tu avión</Card.Link>
            </Alert>
      </Card>
      </>
    )
}

export default ItemDetail;