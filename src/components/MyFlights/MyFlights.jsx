import React, { useEffect, useState } from 'react';
import { Card, Button, Modal } from 'bootstrap-4-react';
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
  },);


  const handleDeleteFlight = async (flightId) => {
    try {
      await deleteDoc(doc(db, 'flightOrder', flightId));

      setItems((prevItems) => prevItems.filter((item) => item.id !== flightId));
    } catch (error) {
      console.error('Error al dar de baja el vuelo:', error);
    }
  };

  
  return (
    <React.Fragment>
      <h1 className="text-center">🛫 Estos son tus vuelos 🛬</h1>
      <Card.Deck className="text-center">
        {items.map((item) => (
          <Card key={item.id} shadow p="3" mb="3" bg="light" rounded>
            <Card.Body>
              <Card.Title mb="3"><strong>{item.item.departure} - {item.item.arrival}</strong></Card.Title>
              <Card.Title>Fecha: {item.item.date}  Horario: {item.item.time}</Card.Title>
              <div>
                <Button info outline mt="3" ml="3" data-toggle="modal" data-target="#exampleModal">Detalles del Vuelo</Button>
                <Modal id="exampleModal" fade>
                  <Modal.Dialog centered>
                    <Modal.Content>
                      <Modal.Header>
                        <Modal.Title>Esta es la info de tu vuelo</Modal.Title>
                        <Modal.Close>
                          <span aria-hidden="true">&times;</span>
                        </Modal.Close>
                      </Modal.Header>
                      <Modal.Body>
                        <nav>Origen: {item.item.departure}</nav>
                        <nav>Destino: {item.item.arrival}</nav>
                        <nav>Fecha: {item.item.date}</nav>
                        <nav>Horario: {item.item.time}</nav>
                        <nav>Avion: {item.item.plane}</nav>
                        <nav>Precio: U$S {item.item.price}</nav>                   
                      </Modal.Body>
                    </Modal.Content>
                  </Modal.Dialog>
                </Modal>
                <Button danger outline variant="danger" mt="3" ml="3" onClick={() => handleDeleteFlight(item.id)}>Dar de Baja</Button>
              </div>
              
            </Card.Body>
          </Card>
        ))}
      </Card.Deck>
    </React.Fragment>
  )
}

export default MyFlights;