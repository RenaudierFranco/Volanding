import { Card } from 'bootstrap-4-react';
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({item}) =>{
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Header>Feature</Card.Header>
            <Card.Image src={item.fotoDestino} />

            <Card.Body>
                <Card.Title>{item.destino}</Card.Title>
                <Card.Subtitle mb="2" text="muted">{item.avion}</Card.Subtitle>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                <Card.Image src={item.fotoAvion} />
            </Card.Body>

            <Card.Footer>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Footer>

            <ItemCount/>
        </Card>
    )
}

export default ItemDetail;