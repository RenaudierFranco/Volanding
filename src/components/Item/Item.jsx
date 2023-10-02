import { Card, Alert } from 'bootstrap-4-react';
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
    <Col col="lg-4 md-6 sm-12" mt="3">
      <Card text="center" h="100" shadow p="3" bg="light" rounded>
        <Card.Header>
          <Card.Title m="2">
            Origen: {item.departure} 
          </Card.Title>
          <Card.Title m="2">
            Destino: {item.arrival}
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Title m="2">Fecha: {item.date}</Card.Title>
          <Card.Title m="2">Horario: {item.time}</Card.Title>
          <Card.Subtitle m="2" text="muted">U$S {item.price}.00</Card.Subtitle>
          <Card.Text m="2">Avión: {item.plane} / Plazas disponibles: {item.seat}</Card.Text>
          <Card.Image m="auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6OQXO2Y5Wg3-wavb5rXZTgI71ukhEft_zdg&usqp=CAU" />
          {log === true ?
            <Alert info><NavLink to={`/item/${item.id}`}>Ver detalle</NavLink></Alert>
           : 
           <Alert info mt="3">Iniciá sesión para ver los detalles</Alert>

          }
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Item;