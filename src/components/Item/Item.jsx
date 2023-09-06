import { Card } from 'bootstrap-4-react';

const Item = ({item}) => {

    return (
        <Card style={{ width: '18rem' }} className="m-3">
        <Card.Header>Feature</Card.Header>
        <Card.Image src={item.img} />
        <Card.Body>
          <Card.Title>{item.ciudad}</Card.Title>
          <Card.Subtitle mb="2" text="muted">{item.facilidades}</Card.Subtitle>
          <Card.Text>Alguna explicación sobre el aeropuerto.</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Footer>
      </Card>
    )
}

export default Item;