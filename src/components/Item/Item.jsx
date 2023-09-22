import { Card } from 'bootstrap-4-react';
import { Button } from 'bootstrap-4-react/lib/components';
import { Col } from 'bootstrap-4-react/lib/components/layout';
import { NavLink } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { UserContext } from '../../Context/UserContext';


const Item = ({ item }) => {

  const { log, setLog} = useContext(UserContext)
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      setLog(true);
    }
  }, []);

  
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
          <Card.Text>Avión: {item.plane} / Plazas disponibles: {item.seat}</Card.Text>
          <Card.Image mb="3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6OQXO2Y5Wg3-wavb5rXZTgI71ukhEft_zdg&usqp=CAU" />
          {log === true ?
            <Button><NavLink to={`/item/${item.id}`}>Ver detalle</NavLink></Button>
           : 
            <span style={{"margin":"5%"}}>Iniciá sesión para ver los detalles</span>
          }
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Item;