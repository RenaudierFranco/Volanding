import React, { useEffect, useState } from 'react';
import { Card } from 'bootstrap-4-react';
import firebase from 'firebase/app';
import 'firebase/firestore';


function MyFlights() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const firebaseConfig = {
        apiKey: "AIzaSyAYBS7ExXp-d2ZsTMd715i-RhrRUzaABm0",
        authDomain: "practicaprofesional3-63b76.firebaseapp.com",   
        projectId: "practicaprofesional3-63b76"
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }


    const db = firebase.firestore();
    const flightCollection = db.collection('flight');

    flightCollection.onSnapshot((snapshot) => {
      const flightData = [];
      snapshot.forEach((doc) => {
        flightData.push({ id: doc.id, ...doc.data() });
      });
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