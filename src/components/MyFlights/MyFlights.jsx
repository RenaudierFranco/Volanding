import React, { useEffect, useState } from 'react';
import { Card, Button, Jumbotron, Display4, Lead } from 'bootstrap-4-react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../Services/Firebase/Firebase';
import { useParams, NavLink } from "react-router-dom";
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';


const MyFlights = () => {
  const [items, setItems] = useState([]);
  const { userId } = useParams();
  const [visibleContent, setVisibleContent] = useState({});

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

  const toggleContent = (flightId) => {
    setVisibleContent((prevState) => ({
      ...prevState,
      [flightId]: !prevState[flightId],
    }));
  };

  return (
    <>
    <NavBar/>
    <div className=" d-flex flex-column text-center align-items-center">

    <React.Fragment>
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
        <Card.Deck className="d-flex justify-content-center align-items-center text-center">
          {items.map((item) => (
            <Card key={item.id} shadow p="3" mb="5" mt="5" bg="transparent" rounded style={{"max-width":"400px"}}>
              <Card.Body>
                <div>
                  <Card.Title mb="3">
                    <strong>{item.item.departure} - {item.item.arrival}</strong>
                  </Card.Title>
                </div>
                <div style={{ display: visibleContent[item.id] ? 'block' : 'none' }}>
                  <div><Card.Title>Fecha: {item.item.date}</Card.Title></div>
                  <div><Card.Title>Horario: {item.item.time}</Card.Title></div>
                  <div><Card.Title>Avion: {item.item.plane}</Card.Title></div>
                  <div><Card.Title>Precio: U$S {item.item.price}</Card.Title></div>
                </div>
                <div>
                  <Button info outline variant="primary" mt="3" ml="3" onClick={() => toggleContent(item.id)}>{visibleContent[item.id]} Detalles del vuelo</Button>
                  <Button danger outline variant="danger" mt="3" ml="3" onClick={() => deleteFlight(item.id)}>Dar de Baja</Button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </Card.Deck>
      }
    </React.Fragment>
    <Footer/>
    </div>
    </>
  );
}

export default MyFlights;