import React, { useEffect, useState } from 'react';
import { Card } from 'bootstrap-4-react';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Services/Firebase/Firebase";


function MyFlights() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    getDocs(collection(db, 'flightOrder')).then((snapshot)=> {
      const flightData = snapshot.docs.map(doc => {
          return {id: doc.id, ...doc.data()}
      })
      setFlights(flightData);
    });
  }, []);


  return (
    <Card style={{ width: '18rem' }}>
        <Card.Body>
        <div>
        <h1>Mis Vuelos</h1>
        <ul>
            {flights.map((flight) => (
            <li key={flight.id}>
                <strong>Salida:</strong> {flight.departure}<br />
                <strong>Destino:</strong> {flight.arrival}<br />
                <strong>Fecha:</strong> {flight.date}<br />
                <strong>Hora:</strong> {flight.time}<br />
                <strong>Asiento:</strong> {flight.seat}<br />
                <strong>Avion:</strong> {flight.plane}<br />
            </li>
            ))}
        </ul>
        </div>
        </Card.Body>
    </Card>
  );
}

export default MyFlights;