import React, { useEffect, useState } from 'react';
import { Card, Button, Jumbotron, Display4, Lead, Nav} from 'bootstrap-4-react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../Services/Firebase/Firebase';
import { useParams, NavLink } from "react-router-dom";
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';


const MyFlights = () => {
  const [items, setItems] = useState([]);
  const { userId } = useParams();
  const [visibleContent, setVisibleContent] = useState(false);

  useEffect(() => {
    getDocs(collection(db, 'flightOrder')).then((snapshot) => {
      console.log(snapshot);
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      const userFlights = data.filter(item => item.buyer.id === userId);
      console.log(userFlights);
      setItems(userFlights);
    });
  }, [userId]);

  const deleteFlight = async (flightId) => {
    const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar este vuelo?');

    if (confirmDelete) {
      try {
        await deleteDoc(doc(db, 'flightOrder', flightId));

        setItems((prevItems) => prevItems.filter((item) => item.id !== flightId));
      } catch (error) {
        console.error('Error al dar de baja el vuelo:', error);
      }
    }
  };

  const toggleContent = (e) => {
    console.log('toggleContent')
    e.preventDefault()
    if(visibleContent){
      setVisibleContent(false)
    }else{
        setVisibleContent(true)
    }
  };


  return (
    <>
    <NavBar/>
    <div className=" d-flex flex-column text-center align-items-center">

      {items.length === 0?
        <>
          <Jumbotron className="text-center m-5" h="100" shadow p="3" bg="light" rounded>
            <Display4>¡Lo siento!</Display4>
            <Lead>No pudimos encontrar ningún vuelo en esta sección</Lead>
            <hr className="my-4" />
            <p>Asegurate de haber realizado alguna reserva</p>
            <NavLink to='/home'><Button info outline style={{"width" : "300px"}}>Buscar vuelos</Button></NavLink>
          </Jumbotron>
        </>
        :
        <>
          {items.map((item) => (
            <Card text="center" mb="5" style={{ width : '30rem', textDecoration : 'none' }}>
              <Card.Header>
                <Nav cardHeaderPills>
                  <Nav.ItemLink active onClick={ toggleContent }>Detalle</Nav.ItemLink>
                </Nav>
              </Card.Header>
              <Card.Body>
                {
                  visibleContent ?
                  <>
                    <Card.Title>{item.item.departure} - {item.item.arrival}</Card.Title>
                    <Card.Text>Fecha: {item.item.date}</Card.Text>
                    <Card.Text>Horario: {item.item.time}</Card.Text>
                    <Card.Text>Avion: {item.item.plane}</Card.Text>
                    <Card.Text>Precio: U$S {item.item.price}</Card.Text>

                    <Button danger outline variant="danger" mt="3" ml="3" onClick={() => deleteFlight(item.id)}>Eliminar</Button>
                  </>
                  :
                  <Card.Title>{item.item.departure} - {item.item.arrival}</Card.Title>
                }
              </Card.Body>
            </Card>
          ))}
        </>
      }
    </div>
    <Footer/>
    </>
  );
}

export default MyFlights;