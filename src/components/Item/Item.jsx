import { Card } from 'bootstrap-4-react';
import { Button } from 'bootstrap-4-react/lib/components';
import { Col } from 'bootstrap-4-react/lib/components/layout';
import { NavLink } from 'react-router-dom';

/*
const Item = ({item}) => {

    return (
      <Col col="lg-4 md-6 sm-12">
        <Card text="center" h="100" shadow p="3" bg="light" rounded>
          <Card.Header>
            <Card.Title>
              {item.departure} - {item.arrival}
            </Card.Title>
          </Card.Header>
          <Card.Body>
              <Card.Title>Fecha: {item.date}</Card.Title>
              <Card.Title>Horario: {item.time}</Card.Title>
              <Card.Subtitle mb="2" text="muted">U$S {item.price}.00</Card.Subtitle>
              <Card.Text>Avion: {item.plane} / Plazas disponibles: {item.seat}</Card.Text>
          <Card.Image 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6OQXO2Y5Wg3-wavb5rXZTgI71ukhEft_zdg&usqp=CAU"/>
            <Button ><NavLink to={`/item/${item.id}`}>Ver detalle</NavLink></Button>
          </Card.Body>
        </Card>   
      </Col>   
    )
}
*/



import FlightCollection from '../../Services/Collections/FlightCollection.json';

const Item = ({ item }) => {
  return (
    <Col col="lg-4 md-6 sm-12">
      <Card text="center" h="100" shadow p="3" bg="light" rounded>
        <Card.Header>
          <Card.Title>
            {item.departure} - {item.arrival}
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Title>Fecha: {item.date}</Card.Title>
          <Card.Title>Horario: {item.time}</Card.Title>
          <Card.Subtitle mb="2" text="muted">U$S {item.price}.00</Card.Subtitle>
          <Card.Text>Avion: {item.plane} / Plazas disponibles: {item.seat}</Card.Text>
          <Card.Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6OQXO2Y5Wg3-wavb5rXZTgI71ukhEft_zdg&usqp=CAU" />
          <Button><NavLink to={`/item/${item.id}`}>Ver detalle</NavLink></Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

const ItemList = () => {

  return (
    <div>
      {FlightCollection.map((flight) => (
        <Item key={flight.id} item={flight} />
      ))}
    </div>
  );
};

export default Item;