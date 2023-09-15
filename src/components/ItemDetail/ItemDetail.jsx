import { Card, ListGroup, Alert } from 'bootstrap-4-react';
import ItemCount from '../ItemCount/ItemCount';
import { Row, Col } from 'bootstrap-4-react/lib/components/layout';

const ItemDetail = ({item}) => {

    return(
      <>
      <Card w="100" shadow p="1" mb="5" bg="light" rounded mr="auto" style={{
        "align-self": "center", "max-width":"700px", "margin-right":"auto", "margin-left":"auto"
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
                  <ItemCount/>
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