import { Card, ListGroup } from 'bootstrap-4-react';
import ItemCount from '../ItemCount/ItemCount';
import { Row, Col } from 'bootstrap-4-react/lib/components/layout';

const ItemDetail = ({item}) => {

    return(
      <>
      <Card w="50" shadow p="3" mb="5" bg="light" rounded>
        <Card.Header>El detalle de tu vuelo✈️</Card.Header>
        <Card.Image 
        src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN4w4bZB7xBsHiZkFBNdZCyxCqvs9cC0QVQA&usqp=CAU"}/>
            <Card.Body>
              <Row>
                <Col>
                  <Card h="100" shadow="sm" p="3" mb="5" bg="light">
                    <Card.Header>Tu vuelo✈️</Card.Header>
                    <ListGroup flush>
                      <ListGroup.Item><Card.Title>Origen: San Fernando</Card.Title></ListGroup.Item>
                      <ListGroup.Item><Card.Title>Destino: Cordoba Capital</Card.Title></ListGroup.Item>
                      <ListGroup.Item><Card.Subtitle text="muted">Salida: 08-09-2023</Card.Subtitle></ListGroup.Item>
                      <ListGroup.Item><Card.Text>Valor: U$S 100,00</Card.Text></ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Col>
                <Col>              
                  <ItemCount/>
                </Col>
              </Row>
            </Card.Body>

            <Card.Subtitle  text="muted">Avión: C208B</Card.Subtitle>
            <Card.Image src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSidb5ujE1GdPF_wHDHXaiEsXcVWdYUFWQgcA&usqp=CAU"}/>
            <Card.Footer>
            <Card.Link href="#">Conocé más sobre el prestador del servicio👨🏼‍✈️ </Card.Link>|
            <Card.Link href="#"> Conocé mas sobre tu avión</Card.Link>
            </Card.Footer>
      </Card>
      </>
    )
}

export default ItemDetail;