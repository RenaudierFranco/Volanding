import { Card } from 'bootstrap-4-react';
import { Button } from 'bootstrap-4-react/lib/components';
import { NavLink } from 'react-router-dom';

const Item = ({item}) => {

    return (
      <Card text="center" w="50" h="100" shadow p="3" mb="5" bg="light" rounded>
        <Card.Header>Origen - Destino</Card.Header>
        <Card.Image src={item.img} />
        <Card.Body>
            <Card.Title>Fecha</Card.Title>
            <Card.Title>Horario</Card.Title>
            <Card.Title>Duración</Card.Title>
            <Card.Subtitle mb="2" text="muted">U$S 100.00</Card.Subtitle>
            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        </Card.Body>
        <Card.Footer>
            <Button><NavLink to='/item/D4o11AYWlHzD6zx1TuTs'>Ver detalle</NavLink></Button>
        </Card.Footer>
      </Card>
    )
}

export default Item;