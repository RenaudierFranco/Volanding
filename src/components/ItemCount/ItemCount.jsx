import { Button, Container, Col, Row } from "bootstrap-4-react/lib/components";
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
        <div>
            <Container>
                <Row>
                    <Col></Col>
                    <Col>
                        <div direction="horizontal" gap={3}>
                            <Button variant="primary" onClick={increment}> + </Button>{' '}
                            <span> <h1>{count}</h1></span>
                            <Button variant="primary" onClick={decrement}> - </Button>{' '} 
                        </div>
                    </Col>
                    <Col></Col>    
                </Row> 
            </Container>

            <Container>
                <Button variant="primary">Add to cart</Button>{' '}
            </Container>
        </div>
    )
}

export default ItemCount;