import React from 'react';
import { Card, Col, Row } from 'bootstrap-4-react';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Services/Firebase/Firebase";
import { useState } from 'react';


const MyFlights = ({data}) => {

const [items, setItems] = useState([]);
getDocs(collection(db, 'flight')).then((snapshot)=>{
  const docs = snapshot.docs.map(doc =>{
      return {id: doc.id, ...doc.data()}
    })
    if (data === undefined){
      setItems(docs)
    } else {
      setItems(data)
    }
})


  return (
    <div>
    <Col>
      <Row></Row>
      <Row></Row>
      <Row></Row>
    </Col>

    <Col col="lg-4 md-6 sm-12">
    <Row></Row>
    <Row>
      <Card text="center" h="100" shadow p="3" bg="light" rounded>
          <Card.Header>
            <Card.Title>
            🛫Estos son tus Vuleos🛬
            </Card.Title>
          </Card.Header>
          <Card.Body>
          <Card.Title>Partida: {items.departure}</Card.Title>
          <Card.Title>Destino: {items.arrive}</Card.Title>
            <Card.Title>Fecha: {items.date}</Card.Title>
            <Card.Title>Horario: {items.time}</Card.Title>
        </Card.Body>
      </Card>
    </Row>
    <Row></Row>
  </Col>

  <Col>
      <Row></Row>
      <Row></Row>
      <Row></Row>
    </Col>
  </div>
  );
}

export default MyFlights;