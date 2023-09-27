import React, { useEffect, useState } from 'react';
import { Card, Button } from 'bootstrap-4-react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../Services/Firebase/Firebase';
import { useParams } from 'react-router-dom';
import NavBar from "../NavBar/NavBar";



const MyFlights = () => {
  const [items, setItems] = useState([]);
  const [visibleContent, setVisibleContent] = useState({}); // Estado para controlar la visibilidad del contenido
  const { userId } = useParams();

  useEffect(() => {
    getDocs(collection(db, 'flightOrder')).then((snapshot) => {
      console.log(snapshot);
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      const userFlights = data.filter((item) => item.buyer.id === userId);
      console.log(userFlights);
      setItems(userFlights);
    });
  }, [userId]);

  const toggleContent = (flightId) => {
    setVisibleContent((prevState) => ({
      ...prevState,
      [flightId]: !prevState[flightId],
    }));
  };

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

  return (
    <React.Fragment>
      <h1 className="text-center">🛫 Estos son tus vuelos 🛬</h1>
      <Card.Deck className="text-center">
        {items.map((item) => (
          <Card key={item.id} shadow p="3" mb="3" bg="light" rounded>
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
    </React.Fragment>
  );
};

export default MyFlights;