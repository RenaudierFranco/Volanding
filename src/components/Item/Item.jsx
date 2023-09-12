import { Card } from 'bootstrap-4-react';
import { Button } from 'bootstrap-4-react/lib/components';
import { NavLink } from 'react-router-dom';

const Item = ({item}) => {
  console.log('itemmm', item)

    return (
      <Card text="center" w="25" h="100" shadow p="3" bg="light" rounded>
        <Card.Header>
          <Card.Title>
            {item.departure} - {item.arrival}
          </Card.Title>
        </Card.Header>
        <Card.Body>
            <Card.Title>Fecha: {item.date}</Card.Title>
            <Card.Title>Horario: {item.time}</Card.Title>
            <Card.Subtitle mb="2" text="muted">U$S {item.price}.00</Card.Subtitle>
            <Card.Text>Avion: {item.plane} / Cantidad de plazas: {item.seat}</Card.Text>
        <Card.Image 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6OQXO2Y5Wg3-wavb5rXZTgI71ukhEft_zdg&usqp=CAU"/>
          <Button ><NavLink to='/item/D4o11AYWlHzD6zx1TuTs'>Ver detalle</NavLink></Button>
        </Card.Body>
      </Card>
    )
}

export default Item;