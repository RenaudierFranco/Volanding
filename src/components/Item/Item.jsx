import React, { Component } from 'react';
import { Card } from 'bootstrap-4-react';

const Item = () => {

    return (
        <Card style={{ width: '18rem' }}>
        <Card.Header>Feature</Card.Header>
        <Card.Image src={""} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Subtitle mb="2" text="muted">Card subtitle</Card.Subtitle>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Footer>
      </Card>
    )
}

export default Item;