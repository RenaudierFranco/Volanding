import { Button, Col, Row, Card, Alert } from "bootstrap-4-react/lib/components";
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
        <Alert primary>Selecconá tus asientos💺</Alert>
        <Card.Body>
            <Row mt="5">
                <Col col="4" className="text-center"><Button dark outline onClick={increment}> + </Button>{' '}</Col>
                <Col col="4" className="text-center"><span> <h1>{count}</h1></span></Col>
                <Col col="4" className="text-center"><Button dark outline onClick={decrement}> - </Button>{' '} </Col>    
            </Row> 
          <Button primary className="w-100">Reservar</Button>
        </Card.Body>
        <Alert dark text="muted">Estás a un paso!</Alert>
      </Card>
    )
}

export default ItemCount;