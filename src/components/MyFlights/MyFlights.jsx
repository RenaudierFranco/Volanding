import React, { useEffect, useState } from 'react';
import { Card, Button, Dropdown } from 'bootstrap-4-react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../Services/Firebase/Firebase';
import { useParams } from "react-router-dom";



const MyFlights = () => {
  const [item, setItem] = useState([]);
  const { userId } = useParams();

  useEffect(() => {
    getDocs(collection(db, 'flightOrder')).then((snapshot)=> {
      console.log(snapshot)
      const item = snapshot.docs.map(doc => {
          return {id: doc.id, ...doc.data()}
      })
      const findItem = item.filter(item => item.buyer.id === userId)
      console.log(findItem)
      if (findItem){
          setItem(findItem)
      }
  })
  }, [userId]);


  const deleteFlight = async (flightId) => {
    const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar este vuelo?');

      if (confirmDelete) {
        try {
          await deleteDoc(doc(db, 'flightOrder', flightId));

          setItem((prevItems) => prevItems.filter((item) => item.id !== flightId));
        } catch (error) {
          console.error('Error al dar de baja el vuelo:', error);
        }
      }
  };
  

  return (
    <React.Fragment>
      <h1 className="text-center">🛫 Estos son tus vuelos 🛬</h1>
      <Card.Deck className="text-center">
        {item.map((item) => (
          <Card key={item.id} shadow p="3" mb="3" bg="light" rounded>
            <Card.Body>
              <Card.Title mb="3"><strong>{item.item.departure} - {item.item.arrival}</strong></Card.Title>
              <Card.Title>Fecha: {item.item.date}  Horario: {item.item.time}</Card.Title>
              <div>
                <Button info outline mt="3" ml="3" data-toggle="modal" data-target="#exampleModal">Detalles del Vuelo</Button>
                {/*
                //Dropdawn no reenderiza bien, ademas solo muestra los detalles de un vuelo en concreto y no de todos.
                <Dropdown>
                  <Dropdown.Button secondary id="dropdownMenuButton">Dropdown button</Dropdown.Button>
                  <Dropdown.Menu aria-labelledby="dropdownMenuButton">
                    <Dropdown.item>Origen: {item.item.departure}</Dropdown.item>
                    <Dropdown.item>Destino: {item.item.arrival}</Dropdown.item>
                    <Dropdown.item>Fecha: {item.item.date}</Dropdown.item>
                    <Dropdown.item>Horario: {item.item.time}</Dropdown.item>
                    <Dropdown.item>Avion: {item.item.plane}</Dropdown.item>
                    <Dropdown.item>Precio: U$S {item.item.price}</Dropdown.item>
                  </Dropdown.Menu>
                </Dropdown>
                */}
                <Button danger outline variant="danger" mt="3" ml="3" onClick={() => deleteFlight(item.id)}>Dar de Baja</Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </Card.Deck>
    </React.Fragment>
  )
}

export default MyFlights;