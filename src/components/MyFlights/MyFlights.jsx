import React, { useEffect, useState } from 'react';
import { Card } from 'bootstrap-4-react';
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
  }, []);


  return (
    <Card style={{ width: '18rem' }}>
        <Card.Body>
        <div>
        <h1>Mis Vuelos</h1>
        <ul>
            {
            <li key={flight.id}>
                <strong>Salida:</strong> {flight.item}<br />
            </li>
            }
        </ul>
        </div>
        </Card.Body>
    </Card>
  );
}

export default MyFlights;