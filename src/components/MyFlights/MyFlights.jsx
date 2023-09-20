import React, { useEffect, useState } from 'react';
import { Card } from 'bootstrap-4-react';
<<<<<<< HEAD
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
=======
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Services/Firebase/Firebase";


function MyFlights() {
  const [flight, setFlight] = useState([]);

  useEffect(() => {
    console.log(localStorage.getItem('newOrder'))

    
    if(localStorage.getItem('newOrder')){
      console.log('Nueva orden encontrada')

      const newFlight = localStorage.getItem('newOrder')
      console.log('flight item', newFlight)
    }else {
      console.log('No hay nuevas ordenes')
    }

    

    /*
    getDocs(collection(db, 'flightOrder')).then((snapshot)=> {
      const flightData = snapshot.docs.map(doc => {
          return {id: doc.id, ...doc.data()}
      })
      setFlights(flightData);
    });
    */
>>>>>>> ignacio
  }, []);


  return (
    <Card style={{ width: '18rem' }}>
        <Card.Body>
        <div>
        <h1>Mis Vuelos</h1>
        <ul>
<<<<<<< HEAD
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
=======
            {
            <li key={flight.id}>
                <strong>Salida:</strong> {flight.item}<br />
            </li>
            }
>>>>>>> ignacio
        </ul>
        </div>
        </Card.Body>
    </Card>
  );
}

export default MyFlights;