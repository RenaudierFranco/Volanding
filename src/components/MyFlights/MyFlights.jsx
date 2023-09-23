import React, { useEffect, useState } from 'react';
import { Card, Button  } from 'bootstrap-4-react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../Services/Firebase/Firebase';



const MyFlights = ({ data }) => {
  
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'flightOrder'));
        const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

        if (data === undefined) {
          setItems(docs);
        } else {
          setItems(data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [data]);


  const handleDeleteFlight = async (flightId) => {
    /*
    try {
      await deleteDoc(doc(db, 'flightOrder', flightId));

      setItems((prevItems) => prevItems.filter((item) => item.id !== flightId));
    } catch (error) {
      console.error('Error al dar de baja el vuelo:', error);
    }
    */
    console.log("Borra esto:", flightId)
  };

  
  return (
    <React.Fragment>
      <h1 className="text-center">🛫 Estos son tus vuelos 🛬</h1>
      <Card.Deck className="text-center">
        {items.map((item) => (
          <Card key={item.id} shadow p="3" mb="3" bg="light" rounded>
            <Card.Body>
              <Card.Title mb="3"><strong>{item.departure} - {item.arrival}</strong></Card.Title>
              <Card.Title>Fecha: {item.date}  Horario: {item.time}</Card.Title>
              <Button danger outline variant="danger" mt="3" onClick={() => handleDeleteFlight(item.id)}>Dar de Baja</Button>
            </Card.Body>
          </Card>
        ))}
      </Card.Deck>
    </React.Fragment>
  )
}

export default MyFlights;