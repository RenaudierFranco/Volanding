import { Button, Col, Row, Card } from "bootstrap-4-react/lib/components";
import { useState } from "react";


const ItemCount = () => {
    const [count, setCount] = useState(1);

    const increment = ()=> {
        if (count) {
            setCount (count + 1) 
        }
    }

    const decrement = ()=> {
        if (count > 1) {
        setCount (count -1) 
        }
    }


    return(

        <Card text="center" h="100" w="100" shadow="sm" p="3" mb="5" bg="light">
        <Card.Header>Selecconá tus asientos💺</Card.Header>
        <Card.Body>
            <Row className="m-2">
                <Col className="text-center"><Button dark outline onClick={increment}> + </Button>{' '}</Col>
                <Col className="text-center"><span> <h1>{count}</h1></span></Col>
                <Col className="text-center"><Button dark outline onClick={decrement}> - </Button>{' '} </Col>    
            </Row> 
          <Button primary className="w-100">Reservar</Button>
        </Card.Body>
        <Card.Footer text="muted">Estás a un paso!</Card.Footer>
      </Card>
    )
}

export default ItemCount;