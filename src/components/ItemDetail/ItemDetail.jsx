import React, { Component } from 'react';
import { Card } from 'bootstrap-4-react';

const ItemDetail = ({item}) => {

    return(
        <Card style={{ width: '18rem' }}>
            <Card.Header>Feature</Card.Header>
            <Card.Image src={item.img} />
            <Card.Body>
                <Card.Title>{item.tipo}</Card.Title>
                <Card.Subtitle mb="2" text="muted">{item.confort}</Card.Subtitle>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
            </Card.Body>
            <Card.Footer>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
        </Card.Footer>
      </Card>
    )
}

export default ItemDetail;