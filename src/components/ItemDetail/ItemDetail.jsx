import { Card } from 'bootstrap-4-react';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({item}) => {

    return(
        <Card style={{ width: '18rem' }} className="m-3">
        <Card.Header>El detalle de tu vuelo ✈️</Card.Header>
        <Card.Image src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN4w4bZB7xBsHiZkFBNdZCyxCqvs9cC0QVQA&usqp=CAU"}/>
        <Card.Body>
          <Card.Title>Origen: San Fernando</Card.Title>
          <Card.Title>Destino: Cordoba Capital</Card.Title>
          <Card.Subtitle mb="2" text="muted">Salida: 08-09-2023</Card.Subtitle>
          <Card.Subtitle mb="2" text="muted">Horario: 12:30 am</Card.Subtitle>
          <Card.Text>Valor: U$S 100,00</Card.Text>
          <ItemCount/>
          <Card.Subtitle mb="2" text="muted">Avión: C208B</Card.Subtitle>
        <Card.Image src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSidb5ujE1GdPF_wHDHXaiEsXcVWdYUFWQgcA&usqp=CAU"}/>
        </Card.Body>
        <Card.Footer>
          <Card.Link href="#">Seleccionar asiento</Card.Link>
          <Card.Link href="#">Ver detalles</Card.Link>
        </Card.Footer>
      </Card>
    )
}

export default ItemDetail;